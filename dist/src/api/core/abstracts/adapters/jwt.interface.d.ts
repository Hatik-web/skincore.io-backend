import { UserWithoutRefreshToken } from "../../entities/user.entity";
export declare abstract class JWTConfig {
    abstract getJwtSecret(): string;
    abstract getJwtExpirationTime(): string;
    abstract getJwtRefreshSecret(): string;
    abstract getJwtRefreshExpirationTime(): string;
}
export interface IJwtServicePayload {
    user: UserWithoutRefreshToken;
}
export declare abstract class IJwtService {
    abstract checkToken(token: string): any;
    abstract createToken(payload: IJwtServicePayload, secret: string, expiresIn: string): string;
    abstract parseToken(cookie: string): string;
}
