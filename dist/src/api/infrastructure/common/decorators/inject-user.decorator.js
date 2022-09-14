"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InjectUser = void 0;
const common_1 = require("@nestjs/common");
exports.InjectUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});
//# sourceMappingURL=inject-user.decorator.js.map