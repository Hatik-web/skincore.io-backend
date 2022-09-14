import { IDataServices } from "../../../core/abstracts/repositories/data-services.abstract";
import { ILogger } from "../../../core/abstracts/logger/logger.interface";
import { IJwtService, JWTConfig } from "../../../core/abstracts/adapters/jwt.interface";
import { IBcryptService } from "../../../core/abstracts/adapters/bcrypt.interface";
import { IException } from "../../../core/abstracts/exceptions/exceptions.interface";
import { User } from "../../../core/entities/user.entity";
export declare class AuthUseCase {
    private readonly logger;
    private readonly jwtConfig;
    private readonly dataServices;
    private readonly jwtTokenService;
    private readonly bcryptService;
    private readonly exceptionService;
    constructor(logger: ILogger, jwtConfig: JWTConfig, dataServices: IDataServices, jwtTokenService: IJwtService, bcryptService: IBcryptService, exceptionService: IException);
    validateUser(steamId: User['steamId']): Promise<User>;
    private getSteamUser;
    getCookieWithJwtToken(user: User): Promise<string>;
    getCookieWithJwtRefreshToken(user: User): Promise<string>;
    private setCurrentRefreshToken;
    private registration;
}
