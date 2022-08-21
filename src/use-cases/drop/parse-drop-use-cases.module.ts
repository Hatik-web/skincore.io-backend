import { Module } from '@nestjs/common';
import {ParseDropUseCases} from "./parse-drop.use-case";
import {HexaOneServiceModule} from "../../infrastructure/services/hexaone-service/hexaone-service.module";

@Module({
  imports: [HexaOneServiceModule],
  providers: [ParseDropUseCases],
  exports: [ParseDropUseCases],
})
export class ParseDropUseCasesModule {}