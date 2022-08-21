import { Module } from '@nestjs/common';
import {SentryModule} from "@ntegral/nestjs-sentry";

@Module({
  imports: [
      SentryModule.forRoot({
    debug: true,
    dsn: 'https://01c8b0b854f24ddeaf0872866c4c3c08@o1221362.ingest.sentry.io/6566625',
    environment: 'development',
    tracesSampleRate: 1.0,
  }),],
  exports: [SentryModule],
})
export class ErrorMonitoringModule {}