import { CanActivate, ExecutionContext } from '@nestjs/common';
import { IJwtService } from "../../../core/abstracts/adapters/jwt.interface";
import { IException } from "../../../core/abstracts/exceptions/exceptions.interface";
import { Observable } from "rxjs";
export declare class JwtAuthGuard implements CanActivate {
    private jwtService;
    private exceptionService;
    constructor(jwtService: IJwtService, exceptionService: IException);
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean>;
}
