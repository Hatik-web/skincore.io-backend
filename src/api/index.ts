import {NestFactory} from "@nestjs/core";
import {AppModule} from "../app.module";
import * as cookieParser from "cookie-parser";
import {ValidationPipe} from "./infrastructure/common/pipes/validation.pipe";
import {ExceptionsService} from "./frameworks/exception-services/nest-exception/exceptions.service";
import {SentryInterceptor} from "@ntegral/nestjs-sentry/dist/sentry.interceptor";
import {LoggingInterceptor} from "./infrastructure/common/interceptors/logger.interceptor";
import {LoggerService} from "./frameworks/logger-services/nest-logger/logger.service";
import {ResponseInterceptor} from "./infrastructure/common/interceptors/response.interceptor";
import {AllExceptionFilter} from "./infrastructure/common/filters/exception.filter";
import {useContainer} from "class-validator";
import {NestExpressApplication} from "@nestjs/platform-express";
import { UWebSocketAdapter } from 'nestjs-uws';

export const API_PREFIX = "api_v1"

export const createHttpServer = async () => {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    //Todo: Cors
    app.enableCors({
        origin: "http://localhost:3000",
        credentials: true,
    });

    app.setGlobalPrefix(API_PREFIX);

    app.use(cookieParser());

    //TODO: Pipe
    app.useGlobalPipes(new ValidationPipe(new ExceptionsService()))

    //TODO: Interceptors
    app.useGlobalInterceptors(new SentryInterceptor())
    app.useGlobalInterceptors(new LoggingInterceptor(new LoggerService()));
    app.useGlobalInterceptors(new ResponseInterceptor());

    //TODO: Filters
    app.useGlobalFilters(new AllExceptionFilter(new LoggerService()));

    useContainer(app.select(AppModule), { fallbackOnErrors: true });

    return app;
}