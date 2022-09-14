import { Module } from '@nestjs/common';
import {LoggerService} from "./logger.service";
import {ILogger} from "../../../core/abstracts/logger/logger.interface";


@Module({
    providers: [{
        provide: ILogger,
        useClass: LoggerService,
    }],
    exports: [ILogger]
})
export class LoggerModule {}