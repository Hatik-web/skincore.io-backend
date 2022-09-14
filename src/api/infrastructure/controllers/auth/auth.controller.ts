import {Controller, Get, HttpStatus, Post, Req, Request, Res, UseGuards} from '@nestjs/common';
import {AuthUseCase} from "../../../use-cases/auth/login/auth.use-case";
import {LogoutUseCase} from "../../../use-cases/auth/logout/logout.usecases";
import {IsAuthUseCase} from "../../../use-cases/auth/isAuth/is-auth.use-case";
import {AuthGuard} from "@nestjs/passport";
import {InjectUser} from "../../common/decorators/inject-user.decorator";
import {User, UserWithoutRefreshToken} from "../../../core/entities/user.entity";
import {JwtAuthGuard} from "../../common/guards/jwtAuth.guard";
import {IsAuthResponseDto} from "./dtos/isAuth-response.dto";
import {JwtRefreshGuard} from "../../common/guards/jwtRefresh.guard";
import {CurrentUser} from "../../common/decorators/current-user.decorator";

@Controller('auth')
export class AuthController {
    constructor(
        private loginUseCase: AuthUseCase,
        private logoutUseCase: LogoutUseCase,
        private isAuthUseCase : IsAuthUseCase
    ) {}

    @Get('login')
    @UseGuards(AuthGuard('openid'))
    login(@InjectUser() steamId: string) {
        return 'Login successful'
    }

    @Get('success')
    @UseGuards(AuthGuard('openid'))
    async successLogin(@Request() request: any, @Res() res)
    {
        const user: User = request.user
        const accessTokenCookie = await this.loginUseCase.getCookieWithJwtToken(user);
        const refreshTokenCookie = await this.loginUseCase.getCookieWithJwtRefreshToken(user);
        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        res.status(HttpStatus.SEE_OTHER).redirect(process.env.CLIENT_URL);
    }


    @Post('logout')
    @UseGuards(JwtAuthGuard)
    async logout(@Request() request: any) {
        const cookie = await this.logoutUseCase.execute();
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }

    @Get('is_authenticated')
    @UseGuards(JwtAuthGuard)
    async isAuthenticated(
        @Request() request
    ) : Promise<IsAuthResponseDto> {
        const isAuthResponseDto = new IsAuthResponseDto();
        try {
            const user: UserWithoutRefreshToken = await this.isAuthUseCase.execute(request.user.username);

            isAuthResponseDto.success = true;
            isAuthResponseDto.user = user;
            return isAuthResponseDto;
        } catch (error) {
            isAuthResponseDto.success = false;
        }

        return isAuthResponseDto;
    }

    @Get('refresh')
    @UseGuards(JwtRefreshGuard)
    async refresh(@Req() request: any, @CurrentUser() currentUser: User) {
        const accessTokenCookie = await this.loginUseCase.getCookieWithJwtToken(currentUser);
        const refreshTokenCookie = await this.loginUseCase.getCookieWithJwtRefreshToken(currentUser);
        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        return 'Refresh successful';
    }
}