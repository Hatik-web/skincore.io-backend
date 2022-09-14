import { plainToClass } from 'class-transformer';
import { IsBoolean, IsEnum, IsNumber, IsString, validateSync } from 'class-validator';
import {ConsoleStatus} from "../../../../../utils/console";

export enum Environment {
    Development = 'development',
    Production = 'production',
    Local = 'local',
    Test = 'test',
}

class EnvironmentVariables {
    @IsString()
    NODE_ENV: string;

    @IsString()
    JWT_SECRET: string;
    @IsString()
    JWT_EXPIRATION_TIME: string;
    @IsString()
    JWT_REFRESH_TOKEN_SECRET: string;
    @IsString()
    JWT_REFRESH_TOKEN_EXPIRATION_TIME: string;
    @IsString()
    BASE_URL: string

    // @IsString()
    // HOST_DB: string;
    // @IsString()
    // PORT_DB: string;
    // @IsString()
    // USER_DB: string;
    // @IsString()
    // PASSWORD_DB: string;
    // @IsString()
    // NAME_DB: string;
}

export function validate(config: Record<string, unknown>) {

    const validatedConfig = plainToClass(EnvironmentVariables, config, {
        enableImplicitConversion: true,
    });
    const errors = validateSync(validatedConfig, { skipMissingProperties: false });

    if (errors.length > 0) {
        console.log("Ошибка при валидации env file")
        console.log(ConsoleStatus.error, errors.toString())
        throw new Error(errors.toString());
    }
    return validatedConfig;
}