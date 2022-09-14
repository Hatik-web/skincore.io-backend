import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import {User} from "../../../core/entities/user.entity";

export const CurrentUser = createParamDecorator(
    (ctx: ExecutionContext): User => {
        const request = ctx.switchToHttp().getRequest();
        const { user } = request.user
        return user ? user : null;
    },
);