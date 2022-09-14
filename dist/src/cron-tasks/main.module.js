"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainCronModule = void 0;
const common_1 = require("@nestjs/common");
const live_drops_task_service_1 = require("./services/live-drops-task.service");
const live_drops_use_case_1 = require("./use-cases/live-drops.use-case");
const schedule_1 = require("@nestjs/schedule");
const microservices_1 = require("@nestjs/microservices");
const api_app_client_1 = require("../kafka/clients/api-app.client");
let MainCronModule = class MainCronModule {
};
MainCronModule = __decorate([
    (0, common_1.Module)({
        imports: [
            schedule_1.ScheduleModule.forRoot(),
            microservices_1.ClientsModule.register([api_app_client_1.apiAppClient])
        ],
        controllers: [],
        providers: [
            live_drops_task_service_1.TasksService,
            live_drops_use_case_1.LiveDropsUseCase,
            schedule_1.SchedulerRegistry,
        ],
    })
], MainCronModule);
exports.MainCronModule = MainCronModule;
//# sourceMappingURL=main.module.js.map