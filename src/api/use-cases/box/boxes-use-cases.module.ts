import { Module } from '@nestjs/common';
import { BoxesFactoryService } from './boxes-factory.service';
import {BoxesUseCases} from './boxes.use-case';
import {DataServicesModule} from "../../infrastructure/services/data-services/data-services.module";

@Module({
  imports: [DataServicesModule],
  providers: [BoxesFactoryService, BoxesUseCases],
  exports: [BoxesFactoryService, BoxesUseCases],
})
export class BoxesUseCasesModule {}