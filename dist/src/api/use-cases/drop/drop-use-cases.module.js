"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const drop_use_case_1 = require("./drop.use-case");
const data_services_module_1 = require("../../infrastructure/services/data-services/data-services.module");
let DropUseCasesModule = class DropUseCasesModule {
};
DropUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [drop_use_case_1.DropUseCases],
        exports: [drop_use_case_1.DropUseCases],
    })
], DropUseCasesModule);
exports.DropUseCasesModule = DropUseCasesModule;
//# sourceMappingURL=drop-use-cases.module.js.map