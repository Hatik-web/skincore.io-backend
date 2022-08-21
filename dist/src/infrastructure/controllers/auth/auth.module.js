"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const auth_controller_1 = require("./auth.controller");
const passport = require("passport");
const passport_steam_1 = require("passport-steam");
const sso_auth_guard_1 = require("./sso-auth.guard");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [
            {
                provide: sso_auth_guard_1.PASSPORT,
                useFactory: (client) => {
                    passport.use('steam', new passport_steam_1.Strategy({
                        returnURL: `${process.env.BASE_URL}:5000/auth/success`,
                        realm: `${process.env.BASE_URL}:5000`,
                        apiKey: "2BC0156A759181D46B0D1CFF4DF431A9"
                    }, (identifier, profile, done) => {
                        console.log(profile);
                        process.nextTick(() => {
                            profile.identifier = identifier;
                            return done(null, profile);
                        });
                    }, (tokenSet, userinfo, done) => {
                        return done(null, userinfo);
                    }));
                    return passport;
                }
            }
        ],
        controllers: [auth_controller_1.AuthController]
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map