import {User, UserWithoutRefreshToken} from "../../entities/user.entity";

export abstract class JWTConfig {
    abstract getJwtSecret(): string;
    abstract getJwtExpirationTime(): string;
    abstract getJwtRefreshSecret(): string;
    abstract getJwtRefreshExpirationTime(): string;
}

export interface IJwtServicePayload {
    user: UserWithoutRefreshToken;
}

export abstract class IJwtService {
    abstract checkToken(token: string): any;
    abstract createToken(payload: IJwtServicePayload, secret: string, expiresIn: string): string;
}