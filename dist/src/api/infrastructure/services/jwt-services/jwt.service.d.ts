import { JwtService } from '@nestjs/jwt';
import { IJwtService, IJwtServicePayload } from "../../../core/abstracts/adapters/jwt.interface";
export declare class JwtTokenService implements IJwtService {
    private readonly jwtService;
    constructor(jwtService: JwtService);
    checkToken(token: string): any;
    createToken(payload: IJwtServicePayload, secret: string, expiresIn: string): string;
    parseToken(cookie: string): string;
}
