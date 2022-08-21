"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TechnologyUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const technology_factory_service_1 = require("./technology-factory.service");
const technology_use_case_1 = require("./technology.use-case");
const data_services_module_1 = require("../../infrastructure/services/data-services/data-services.module");
let TechnologyUseCasesModule = class TechnologyUseCasesModule {
};
TechnologyUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [technology_factory_service_1.TechnologyFactoryService, technology_use_case_1.TechnologyUseCases],
        exports: [technology_factory_service_1.TechnologyFactoryService, technology_use_case_1.TechnologyUseCases],
    })
], TechnologyUseCasesModule);
exports.TechnologyUseCasesModule = TechnologyUseCasesModule;
//# sourceMappingURL=boxes-use-cases.module.js.map