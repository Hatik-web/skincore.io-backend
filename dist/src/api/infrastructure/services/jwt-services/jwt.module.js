"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtServiceModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const jwt_service_1 = require("./jwt.service");
const jwt_interface_1 = require("../../../core/abstracts/adapters/jwt.interface");
let JwtServiceModule = class JwtServiceModule {
};
JwtServiceModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET,
                signOptions: { expiresIn: '24h' },
            }),
        ],
        providers: [{
                provide: jwt_interface_1.IJwtService,
                useClass: jwt_service_1.JwtTokenService,
            }],
        exports: [jwt_interface_1.IJwtService]
    })
], JwtServiceModule);
exports.JwtServiceModule = JwtServiceModule;
//# sourceMappingURL=jwt.module.js.map