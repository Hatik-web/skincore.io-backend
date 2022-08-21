"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizePaginationServicesModule = void 0;
const common_1 = require("@nestjs/common");
const pagination_interface_1 = require("../../../core/abstracts/adapters/pagination.interface");
const sequelize_pagination_service_1 = require("./sequelize-pagination.service");
let SequelizePaginationServicesModule = class SequelizePaginationServicesModule {
};
SequelizePaginationServicesModule = __decorate([
    (0, common_1.Module)({
        providers: [{
                provide: pagination_interface_1.IPaginationService,
                useClass: sequelize_pagination_service_1.PaginationService,
            }],
        exports: [pagination_interface_1.IPaginationService]
    })
], SequelizePaginationServicesModule);
exports.SequelizePaginationServicesModule = SequelizePaginationServicesModule;
//# sourceMappingURL=sequelize-pagination-services.module.js.map