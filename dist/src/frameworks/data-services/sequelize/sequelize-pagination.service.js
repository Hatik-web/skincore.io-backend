"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaginationService = void 0;
const common_1 = require("@nestjs/common");
let PaginationService = class PaginationService {
    constructor() {
        this.defaultPage = 1;
        this.defaultLimit = 16;
    }
    getParams(query) {
        const page = parseInt(query.page) || this.defaultPage;
        const limit = parseInt(query.limit) || this.defaultLimit;
        const offset = (page - 1) * limit;
        return {
            page,
            limit,
            offset,
            options: this.getOptions({ limit, offset }),
            count: query.totalCount,
            pages: Math.ceil(query.totalCount / query.limit)
        };
    }
    getOptions(params) {
        const { limit, offset } = params;
        const options = {
            raw: true,
            limit: limit,
            offset: offset
        };
        return options;
    }
};
PaginationService = __decorate([
    (0, common_1.Injectable)()
], PaginationService);
exports.PaginationService = PaginationService;
//# sourceMappingURL=sequelize-pagination.service.js.map