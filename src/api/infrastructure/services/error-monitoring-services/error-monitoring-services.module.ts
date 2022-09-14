import { Module } from '@nestjs/common';
import {
  ErrorMonitoringModule
} from "../../../frameworks/error-monitoring-services/sentry/error-monitoring.module";

@Module({
  imports: [ErrorMonitoringModule],
  exports: [ErrorMonitoringModule],
})
export class ErrorMonitoringServicesModule {}