"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyFactoryService = void 0;
const common_1 = require("@nestjs/common");
const technology_category_entity_1 = require("../../core/entities/technologies/technology-categories/technology-category.entity");
let TechnologyFactoryService = class TechnologyFactoryService {
    createNewTechnologyCategory(createTechnologyCategoryDto) {
        const newTechnologyCategory = new technology_category_entity_1.TechnologyCategory();
        newTechnologyCategory.name = createTechnologyCategoryDto.name;
        return newTechnologyCategory;
    }
};
TechnologyFactoryService = __decorate([
    (0, common_1.Injectable)()
], TechnologyFactoryService);
exports.TechnologyFactoryService = TechnologyFactoryService;
//# sourceMappingURL=boxes-factory.service.js.map