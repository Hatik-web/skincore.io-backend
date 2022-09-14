"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHttpServer = exports.API_PREFIX = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("../app.module");
const cookieParser = require("cookie-parser");
const validation_pipe_1 = require("./infrastructure/common/pipes/validation.pipe");
const exceptions_service_1 = require("./frameworks/exception-services/nest-exception/exceptions.service");
const sentry_interceptor_1 = require("@ntegral/nestjs-sentry/dist/sentry.interceptor");
const logger_interceptor_1 = require("./infrastructure/common/interceptors/logger.interceptor");
const logger_service_1 = require("./frameworks/logger-services/nest-logger/logger.service");
const response_interceptor_1 = require("./infrastructure/common/interceptors/response.interceptor");
const exception_filter_1 = require("./infrastructure/common/filters/exception.filter");
const class_validator_1 = require("class-validator");
exports.API_PREFIX = "api_v1";
const createHttpServer = async () => {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: "http://localhost:3000",
        credentials: true,
    });
    app.setGlobalPrefix(exports.API_PREFIX);
    app.use(cookieParser());
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe(new exceptions_service_1.ExceptionsService()));
    app.useGlobalInterceptors(new sentry_interceptor_1.SentryInterceptor());
    app.useGlobalInterceptors(new logger_interceptor_1.LoggingInterceptor(new logger_service_1.LoggerService()));
    app.useGlobalInterceptors(new response_interceptor_1.ResponseInterceptor());
    app.useGlobalFilters(new exception_filter_1.AllExceptionFilter(new logger_service_1.LoggerService()));
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    return app;
};
exports.createHttpServer = createHttpServer;
//# sourceMappingURL=index.js.map