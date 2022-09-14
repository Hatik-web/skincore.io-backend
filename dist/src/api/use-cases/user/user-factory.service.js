"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserFactoryService = void 0;
const common_1 = require("@nestjs/common");
const user_entity_1 = require("../../core/entities/user.entity");
let UserFactoryService = class UserFactoryService {
    createNewUser(createUserDto) {
        const newUser = new user_entity_1.User();
        newUser.username = createUserDto.username;
        return newUser;
    }
};
UserFactoryService = __decorate([
    (0, common_1.Injectable)()
], UserFactoryService);
exports.UserFactoryService = UserFactoryService;
//# sourceMappingURL=user-factory.service.js.map