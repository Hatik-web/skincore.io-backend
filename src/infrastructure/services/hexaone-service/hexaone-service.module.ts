import { Module } from '@nestjs/common';
import {ExceptionsModule} from "../../../frameworks/exception-services/nest-exception/exceptions.module";
import {HexaOneModule} from "../../../frameworks/hexaone-service/hexaone.module";

@Module({
  imports: [HexaOneModule],
  exports: [HexaOneModule],
})
export class HexaOneServiceModule {}