"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUseCases = void 0;
const common_1 = require("@nestjs/common");
const data_services_abstract_1 = require("../../core/abstracts/repositories/data-services.abstract");
let UserUseCases = class UserUseCases {
    constructor(dataServices) {
        this.dataServices = dataServices;
    }
    getAllUsers(options) {
        return this.dataServices.users.getAllAndCount(options);
    }
    getUserById(id) {
        return this.dataServices.users.get(id);
    }
    async createUser(user) {
        return await this.dataServices.users.create(user);
    }
};
UserUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_services_abstract_1.IDataServices])
], UserUseCases);
exports.UserUseCases = UserUseCases;
//# sourceMappingURL=user.use-case.js.map