import { IException, IFormatExceptionMessage } from "../../../core/abstracts/exceptions/exceptions.interface";
export declare class ExceptionsService implements IException {
    badRequestException(data: IFormatExceptionMessage): void;
    internalServerErrorException(data?: IFormatExceptionMessage): void;
    forbiddenException(data?: IFormatExceptionMessage): void;
    UnauthorizedException(data?: IFormatExceptionMessage): void;
}
