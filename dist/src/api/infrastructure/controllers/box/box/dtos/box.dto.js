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
exports.UpdateBoxDto = exports.CreateBoxDto = void 0;
const class_validator_1 = require("class-validator");
const mapped_types_1 = require("@nestjs/mapped-types");
const box_category_entity_1 = require("../../../../../core/entities/box-category.entity");
class CreateBoxDto {
}
__decorate([
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    (0, class_validator_1.Length)(4, 32, { message: 'Не меньше 4 и не больше 32' }),
    __metadata("design:type", String)
], CreateBoxDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", String)
], CreateBoxDto.prototype, "cover", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", Number)
], CreateBoxDto.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)({ message: 'Должно быть boolean' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", Boolean)
], CreateBoxDto.prototype, "isActive", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Должно быть строкой' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", String)
], CreateBoxDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)({}, { message: 'Должно быть числом' }),
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", Number)
], CreateBoxDto.prototype, "boxCategoryId", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Не может быть пустым' }),
    __metadata("design:type", Array)
], CreateBoxDto.prototype, "dropIds", void 0);
exports.CreateBoxDto = CreateBoxDto;
class UpdateBoxDto extends (0, mapped_types_1.PartialType)(CreateBoxDto) {
}
exports.UpdateBoxDto = UpdateBoxDto;
//# sourceMappingURL=box.dto.js.map