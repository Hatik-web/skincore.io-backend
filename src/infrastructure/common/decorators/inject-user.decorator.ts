import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export const InjectUser = createParamDecorator(
    (data, ctx: ExecutionContext): any => {
        const request = ctx.switchToHttp().getRequest();
        return request.user;
    },
);