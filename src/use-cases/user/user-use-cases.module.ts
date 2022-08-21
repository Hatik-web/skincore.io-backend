import { Module } from '@nestjs/common';
import { UserUseCases } from './user.use-case';
import {DataServicesModule} from "../../infrastructure/services/data-services/data-services.module";
import {UserFactoryService} from "./user-factory.service";

@Module({
  imports: [DataServicesModule],
  providers: [UserFactoryService, UserUseCases],
  exports: [UserFactoryService, UserUseCases],
})
export class UserUseCasesModule {}