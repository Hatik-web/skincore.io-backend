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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtRefreshGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt_interface_1 = require("../../../core/abstracts/adapters/jwt.interface");
const exceptions_interface_1 = require("../../../core/abstracts/exceptions/exceptions.interface");
let JwtRefreshGuard = class JwtRefreshGuard {
    constructor(jwtService, exceptionService) {
        this.jwtService = jwtService;
        this.exceptionService = exceptionService;
    }
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        try {
            const cookies = req.cookies;
            if (cookies.Refresh) {
                const refreshToken = cookies.Refresh;
                req.user = this.jwtService.checkToken(refreshToken);
                return true;
            }
            this.exceptionService.UnauthorizedException({ message: 'Пользователь не авторизован' });
        }
        catch (e) {
            this.exceptionService.UnauthorizedException({ message: 'Пользователь не авторизован' });
        }
    }
};
JwtRefreshGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_interface_1.IJwtService,
        exceptions_interface_1.IException])
], JwtRefreshGuard);
exports.JwtRefreshGuard = JwtRefreshGuard;
//# sourceMappingURL=jwtRefresh.guard.js.map