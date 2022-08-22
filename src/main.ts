import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from 'cookie-parser';
import { ConsoleStatus } from '../utils/console';
import {ValidationPipe} from "./infrastructure/common/pipes/validation.pipe";
import {SentryInterceptor} from "@ntegral/nestjs-sentry/dist/sentry.interceptor";
import {AllExceptionFilter} from "./infrastructure/common/filters/exception.filter";

import {LoggingInterceptor} from "./infrastructure/common/interceptors/logger.interceptor";
import {ResponseInterceptor} from "./infrastructure/common/interceptors/response.interceptor";

//FIXME: Зависимость от фреймворка, создать зависимость от домена
import {LoggerService} from "./frameworks/logger-services/nest-logger/logger.service";
import {ExceptionsService} from "./frameworks/exception-services/nest-exception/exceptions.service";
import {useContainer} from "class-validator";

(async function () {
  const API_PREFIX = "api_v1"
  const PORT = process.env.APP_PORT || 3000
  console.log(process.env.APP_PORT)
  const app = await NestFactory.create(AppModule);

  //Todo: Cors
  app.enableCors({
    origin: ["http://skincore.io", "http://localhost:3000"],
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

  await app.listen(PORT, async () =>
      console.info(ConsoleStatus.info, `Server has been started on: ${process.env.BASE_URL}:${PORT}/${API_PREFIX}`)
  );

}());

