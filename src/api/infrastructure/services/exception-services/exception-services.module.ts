import { Module } from '@nestjs/common';
import {ExceptionsModule} from "../../../frameworks/exception-services/nest-exception/exceptions.module";

@Module({
  imports: [ExceptionsModule],
  exports: [ExceptionsModule],
})
export class ExceptionServicesModule {}