import { IFormatExceptionMessage } from "../exceptions/exceptions.interface";
export declare abstract class IStatisticStore {
    abstract badRequestException(data?: IFormatExceptionMessage): void;
    abstract internalServerErrorException(data?: IFormatExceptionMessage): void;
    abstract forbiddenException(data?: IFormatExceptionMessage): void;
    abstract UnauthorizedException(data?: IFormatExceptionMessage): void;
}
