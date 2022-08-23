import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { IException } from "../../../core/abstracts/exceptions/exceptions.interface";
export declare class ValidationPipe implements PipeTransform<any> {
    private readonly exceptionService;
    constructor(exceptionService: IException);
    transform(value: any, metadata: ArgumentMetadata): Promise<any>;
}
