import {ArgumentMetadata, Injectable, PipeTransform} from "@nestjs/common";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";


@Injectable()
export class ValidationPipe implements PipeTransform<any> {
    constructor(private readonly exceptionService: IException) {}

    async transform(value: any, metadata: ArgumentMetadata): Promise<any> {
        const obj = plainToClass(metadata.metatype, value);
        const errors = await validate(obj);

        if (errors.length) {
            let messages = errors.map(err => {
                return `${err.property} - ${Object.values(err.constraints).join(', ')}`
            })

            this.exceptionService.badRequestException({ message: "Bad Request", errors: messages })
        }
        return value;
    }

}