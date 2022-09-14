import { Module } from '@nestjs/common';
import {LoggerModule} from "../../../frameworks/logger-services/nest-logger/logger.module";

@Module({
  imports: [LoggerModule],
  exports: [LoggerModule],
})
export class LoggerServicesModule {}