"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSSOModule = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const auth_controller_1 = require("./auth.controller");
const auth_sso_stategy_1 = require("./auth-sso.stategy");
let AuthSSOModule = class AuthSSOModule {
};
AuthSSOModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule],
        providers: [auth_sso_stategy_1.OpenidStrategy],
        controllers: [auth_controller_1.AuthSSOController],
    })
], AuthSSOModule);
exports.AuthSSOModule = AuthSSOModule;
//# sourceMappingURL=auth.module.js.map