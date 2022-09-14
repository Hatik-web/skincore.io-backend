import {Module} from '@nestjs/common';
import {AuthUseCase} from './auth.use-case';
import {DataServicesModule} from "../../../infrastructure/services/data-services/data-services.module";
import {LoggerServicesModule} from "../../../infrastructure/services/logger-services/logger-services.module";
import {JwtServiceModule} from "../../../infrastructure/services/jwt-services/jwt.module";
import {EnvironmentConfigModule} from "../../../infrastructure/config/environment-config/environment-config.module";
import {BcryptModule} from "../../../infrastructure/services/bcrypt-services/bcrypt.module";
import {ExceptionServicesModule} from "../../../infrastructure/services/exception-services/exception-services.module";
import {PassportModule} from "@nestjs/passport";
import {OpenidStrategy} from "./auth-sso.stategy";

@Module({
    imports: [
        PassportModule,
        DataServicesModule,
        LoggerServicesModule,
        JwtServiceModule,
        EnvironmentConfigModule,
        BcryptModule,
        ExceptionServicesModule
    ],
    providers: [AuthUseCase, OpenidStrategy],
    exports: [AuthUseCase],
})
export class AuthUseCasesModule {
}