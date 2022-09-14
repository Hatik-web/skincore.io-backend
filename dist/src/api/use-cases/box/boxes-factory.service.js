"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxesFactoryService = void 0;
const common_1 = require("@nestjs/common");
const box_category_entity_1 = require("../../core/entities/box-category.entity");
const box_entity_1 = require("../../core/entities/box.entity");
let BoxesFactoryService = class BoxesFactoryService {
    createCategory(createBoxCategoryDto) {
        const newBoxesCategory = new box_category_entity_1.BoxCategoryEntity();
        newBoxesCategory.name = createBoxCategoryDto.name;
        newBoxesCategory.position = createBoxCategoryDto.position;
        newBoxesCategory.type = createBoxCategoryDto.type;
        return newBoxesCategory;
    }
    update(updateBoxCategoryDto) {
        const newBoxesCategory = new box_category_entity_1.BoxCategoryEntity();
        newBoxesCategory.name = updateBoxCategoryDto.name;
        newBoxesCategory.position = updateBoxCategoryDto.position;
        newBoxesCategory.type = updateBoxCategoryDto.type;
        return newBoxesCategory;
    }
    createBox(createBoxDto) {
        const newBox = new box_entity_1.BoxEntity();
        newBox.name = createBoxDto.name;
        newBox.type = createBoxDto.type;
        newBox.cover = createBoxDto.cover;
        newBox.price = createBoxDto.price;
        newBox.isActive = createBoxDto.isActive;
        newBox.boxCategoryId = createBoxDto.boxCategoryId;
        newBox.boxCategoryId = createBoxDto.boxCategoryId;
        return newBox;
    }
};
BoxesFactoryService = __decorate([
    (0, common_1.Injectable)()
], BoxesFactoryService);
exports.BoxesFactoryService = BoxesFactoryService;
//# sourceMappingURL=boxes-factory.service.js.map