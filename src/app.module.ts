import {Module} from '@nestjs/common';
import {DataServicesModule} from "./infrastructure/services/data-services/data-services.module";
import {AppController} from "./infrastructure/controllers/app/app.controller";
import {
    ErrorMonitoringServicesModule
} from "./infrastructure/services/error-monitoring-services/error-monitoring-services.module";
import {ExceptionServicesModule} from "./infrastructure/services/exception-services/exception-services.module";
import {LoggerServicesModule} from "./infrastructure/services/logger-services/logger-services.module";
import {EnvironmentConfigModule} from "./infrastructure/config/environment-config/environment-config.module";
import {UserUseCasesModule} from "./use-cases/user/user-use-cases.module";
import {AuthUseCasesModule} from "./use-cases/auth/login/auth-use-cases.module";
import {AuthController} from "./infrastructure/controllers/auth/auth.controller";
import {UserController} from "./infrastructure/controllers/user/user.controller";
import {LogoutUseCasesModule} from "./use-cases/auth/logout/logout-use-cases.module";
import {IsAuthUseCasesModule} from "./use-cases/auth/isAuth/is-auth-use-cases.module";
import {
    BoxCategoriesController
} from "./infrastructure/controllers/box/boxes-categories/box-categories.controller";
import {BoxesUseCasesModule} from "./use-cases/box/boxes-use-cases.module";
import * as path from 'path';
import {ServeStaticModule} from "@nestjs/serve-static";
import {HexaOneServiceModule} from "./infrastructure/services/hexaone-service/hexaone-service.module";
import {ParseDropUseCasesModule} from "./use-cases/drop/parse-drop-use-cases.module";
import {DropController} from "./infrastructure/controllers/drop/drop.controller";
import {DropUseCasesModule} from "./use-cases/drop/drop-use-cases.module";
import {BoxController} from "./infrastructure/controllers/box/box/box.controller";

@Module({
    imports: [
        //Todo: Configuration
        EnvironmentConfigModule,
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '..', 'static')
        }),

        //Todo: Services
        ErrorMonitoringServicesModule,
        DataServicesModule,
        ExceptionServicesModule,
        LoggerServicesModule,
        HexaOneServiceModule,

        //Todo: UseCases
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
    providers: [],
})
export class AppModule {
}
