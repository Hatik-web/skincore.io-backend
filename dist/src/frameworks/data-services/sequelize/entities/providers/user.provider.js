"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProvider = exports.USERS_REPOSITORY_TOKEN = void 0;
const user_entity_1 = require("../users/user.entity");
exports.USERS_REPOSITORY_TOKEN = 'USERS_REPOSITORY';
exports.userProvider = {
    provide: exports.USERS_REPOSITORY_TOKEN,
    useValue: user_entity_1.User,
};
//# sourceMappingURL=user.provider.js.map