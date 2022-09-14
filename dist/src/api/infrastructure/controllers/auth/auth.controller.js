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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_use_case_1 = require("../../../use-cases/auth/login/auth.use-case");
const logout_usecases_1 = require("../../../use-cases/auth/logout/logout.usecases");
const is_auth_use_case_1 = require("../../../use-cases/auth/isAuth/is-auth.use-case");
const passport_1 = require("@nestjs/passport");
const inject_user_decorator_1 = require("../../common/decorators/inject-user.decorator");
const user_entity_1 = require("../../../core/entities/user.entity");
const jwtAuth_guard_1 = require("../../common/guards/jwtAuth.guard");
const isAuth_response_dto_1 = require("./dtos/isAuth-response.dto");
const jwtRefresh_guard_1 = require("../../common/guards/jwtRefresh.guard");
const current_user_decorator_1 = require("../../common/decorators/current-user.decorator");
let AuthController = class AuthController {
    constructor(loginUseCase, logoutUseCase, isAuthUseCase) {
        this.loginUseCase = loginUseCase;
        this.logoutUseCase = logoutUseCase;
        this.isAuthUseCase = isAuthUseCase;
    }
    login(steamId) {
        return 'Login successful';
    }
    async successLogin(request, res) {
        const user = request.user;
        const accessTokenCookie = await this.loginUseCase.getCookieWithJwtToken(user);
        const refreshTokenCookie = await this.loginUseCase.getCookieWithJwtRefreshToken(user);
        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        res.status(common_1.HttpStatus.SEE_OTHER).redirect(process.env.CLIENT_URL);
    }
    async logout(request) {
        const cookie = await this.logoutUseCase.execute();
        request.res.setHeader('Set-Cookie', cookie);
        return 'Logout successful';
    }
    async isAuthenticated(request) {
        const isAuthResponseDto = new isAuth_response_dto_1.IsAuthResponseDto();
        try {
            const user = await this.isAuthUseCase.execute(request.user.username);
            isAuthResponseDto.success = true;
            isAuthResponseDto.user = user;
            return isAuthResponseDto;
        }
        catch (error) {
            isAuthResponseDto.success = false;
        }
        return isAuthResponseDto;
    }
    async refresh(request, currentUser) {
        const accessTokenCookie = await this.loginUseCase.getCookieWithJwtToken(currentUser);
        const refreshTokenCookie = await this.loginUseCase.getCookieWithJwtRefreshToken(currentUser);
        request.res.setHeader('Set-Cookie', [accessTokenCookie, refreshTokenCookie]);
        return 'Refresh successful';
    }
};
__decorate([
    (0, common_1.Get)('login'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('openid')),
    __param(0, (0, inject_user_decorator_1.InjectUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('success'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('openid')),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "successLogin", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('is_authenticated'),
    (0, common_1.UseGuards)(jwtAuth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "isAuthenticated", null);
__decorate([
    (0, common_1.Get)('refresh'),
    (0, common_1.UseGuards)(jwtRefresh_guard_1.JwtRefreshGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, current_user_decorator_1.CurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, user_entity_1.User]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refresh", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_use_case_1.AuthUseCase,
        logout_usecases_1.LogoutUseCase,
        is_auth_use_case_1.IsAuthUseCase])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map