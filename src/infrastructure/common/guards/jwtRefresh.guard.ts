import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {IJwtService} from "../../../core/abstracts/adapters/jwt.interface";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";
import {Observable} from "rxjs";

// {
//     Authentication: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJpYXQiOjE2NTc4OTkyNzksImV4cCI6MTY1NzkwMTA3OX0.9myNui9BBM6h3BL42UXKMDS6anSKyD35AcuFA5aoPqQ',
//         Refresh: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QiLCJpYXQiOjE2NTc4OTkyNzksImV4cCI6MTY1Nzk4NTY3OX0.GuCuHM_oBuwTzJLeeHkkVKu22OQEqz53_MqbcIk7iQU'
// }

@Injectable()
export class JwtRefreshGuard implements CanActivate {
    constructor(
        private jwtService: IJwtService,
        private exceptionService: IException,
    ) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const cookies = req.cookies

            if(cookies.Refresh) {
                const refreshToken = cookies.Refresh
                req.user = this.jwtService.checkToken(refreshToken);
                return true;
            }

            this.exceptionService.UnauthorizedException({ message: 'Пользователь не авторизован' })
        } catch (e) {
            this.exceptionService.UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }

}

