import { Module } from '@nestjs/common';
import {ExceptionsService} from "./exceptions.service";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";

@Module({
    providers: [{
        provide: IException,
        useClass: ExceptionsService,
    }],
    exports: [IException]
})
export class ExceptionsModule {}