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
exports.CaseDropRelations = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const drop_entity_1 = require("../drop/drop.entity");
const box_entity_1 = require("../box/box.entity");
let CaseDropRelations = class CaseDropRelations extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true }),
    __metadata("design:type", Number)
], CaseDropRelations.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => drop_entity_1.Drop),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], CaseDropRelations.prototype, "dropId", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => box_entity_1.Box),
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.INTEGER, allowNull: false }),
    __metadata("design:type", Number)
], CaseDropRelations.prototype, "boxId", void 0);
CaseDropRelations = __decorate([
    (0, sequelize_typescript_1.Table)({ tableName: 'case-drop-relations' })
], CaseDropRelations);
exports.CaseDropRelations = CaseDropRelations;
//# sourceMappingURL=case-drop.entity.js.map