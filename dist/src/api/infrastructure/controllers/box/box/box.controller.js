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
exports.BoxController = void 0;
const common_1 = require("@nestjs/common");
const boxes_use_case_1 = require("../../../../use-cases/box/boxes.use-case");
const boxes_factory_service_1 = require("../../../../use-cases/box/boxes-factory.service");
const box_dto_1 = require("./dtos/box.dto");
const create_box_response_dto_1 = require("./dtos/create-box-response.dto");
let BoxController = class BoxController {
    constructor(boxesUseCases, boxesFactoryService) {
        this.boxesUseCases = boxesUseCases;
        this.boxesFactoryService = boxesFactoryService;
    }
    async getAll(query) {
        return await this.boxesUseCases.getAllBox();
    }
    async createBox(boxDto) {
        const createResponse = new create_box_response_dto_1.CreateBoxResponseDto();
        try {
            const box = this.boxesFactoryService.createBox(boxDto);
            const createdBox = await this.boxesUseCases.createBox(box);
            await this.boxesUseCases.addDrops(createdBox.id, boxDto.dropIds);
            createResponse.success = true;
            createResponse.created = createdBox;
        }
        catch (error) {
            createResponse.success = false;
        }
        return createResponse;
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "getAll", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [box_dto_1.CreateBoxDto]),
    __metadata("design:returntype", Promise)
], BoxController.prototype, "createBox", null);
BoxController = __decorate([
    (0, common_1.Controller)('box'),
    __metadata("design:paramtypes", [boxes_use_case_1.BoxesUseCases,
        boxes_factory_service_1.BoxesFactoryService])
], BoxController);
exports.BoxController = BoxController;
//# sourceMappingURL=box.controller.js.map