"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveDropsServicesModule = void 0;
const common_1 = require("@nestjs/common");
const live_drops_task_service_1 = require("./live-drops-task.service");
const live_drops_module_1 = require("../use-cases/live-drops.module");
let LiveDropsServicesModule = class LiveDropsServicesModule {
};
LiveDropsServicesModule = __decorate([
    (0, common_1.Module)({
        imports: [live_drops_module_1.LiveDropsUseCasesModule],
        providers: [live_drops_task_service_1.TasksService],
        exports: [live_drops_task_service_1.TasksService],
    })
], LiveDropsServicesModule);
exports.LiveDropsServicesModule = LiveDropsServicesModule;
//# sourceMappingURL=live-drops-services.module.js.map