"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootServicesModule = void 0;
const common_1 = require("@nestjs/common");
const bcrypt_module_1 = require("./bcrypt-services/bcrypt.module");
const data_services_module_1 = require("./data-services/data-services.module");
const error_monitoring_services_module_1 = require("./error-monitoring-services/error-monitoring-services.module");
const exception_services_module_1 = require("./exception-services/exception-services.module");
const hexaone_service_module_1 = require("./hexaone-service/hexaone-service.module");
const jwt_module_1 = require("./jwt-services/jwt.module");
const logger_services_module_1 = require("./logger-services/logger-services.module");
let RootServicesModule = class RootServicesModule {
};
RootServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            bcrypt_module_1.BcryptModule,
            data_services_module_1.DataServicesModule,
            error_monitoring_services_module_1.ErrorMonitoringServicesModule,
            exception_services_module_1.ExceptionServicesModule,
            hexaone_service_module_1.HexaOneServiceModule,
            jwt_module_1.JwtServiceModule,
            logger_services_module_1.LoggerServicesModule
        ],
        exports: [
            bcrypt_module_1.BcryptModule,
            data_services_module_1.DataServicesModule,
            error_monitoring_services_module_1.ErrorMonitoringServicesModule,
            exception_services_module_1.ExceptionServicesModule,
            hexaone_service_module_1.HexaOneServiceModule,
            jwt_module_1.JwtServiceModule,
            logger_services_module_1.LoggerServicesModule
        ],
    })
], RootServicesModule);
exports.RootServicesModule = RootServicesModule;
//# sourceMappingURL=root-services.module.js.map