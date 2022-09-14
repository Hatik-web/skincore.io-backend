import { Module } from '@nestjs/common';
import {DataServicesModule} from "../../../infrastructure/services/data-services/data-services.module";
import {IsAuthUseCase} from "./is-auth.use-case";

@Module({
  imports: [DataServicesModule],
  providers: [IsAuthUseCase],
  exports: [IsAuthUseCase],
})
export class IsAuthUseCasesModule {}