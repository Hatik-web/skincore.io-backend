import {EnvironmentConfigModule} from "./infrastructure/config/environment-config/environment-config.module";
import {AppController} from "./infrastructure/controllers/app/app.controller";
import {AuthController} from "./infrastructure/controllers/auth/auth.controller";
import {UserController} from "./infrastructure/controllers/user/user.controller";
import {BoxCategoriesController} from "./infrastructure/controllers/box/boxes-categories/box-categories.controller";
import {DropController} from "./infrastructure/controllers/drop/drop.controller";
import {BoxController} from "./infrastructure/controllers/box/box/box.controller";
import {Module} from "@nestjs/common";
import {BcryptModule} from "./infrastructure/services/bcrypt-services/bcrypt.module";
import {DataServicesModule} from "./infrastructure/services/data-services/data-services.module";
import {
    ErrorMonitoringServicesModule
} from "./infrastructure/services/error-monitoring-services/error-monitoring-services.module";
import {ExceptionServicesModule} from "./infrastructure/services/exception-services/exception-services.module";
import {HexaOneServiceModule} from "./infrastructure/services/hexaone-service/hexaone-service.module";
import {JwtServiceModule} from "./infrastructure/services/jwt-services/jwt.module";
import {LoggerServicesModule} from "./infrastructure/services/logger-services/logger-services.module";
import {AuthUseCasesModule} from "./use-cases/auth/login/auth-use-cases.module";
import {UserUseCasesModule} from "./use-cases/user/user-use-cases.module";
import {LogoutUseCasesModule} from "./use-cases/auth/logout/logout-use-cases.module";
import {IsAuthUseCasesModule} from "./use-cases/auth/isAuth/is-auth-use-cases.module";
import {BoxesUseCasesModule} from "./use-cases/box/boxes-use-cases.module";
import {ParseDropUseCasesModule} from "./use-cases/drop/parse-drop-use-cases.module";
import {DropUseCasesModule} from "./use-cases/drop/drop-use-cases.module";

@Module({
    imports: [
        EnvironmentConfigModule,

        BcryptModule,
        DataServicesModule,
        ErrorMonitoringServicesModule,
        ExceptionServicesModule,
        HexaOneServiceModule,
        JwtServiceModule,
        LoggerServicesModule,

        AuthUseCasesModule,
        UserUseCasesModule,
        LogoutUseCasesModule,
        IsAuthUseCasesModule,
        BoxesUseCasesModule,
        ParseDropUseCasesModule,
        DropUseCasesModule
    ],
    controllers: [
        AppController,
        AuthController,
        UserController,
        BoxCategoriesController,
        DropController,
        BoxController
    ],
    providers: [ ],
})
export class MainApiModule {}