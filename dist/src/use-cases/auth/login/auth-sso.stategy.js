"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var OpenidStrategy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenidStrategy = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const passport_openid_1 = require("passport-openid");
const auth_use_case_1 = require("./auth.use-case");
let OpenidStrategy = OpenidStrategy_1 = class OpenidStrategy extends (0, passport_1.PassportStrategy)(passport_openid_1.Strategy) {
    constructor(authUseCase) {
        super({
            providerURL: 'https://steamcommunity.com/openid',
            returnURL: `${process.env.BASE_URL}/api_v1/auth/success`,
            realm: process.env.BASE_URL,
            stateless: true,
        });
        this.authUseCase = authUseCase;
    }
    static getSteamIdFromIdentifier(identifier) {
        const identifierRegex = /^https?:\/\/steamcommunity\.com\/openid\/id\/(\d+)$/;
        return identifierRegex.exec(identifier)[1];
    }
    async validate(identifier) {
        const steamId = OpenidStrategy_1.getSteamIdFromIdentifier(identifier);
        return await this.authUseCase.validateUser(steamId);
    }
};
OpenidStrategy = OpenidStrategy_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_use_case_1.AuthUseCase])
], OpenidStrategy);
exports.OpenidStrategy = OpenidStrategy;
//# sourceMappingURL=auth-sso.stategy.js.map