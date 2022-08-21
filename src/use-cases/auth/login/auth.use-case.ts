import {Injectable} from '@nestjs/common';
import {IDataServices} from "../../../core/abstracts/repositories/data-services.abstract";
import {ILogger} from "../../../core/abstracts/logger/logger.interface";
import {IJwtService, IJwtServicePayload, JWTConfig} from "../../../core/abstracts/adapters/jwt.interface";
import {IBcryptService} from "../../../core/abstracts/adapters/bcrypt.interface";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";
import axios from 'axios'
import {SteamUser, User} from "../../../core/entities/user.entity";


@Injectable()
export class AuthUseCase {

    constructor(
        private readonly logger: ILogger,
        private readonly jwtConfig: JWTConfig,
        private readonly dataServices: IDataServices,
        private readonly jwtTokenService: IJwtService,
        private readonly bcryptService: IBcryptService,
        private readonly exceptionService: IException
    ) {
    }

    async validateUser(steamId: User['steamId']): Promise<User> {
        const steamUserResponse = await this.getSteamUser(steamId);
        const steamUser: SteamUser = steamUserResponse.data.response.players[0];
        const findUser = this.dataServices.users.getUserBySteamId(steamId);
        if(findUser === null) await this.registration(steamId)
        const [user] = await this.dataServices.users.upsert({
                username: steamUser.personaname,
                profileUrl: steamUser.profileurl,
                avatar: steamUser.avatarmedium,
                steamId: steamUser.steamid
            },
            { where: { steamId } }
        );

        return user.get({ plain: true })
    }

    private async getSteamUser(steamId: User['steamId']): Promise<any> {
        return await axios.get(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API}&steamids=${steamId}`
        )
    }

    async getCookieWithJwtToken(user: User): Promise<string> {
        this.logger.log('LoginUseCases execute', `The user ${user.steamId} have been logged.`);
        const payload: IJwtServicePayload = { user };
        const secret = this.jwtConfig.getJwtSecret();
        const expiresIn = this.jwtConfig.getJwtExpirationTime() + 's';
        const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
        this.logger.log('LoginUseCases successful', `User ${user.username}: ${user.steamId} login successful`);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtExpirationTime()}`;
    }

    async getCookieWithJwtRefreshToken(user: User): Promise<string> {
        this.logger.log('LoginUseCases execute', `The user ${user.steamId} have been logged.`);
        const payload: IJwtServicePayload = { user };
        const secret = this.jwtConfig.getJwtRefreshSecret();
        const expiresIn = this.jwtConfig.getJwtRefreshExpirationTime() + 's';
        const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
        await this.setCurrentRefreshToken(token, user.steamId);
        return `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtRefreshExpirationTime()}`;
    }

    private async setCurrentRefreshToken(refreshToken: string, steamId: User['steamId']): Promise<void> {
        const currentHashedRefreshToken = await this.bcryptService.hash(refreshToken);
        await this.dataServices.users.updateRefreshToken(steamId, currentHashedRefreshToken);
    }

    private async registration(steamId: User['steamId']): Promise<void> {
        // Действия при регистрации
        this.logger.log('Регистрация нового пользователя', `Пользователь со steamId: ${steamId} будет создан.`);
    }
}