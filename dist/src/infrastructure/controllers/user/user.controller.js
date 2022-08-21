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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const common_1 = require("@nestjs/common");
const user_use_case_1 = require("../../../use-cases/user/user.use-case");
const user_dto_1 = require("./dtos/user.dto");
const create_user_response_dto_1 = require("./dtos/create-user-response.dto");
const user_factory_service_1 = require("../../../use-cases/user/user-factory.service");
const pagination_interface_1 = require("../../../core/abstracts/adapters/pagination.interface");
const api_pagination_response_dto_1 = require("../../common/dtos/api-pagination-response.dto");
let UserController = class UserController {
    constructor(userUseCases, userFactoryService, paginationService) {
        this.userUseCases = userUseCases;
        this.userFactoryService = userFactoryService;
        this.paginationService = paginationService;
    }
    async getAll(query) {
        const getAllUserResponseDto = new api_pagination_response_dto_1.PaginationResponseDto();
        const params = this.paginationService.getParams(query);
        const { rows, count } = await this.userUseCases.getAllUsers(params.options);
        getAllUserResponseDto.total = count;
        getAllUserResponseDto.page = params.page;
        getAllUserResponseDto.pages = Math.ceil(count / params.limit);
        getAllUserResponseDto.rows = rows;
        return getAllUserResponseDto;
    }
    async getById(id) {
        const user = await this.userUseCases.getUserById(id);
        if (user !== null) {
            return {
                id: user.id,
                avatar: user.avatar,
                steamId: user.steamId,
                username: user.username,
                role: user.role,
                balance: user.balance
            };
        }
        return null;
    }
    async createUser(userDto) {
        const createUserResponse = new create_user_response_dto_1.CreateUserResponseDto();
        try {
            const user = this.userFactoryService.createNewUser(userDto);
            const createdUser = await this.userUseCases.createUser(user);
            createUserResponse.success = true;
            createUserResponse.createdUser = {
                id: createdUser.id,
                steamId: createdUser.steamId,
                username: createdUser.username,
                avatar: createdUser.avatar,
                role: createdUser.role,
                balance: createdUser.balance
            };
        }
        catch (error) {
            createUserResponse.success = false;
        }
        return createUserResponse;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getById", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "createUser", null);
UserController = __decorate([
    (0, common_1.Controller)('user'),
    __metadata("design:paramtypes", [user_use_case_1.UserUseCases,
        user_factory_service_1.UserFactoryService,
        pagination_interface_1.IPaginationService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map