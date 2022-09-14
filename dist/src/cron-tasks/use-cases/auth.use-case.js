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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCase = void 0;
const common_1 = require("@nestjs/common");
const data_services_abstract_1 = require("../../../core/abstracts/repositories/data-services.abstract");
const logger_interface_1 = require("../../../core/abstracts/logger/logger.interface");
const jwt_interface_1 = require("../../../core/abstracts/adapters/jwt.interface");
const bcrypt_interface_1 = require("../../../core/abstracts/adapters/bcrypt.interface");
const exceptions_interface_1 = require("../../../core/abstracts/exceptions/exceptions.interface");
const axios_1 = require("axios");
let AuthUseCase = class AuthUseCase {
    constructor(logger, jwtConfig, dataServices, jwtTokenService, bcryptService, exceptionService) {
        this.logger = logger;
        this.jwtConfig = jwtConfig;
        this.dataServices = dataServices;
        this.jwtTokenService = jwtTokenService;
        this.bcryptService = bcryptService;
        this.exceptionService = exceptionService;
    }
    async validateUser(steamId) {
        const steamUserResponse = await this.getSteamUser(steamId);
        const steamUser = steamUserResponse.data.response.players[0];
        const findUser = this.dataServices.users.getUserBySteamId(steamId);
        if (findUser === null)
            await this.registration(steamId);
        const [user] = await this.dataServices.users.upsert({
            username: steamUser.personaname,
            profileUrl: steamUser.profileurl,
            avatar: steamUser.avatarmedium,
            steamId: steamUser.steamid
        }, { where: { steamId } });
        return user.get({ plain: true });
    }
    async getSteamUser(steamId) {
        return await axios_1.default.get(`https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_API}&steamids=${steamId}`);
    }
    async getCookieWithJwtToken(user) {
        this.logger.log('LoginUseCases execute', `The user ${user.steamId} have been logged.`);
        const payload = { user };
        const secret = this.jwtConfig.getJwtSecret();
        const expiresIn = this.jwtConfig.getJwtExpirationTime() + 's';
        const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
        this.logger.log('LoginUseCases successful', `User ${user.username}: ${user.steamId} login successful`);
        return `Authentication=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtExpirationTime()}`;
    }
    async getCookieWithJwtRefreshToken(user) {
        this.logger.log('LoginUseCases execute', `The user ${user.steamId} have been logged.`);
        const payload = { user };
        const secret = this.jwtConfig.getJwtRefreshSecret();
        const expiresIn = this.jwtConfig.getJwtRefreshExpirationTime() + 's';
        const token = this.jwtTokenService.createToken(payload, secret, expiresIn);
        await this.setCurrentRefreshToken(token, user.steamId);
        return `Refresh=${token}; HttpOnly; Path=/; Max-Age=${this.jwtConfig.getJwtRefreshExpirationTime()}`;
    }
    async setCurrentRefreshToken(refreshToken, steamId) {
        const currentHashedRefreshToken = await this.bcryptService.hash(refreshToken);
        await this.dataServices.users.updateRefreshToken(steamId, currentHashedRefreshToken);
    }
    async registration(steamId) {
        this.logger.log('Регистрация нового пользователя', `Пользователь со steamId: ${steamId} будет создан.`);
    }
};
AuthUseCase = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof logger_interface_1.ILogger !== "undefined" && logger_interface_1.ILogger) === "function" ? _a : Object, typeof (_b = typeof jwt_interface_1.JWTConfig !== "undefined" && jwt_interface_1.JWTConfig) === "function" ? _b : Object, typeof (_c = typeof data_services_abstract_1.IDataServices !== "undefined" && data_services_abstract_1.IDataServices) === "function" ? _c : Object, typeof (_d = typeof jwt_interface_1.IJwtService !== "undefined" && jwt_interface_1.IJwtService) === "function" ? _d : Object, typeof (_e = typeof bcrypt_interface_1.IBcryptService !== "undefined" && bcrypt_interface_1.IBcryptService) === "function" ? _e : Object, typeof (_f = typeof exceptions_interface_1.IException !== "undefined" && exceptions_interface_1.IException) === "function" ? _f : Object])
], AuthUseCase);
exports.AuthUseCase = AuthUseCase;
//# sourceMappingURL=auth.use-case.js.map