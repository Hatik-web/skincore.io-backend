import {CanActivate, ExecutionContext, Injectable} from '@nestjs/common';
import {IJwtService} from "../../../core/abstracts/adapters/jwt.interface";
import {IException} from "../../../core/abstracts/exceptions/exceptions.interface";
import {Observable} from "rxjs";

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        private jwtService: IJwtService,
        private exceptionService: IException,
    ) {
    }

    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const req = context.switchToHttp().getRequest()
        try {
            const cookies = req.cookies

            if(cookies.Authentication && cookies.Refresh) {
                const token = cookies.Authentication
                const checkUser = this.jwtService.checkToken(token);
                req.user = checkUser.user
                return true;
            }

            this.exceptionService.UnauthorizedException({ message: 'Пользователь не авторизован' })
        } catch (e) {
            this.exceptionService.UnauthorizedException({message: 'Пользователь не авторизован'})
        }
    }

}

