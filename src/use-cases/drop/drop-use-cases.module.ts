import { Module } from '@nestjs/common';
import {DropUseCases} from './drop.use-case';
import {DataServicesModule} from "../../infrastructure/services/data-services/data-services.module";

@Module({
  imports: [DataServicesModule],
  providers: [DropUseCases],
  exports: [DropUseCases],
})
export class DropUseCasesModule {}