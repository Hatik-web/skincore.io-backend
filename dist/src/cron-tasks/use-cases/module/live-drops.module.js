"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveDropsUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const live_drops_use_case_1 = require("../live-drops.use-case");
const websocket_module_1 = require("../../../websockets/websocket.module");
let LiveDropsUseCasesModule = class LiveDropsUseCasesModule {
};
LiveDropsUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [websocket_module_1.WebsocketModule],
        providers: [live_drops_use_case_1.LiveDropsUseCase],
        exports: [live_drops_use_case_1.LiveDropsUseCase],
    })
], LiveDropsUseCasesModule);
exports.LiveDropsUseCasesModule = LiveDropsUseCasesModule;
//# sourceMappingURL=live-drops.module.js.map