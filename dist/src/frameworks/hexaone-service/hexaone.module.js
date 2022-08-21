"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexaOneModule = void 0;
const common_1 = require("@nestjs/common");
const hexaone_service_1 = require("./hexaone.service");
const hexaone_interface_1 = require("../../core/abstracts/adapters/hexaone.interface");
let HexaOneModule = class HexaOneModule {
};
HexaOneModule = __decorate([
    (0, common_1.Module)({
        providers: [{
                provide: hexaone_interface_1.IHexaOneService,
                useClass: hexaone_service_1.HexaOneService,
            }],
        exports: [hexaone_interface_1.IHexaOneService]
    })
], HexaOneModule);
exports.HexaOneModule = HexaOneModule;
//# sourceMappingURL=hexaone.module.js.map