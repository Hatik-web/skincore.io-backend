import { ConfigService } from '@nestjs/config';
import { JWTConfig } from "../../../core/abstracts/adapters/jwt.interface";
export declare class EnvironmentConfigService implements JWTConfig {
    private configService;
    constructor(configService: ConfigService);
    getJwtSecret(): string;
    getJwtExpirationTime(): string;
    getJwtRefreshSecret(): string;
    getJwtRefreshExpirationTime(): string;
}
