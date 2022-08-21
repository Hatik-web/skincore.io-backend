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
exports.BoxesCategoriesController = void 0;
const common_1 = require("@nestjs/common");
const boxes_use_case_1 = require("../../../../use-cases/boxes/boxes.use-case");
const boxes_factory_service_1 = require("../../../../use-cases/boxes/boxes-factory.service");
let BoxesCategoriesController = class BoxesCategoriesController {
    constructor(technologyUseCases, technologyFactoryService) {
        this.technologyUseCases = technologyUseCases;
        this.technologyFactoryService = technologyFactoryService;
    }
};
BoxesCategoriesController = __decorate([
    (0, common_1.Controller)('box-category'),
    __metadata("design:paramtypes", [boxes_use_case_1.BoxesUseCases,
        boxes_factory_service_1.BoxesFactoryService])
], BoxesCategoriesController);
exports.BoxesCategoriesController = BoxesCategoriesController;
//# sourceMappingURL=boxes-categories.controller.js.map