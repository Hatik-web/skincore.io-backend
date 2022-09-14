import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvironmentConfigService } from './environment-config.service';
import {Environment, validate} from './environment-config.validation';
import {JWTConfig} from "../../../core/abstracts/adapters/jwt.interface";


@Module({
        imports: [
        ConfigModule.forRoot({
            envFilePath: `${process.cwd()}/env/${process.env.NODE_ENV}.env`,
            ignoreEnvFile: !(process.env.NODE_ENV === Environment.Local || process.env.NODE_ENV === Environment.Test),
            isGlobal: true,
            validate,
        }),
    ],
    providers: [
        {
            provide: JWTConfig,
            useClass: EnvironmentConfigService,
        }
    ],
    exports: [JWTConfig],
})
export class EnvironmentConfigModule {}

