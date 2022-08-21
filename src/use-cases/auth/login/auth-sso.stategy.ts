import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-openid';
import {IDataServices} from "../../../core/abstracts/repositories/data-services.abstract";
import {AuthUseCase} from "./auth.use-case";

@Injectable()
export class OpenidStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly authUseCase: AuthUseCase,
    ) {
        super({
            providerURL: 'https://steamcommunity.com/openid',
            returnURL: `${process.env.BASE_URL}/api_v1/auth/success`,
            realm: process.env.BASE_URL,
            stateless: true,
        });
    }

    private static getSteamIdFromIdentifier(identifier: string): string {
        const identifierRegex = /^https?:\/\/steamcommunity\.com\/openid\/id\/(\d+)$/;
        return identifierRegex.exec(identifier)[1];
    }

    async validate(identifier: string): Promise<any> {
        const steamId = OpenidStrategy.getSteamIdFromIdentifier(identifier);
        return await this.authUseCase.validateUser(steamId);
    }
}