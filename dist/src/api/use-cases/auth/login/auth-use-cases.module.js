"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const auth_use_case_1 = require("./auth.use-case");
const data_services_module_1 = require("../../../infrastructure/services/data-services/data-services.module");
const logger_services_module_1 = require("../../../infrastructure/services/logger-services/logger-services.module");
const jwt_module_1 = require("../../../infrastructure/services/jwt-services/jwt.module");
const environment_config_module_1 = require("../../../infrastructure/config/environment-config/environment-config.module");
const bcrypt_module_1 = require("../../../infrastructure/services/bcrypt-services/bcrypt.module");
const exception_services_module_1 = require("../../../infrastructure/services/exception-services/exception-services.module");
const passport_1 = require("@nestjs/passport");
const auth_sso_stategy_1 = require("./auth-sso.stategy");
let AuthUseCasesModule = class AuthUseCasesModule {
};
AuthUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            passport_1.PassportModule,
            data_services_module_1.DataServicesModule,
            logger_services_module_1.LoggerServicesModule,
            jwt_module_1.JwtServiceModule,
            environment_config_module_1.EnvironmentConfigModule,
            bcrypt_module_1.BcryptModule,
            exception_services_module_1.ExceptionServicesModule
        ],
        providers: [auth_use_case_1.AuthUseCase, auth_sso_stategy_1.OpenidStrategy],
        exports: [auth_use_case_1.AuthUseCase],
    })
], AuthUseCasesModule);
exports.AuthUseCasesModule = AuthUseCasesModule;
//# sourceMappingURL=auth-use-cases.module.js.map