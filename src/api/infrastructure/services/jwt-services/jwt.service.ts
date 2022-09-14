import {Injectable} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import {IJwtService, IJwtServicePayload} from "../../../core/abstracts/adapters/jwt.interface";

@Injectable()
export class JwtTokenService implements IJwtService {
    constructor(private readonly jwtService: JwtService) {}

    checkToken(token: string): any {
        return this.jwtService.verify(token);
    }

    createToken(payload: IJwtServicePayload, secret: string, expiresIn: string): string {
        return this.jwtService.sign(payload, {
            secret: secret,
            expiresIn: expiresIn,
        });
    }

    parseToken(cookie: string): string {
        const cookies = cookie.split(";")
        return cookies[0].replace('Authentication=', '')
    }
}