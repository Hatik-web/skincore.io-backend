import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { LoggerService } from "../../../frameworks/logger-services/nest-logger/logger.service";
export declare class AllExceptionFilter implements ExceptionFilter {
    private readonly logger;
    constructor(logger: LoggerService);
    catch(exception: any, host: ArgumentsHost): void;
    private logMessage;
}
