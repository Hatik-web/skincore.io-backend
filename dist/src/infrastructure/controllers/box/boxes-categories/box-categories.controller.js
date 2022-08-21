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
exports.BoxCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const create_boxes_category_response_dto_1 = require("./dtos/create-boxes-category-response.dto");
const boxes_use_case_1 = require("../../../../use-cases/box/boxes.use-case");
const boxes_factory_service_1 = require("../../../../use-cases/box/boxes-factory.service");
const boxes_category_dto_1 = require("./dtos/boxes-category.dto");
let BoxCategoriesController = class BoxCategoriesController {
    constructor(boxesUseCases, boxesFactoryService) {
        this.boxesUseCases = boxesUseCases;
        this.boxesFactoryService = boxesFactoryService;
    }
    async getAll(query) {
        return await this.boxesUseCases.getAll();
    }
    async createBoxCategory(boxDto) {
        const createResponse = new create_boxes_category_response_dto_1.CreateBoxesCategoryResponseDto();
        try {
            const boxCategory = this.boxesFactoryService.createCategory(boxDto);
            const createdBoxCategory = await this.boxesUseCases.createCategory(boxCategory);
            createResponse.success = true;
            createResponse.created = createdBoxCategory;
        }
        catch (error) {
            createResponse.success = false;
        }
        return createResponse;
    }
    async updateBoxCategory(id, updateDto) {
        const boxCategory = this.boxesFactoryService.update(updateDto);
        return await this.boxesUseCases.update(id, boxCategory);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoxCategoriesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [boxes_category_dto_1.CreateBoxesCategoryDto]),
    __metadata("design:returntype", Promise)
], BoxCategoriesController.prototype, "createBoxCategory", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, boxes_category_dto_1.UpdateBoxesCategoryDto]),
    __metadata("design:returntype", Promise)
], BoxCategoriesController.prototype, "updateBoxCategory", null);
BoxCategoriesController = __decorate([
    (0, common_1.Controller)('box-category'),
    __metadata("design:paramtypes", [boxes_use_case_1.BoxesUseCases,
        boxes_factory_service_1.BoxesFactoryService])
], BoxCategoriesController);
exports.BoxCategoriesController = BoxCategoriesController;
//# sourceMappingURL=box-categories.controller.js.map