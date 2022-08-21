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
exports.TechnologyCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const create_technology_category_response_dto_1 = require("./dtos/create-technology-category-response.dto");
const boxes_use_case_1 = require("../../../../use-cases/boxes/boxes.use-case");
const boxes_factory_service_1 = require("../../../../use-cases/boxes/boxes-factory.service");
const technology_category_dto_1 = require("./dtos/technology-category.dto");
let TechnologyCategoriesController = class TechnologyCategoriesController {
    constructor(technologyUseCases, technologyFactoryService) {
        this.technologyUseCases = technologyUseCases;
        this.technologyFactoryService = technologyFactoryService;
    }
    async getAll(query) {
        return await this.technologyUseCases.getAllTechnologiesCategories();
    }
    async createTechnologyCategory(technologyDto) {
        const createTechnologyCategoryResponse = new create_technology_category_response_dto_1.CreateTechnologyCategoryResponseDto();
        try {
            const technology = this.technologyFactoryService.createNewTechnologyCategory(technologyDto);
            const createdTechnologyCategory = await this.technologyUseCases.createTechnologyCategory(technology);
            createTechnologyCategoryResponse.success = true;
            createTechnologyCategoryResponse.createdTechnologyCategory = createdTechnologyCategory;
        }
        catch (error) {
            createTechnologyCategoryResponse.success = false;
        }
        return createTechnologyCategoryResponse;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], TechnologyCategoriesController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [technology_category_dto_1.CreateTechnologyCategoryDto]),
    __metadata("design:returntype", Promise)
], TechnologyCategoriesController.prototype, "createTechnologyCategory", null);
TechnologyCategoriesController = __decorate([
    (0, common_1.Controller)('boxes-category'),
    __metadata("design:paramtypes", [boxes_use_case_1.BoxesUseCases,
        boxes_factory_service_1.BoxesFactoryService])
], TechnologyCategoriesController);
exports.TechnologyCategoriesController = TechnologyCategoriesController;
//# sourceMappingURL=technology-categories.controller.js.map