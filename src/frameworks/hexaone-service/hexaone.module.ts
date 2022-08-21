import { Module } from '@nestjs/common';
import {HexaOneService} from "./hexaone.service";
import {IHexaOneService} from "../../core/abstracts/adapters/hexaone.interface";


@Module({
    providers: [{
        provide: IHexaOneService,
        useClass: HexaOneService,
    }],
    exports: [IHexaOneService]
})
export class HexaOneModule {}