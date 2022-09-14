"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const environment_config_service_1 = require("./environment-config.service");
const environment_config_validation_1 = require("./environment-config.validation");
const jwt_interface_1 = require("../../../core/abstracts/adapters/jwt.interface");
let EnvironmentConfigModule = class EnvironmentConfigModule {
};
EnvironmentConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
                ignoreEnvFile: !(process.env.NODE_ENV === environment_config_validation_1.Environment.Local || process.env.NODE_ENV === environment_config_validation_1.Environment.Test),
                isGlobal: true,
                validate: environment_config_validation_1.validate,
            }),
        ],
        providers: [
            {
                provide: jwt_interface_1.JWTConfig,
                useClass: environment_config_service_1.EnvironmentConfigService,
            }
        ],
        exports: [jwt_interface_1.JWTConfig],
    })
], EnvironmentConfigModule);
exports.EnvironmentConfigModule = EnvironmentConfigModule;
//# sourceMappingURL=environment-config.module.js.map