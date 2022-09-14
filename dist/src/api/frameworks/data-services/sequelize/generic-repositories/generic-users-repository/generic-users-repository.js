"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericUsersRepository = void 0;
const base_generic_repository_1 = require("../base-generic-repository");
class GenericUsersRepository extends base_generic_repository_1.BaseGenericRepository {
    async getUserBySteamId(username) {
        const options = {
            where: {
                username
            },
        };
        return this._repository.findOne(Object.assign({ raw: true }, options));
    }
    async updateRefreshToken(username, refreshToken) {
        const options = {
            where: {
                username
            }
        };
        return this._repository.update({ refreshToken }, options);
    }
}
exports.GenericUsersRepository = GenericUsersRepository;
//# sourceMappingURL=generic-users-repository.js.map