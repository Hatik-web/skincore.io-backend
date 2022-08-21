import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {IJwtService} from "../../../core/abstracts/adapters/jwt.interface";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";
import {Observable} from "rxjs";

@Injectable()
export class LoginGuard implements CanActivate {
    constructor(
        private exceptionService: IException,
    ) {}

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        const cookies = req.cookies

        if(cookies.Authentication && cookies.Refresh) {
            this.exceptionService.badRequestException({ message: 'Вы уже авторизованы'})
        }

        return true;
    }

}

