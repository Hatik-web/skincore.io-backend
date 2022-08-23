"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsAuthUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const data_services_module_1 = require("../../../infrastructure/services/data-services/data-services.module");
const is_auth_use_case_1 = require("./is-auth.use-case");
let IsAuthUseCasesModule = class IsAuthUseCasesModule {
};
IsAuthUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [data_services_module_1.DataServicesModule],
        providers: [is_auth_use_case_1.IsAuthUseCase],
        exports: [is_auth_use_case_1.IsAuthUseCase],
    })
], IsAuthUseCasesModule);
exports.IsAuthUseCasesModule = IsAuthUseCasesModule;
//# sourceMappingURL=is-auth-use-cases.module.js.map