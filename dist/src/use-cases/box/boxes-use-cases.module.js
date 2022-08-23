"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxesUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const boxes_factory_service_1 = require("./boxes-factory.service");
const boxes_use_case_1 = require("./boxes.use-case");
const data_services_module_1 = require("../../infrastructure/services/data-services/data-services.module");
let BoxesUseCasesModule = class BoxesUseCasesModule {
};
BoxesUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [boxes_factory_service_1.BoxesFactoryService, boxes_use_case_1.BoxesUseCases],
        exports: [boxes_factory_service_1.BoxesFactoryService, boxes_use_case_1.BoxesUseCases],
    })
], BoxesUseCasesModule);
exports.BoxesUseCasesModule = BoxesUseCasesModule;
//# sourceMappingURL=boxes-use-cases.module.js.map