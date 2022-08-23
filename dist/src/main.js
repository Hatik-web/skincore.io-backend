"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const console_1 = require("../utils/console");
const validation_pipe_1 = require("./infrastructure/common/pipes/validation.pipe");
const sentry_interceptor_1 = require("@ntegral/nestjs-sentry/dist/sentry.interceptor");
const exception_filter_1 = require("./infrastructure/common/filters/exception.filter");
const logger_interceptor_1 = require("./infrastructure/common/interceptors/logger.interceptor");
const response_interceptor_1 = require("./infrastructure/common/interceptors/response.interceptor");
const logger_service_1 = require("./frameworks/logger-services/nest-logger/logger.service");
const exceptions_service_1 = require("./frameworks/exception-services/nest-exception/exceptions.service");
const class_validator_1 = require("class-validator");
(async function () {
    const API_PREFIX = "api_v1";
    const PORT = process.env.APP_PORT || 3000;
    console.log(process.env.APP_PORT);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: ["https://skincore.io", "http://localhost:3000"],
        credentials: true,
    });
    app.setGlobalPrefix(API_PREFIX);
    app.use(cookieParser());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe(new exceptions_service_1.ExceptionsService()));
    app.useGlobalInterceptors(new sentry_interceptor_1.SentryInterceptor());
    app.useGlobalInterceptors(new logger_interceptor_1.LoggingInterceptor(new logger_service_1.LoggerService()));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    app.useGlobalFilters(new exception_filter_1.AllExceptionFilter(new logger_service_1.LoggerService()));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    await app.listen(PORT, async () => console.info(console_1.ConsoleStatus.info, `Server has been started on: ${process.env.BASE_URL}:${PORT}/${API_PREFIX}`));
}());
//# sourceMappingURL=main.js.map