"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseDropUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const parse_drop_use_case_1 = require("./parse-drop.use-case");
const hexaone_service_module_1 = require("../../infrastructure/services/hexaone-service/hexaone-service.module");
let ParseDropUseCasesModule = class ParseDropUseCasesModule {
};
ParseDropUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [hexaone_service_module_1.HexaOneServiceModule],
        providers: [parse_drop_use_case_1.ParseDropUseCases],
        exports: [parse_drop_use_case_1.ParseDropUseCases],
    })
], ParseDropUseCasesModule);
exports.ParseDropUseCasesModule = ParseDropUseCasesModule;
//# sourceMappingURL=parse-drop-use-cases.module.js.map