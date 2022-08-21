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
exports.DropController = void 0;
const common_1 = require("@nestjs/common");
const parse_drop_use_case_1 = require("../../../use-cases/drop/parse-drop.use-case");
const api_pagination_response_dto_1 = require("../../common/dtos/api-pagination-response.dto");
const pagination_interface_1 = require("../../../core/abstracts/adapters/pagination.interface");
const drop_use_case_1 = require("../../../use-cases/drop/drop.use-case");
const sequelize_1 = require("sequelize");
const getAll_drops_qyery_dto_1 = require("./dtos/getAll-drops.qyery.dto");
let DropController = class DropController {
    constructor(parseDropUseCases, dropUseCases, paginationService) {
        this.parseDropUseCases = parseDropUseCases;
        this.dropUseCases = dropUseCases;
        this.paginationService = paginationService;
    }
    async parseAndSaveDrops() {
        return await this.parseDropUseCases.parseAndSaveDrops();
    }
    async getAll(query) {
        const getAllUserResponseDto = new api_pagination_response_dto_1.PaginationResponseDto();
        const params = this.paginationService.getParams(query);
        const { category, wear, rarity, weapon, min, max } = query;
        const filters = {
            [sequelize_1.Op.and]: [
                sequelize_1.default.literal(`price > ${parseInt(min) || 1}`),
                sequelize_1.default.literal(`price < ${parseInt(max) || 1000000}`),
                category && { category },
                wear && { wear },
                rarity && { rarity },
                weapon && { weapon }
            ]
        };
        params.options = Object.assign(Object.assign({}, params.options), { where: filters, order: [["price", "ASC"]] });
        const { rows, count } = await this.dropUseCases.getAll(params.options);
        getAllUserResponseDto.total = count;
        getAllUserResponseDto.page = params.page;
        getAllUserResponseDto.pages = Math.ceil(count / params.limit);
        getAllUserResponseDto.rows = rows;
        return getAllUserResponseDto;
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropController.prototype, "parseAndSaveDrops", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAll_drops_qyery_dto_1.GetAllDropsQueryDto]),
    __metadata("design:returntype", Promise)
], DropController.prototype, "getAll", null);
DropController = __decorate([
    (0, common_1.Controller)('drop'),
    __metadata("design:paramtypes", [parse_drop_use_case_1.ParseDropUseCases,
        drop_use_case_1.DropUseCases,
        pagination_interface_1.IPaginationService])
], DropController);
exports.DropController = DropController;
//# sourceMappingURL=drop.controller.js.map