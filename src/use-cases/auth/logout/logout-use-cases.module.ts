import { Module } from '@nestjs/common';
import {LogoutUseCase} from "./logout.usecases";

@Module({
  providers: [LogoutUseCase],
  exports: [LogoutUseCase],
})
export class LogoutUseCasesModule {}