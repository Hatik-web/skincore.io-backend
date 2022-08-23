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
exports.BoxesUseCases = void 0;
const common_1 = require("@nestjs/common");
const data_services_abstract_1 = require("../../core/abstracts/repositories/data-services.abstract");
const box_entity_1 = require("../../frameworks/data-services/sequelize/entities/box/box.entity");
let BoxesUseCases = class BoxesUseCases {
    constructor(dataServices) {
        this.dataServices = dataServices;
    }
    getAll() {
        return this.dataServices.boxesCategory.getAll({ include: {
                as: "children",
                model: box_entity_1.Box,
                include: "drops"
            } });
    }
    getAllBox() {
        return this.dataServices.boxes.getAll();
    }
    async createCategory(category) {
        return await this.dataServices.boxesCategory.create(category);
    }
    async update(id, category) {
        return await this.dataServices.boxesCategory.update(id, category);
    }
    async createBox(box) {
        return await this.dataServices.boxes.create(box);
    }
    async addDrops(boxId, dropIds) {
        for (const id of dropIds) {
            await this.dataServices.boxDropRelation.create({
                dropId: id,
                boxId
            });
        }
    }
};
BoxesUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [data_services_abstract_1.IDataServices])
], BoxesUseCases);
exports.BoxesUseCases = BoxesUseCases;
//# sourceMappingURL=boxes.use-case.js.map