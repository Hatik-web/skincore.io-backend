"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("./infrastructure/services/data-services/data-services.module");
const app_controller_1 = require("./infrastructure/controllers/app/app.controller");
const error_monitoring_services_module_1 = require("./infrastructure/services/error-monitoring-services/error-monitoring-services.module");
const exception_services_module_1 = require("./infrastructure/services/exception-services/exception-services.module");
const logger_services_module_1 = require("./infrastructure/services/logger-services/logger-services.module");
const environment_config_module_1 = require("./infrastructure/config/environment-config/environment-config.module");
const user_use_cases_module_1 = require("./use-cases/user/user-use-cases.module");
const auth_use_cases_module_1 = require("./use-cases/auth/login/auth-use-cases.module");
const auth_controller_1 = require("./infrastructure/controllers/auth/auth.controller");
const user_controller_1 = require("./infrastructure/controllers/user/user.controller");
const logout_use_cases_module_1 = require("./use-cases/auth/logout/logout-use-cases.module");
const is_auth_use_cases_module_1 = require("./use-cases/auth/isAuth/is-auth-use-cases.module");
const box_categories_controller_1 = require("./infrastructure/controllers/box/boxes-categories/box-categories.controller");
const boxes_use_cases_module_1 = require("./use-cases/box/boxes-use-cases.module");
const path = require("path");
const serve_static_1 = require("@nestjs/serve-static");
const hexaone_service_module_1 = require("./infrastructure/services/hexaone-service/hexaone-service.module");
const parse_drop_use_cases_module_1 = require("./use-cases/drop/parse-drop-use-cases.module");
const drop_controller_1 = require("./infrastructure/controllers/drop/drop.controller");
const drop_use_cases_module_1 = require("./use-cases/drop/drop-use-cases.module");
const box_controller_1 = require("./infrastructure/controllers/box/box/box.controller");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            environment_config_module_1.EnvironmentConfigModule,
            serve_static_1.ServeStaticModule.forRoot({
                rootPath: path.resolve(__dirname, '..', 'static')
            }),
            error_monitoring_services_module_1.ErrorMonitoringServicesModule,
            data_services_module_1.DataServicesModule,
            exception_services_module_1.ExceptionServicesModule,
            logger_services_module_1.LoggerServicesModule,
            hexaone_service_module_1.HexaOneServiceModule,
            auth_use_cases_module_1.AuthUseCasesModule,
            user_use_cases_module_1.UserUseCasesModule,
            logout_use_cases_module_1.LogoutUseCasesModule,
            is_auth_use_cases_module_1.IsAuthUseCasesModule,
            boxes_use_cases_module_1.BoxesUseCasesModule,
            parse_drop_use_cases_module_1.ParseDropUseCasesModule,
            drop_use_cases_module_1.DropUseCasesModule
        ],
        controllers: [
            app_controller_1.AppController,
            auth_controller_1.AuthController,
            user_controller_1.UserController,
            box_categories_controller_1.BoxCategoriesController,
            drop_controller_1.DropController,
            box_controller_1.BoxController
        ],
        providers: [],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map