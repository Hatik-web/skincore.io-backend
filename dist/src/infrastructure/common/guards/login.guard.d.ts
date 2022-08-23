import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IException } from "../../../core/abstracts/exceptions/exceptions.interface";
import { Observable } from "rxjs";
export declare class LoginGuard implements CanActivate {
    private exceptionService;
    constructor(exceptionService: IException);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
