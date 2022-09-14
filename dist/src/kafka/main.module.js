"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainKafkaModule = void 0;
const common_1 = require("@nestjs/common");
const cases_message_controller_1 = require("./controllers/cases-message.controller");
const live_drops_store_service_1 = require("../websockets/services/live-drops-store.service");
const statistics_store_service_1 = require("../websockets/services/statistics-store.service");
const live_drops_gateway_1 = require("../websockets/gateways/live-drops.gateway");
const app_gateway_1 = require("../websockets/gateways/app.gateway");
const socket_store_service_1 = require("../websockets/services/socket-store.service");
const user_status_gateway_1 = require("../websockets/gateways/user-status.gateway");
let MainKafkaModule = class MainKafkaModule {
};
MainKafkaModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [
            cases_message_controller_1.CasesMessageController
        ],
        providers: [
            live_drops_store_service_1.default,
            statistics_store_service_1.default,
            app_gateway_1.AppGateway,
            live_drops_gateway_1.LiveDropsGateway,
            user_status_gateway_1.UserStatusGateway,
            socket_store_service_1.default
        ],
    })
], MainKafkaModule);
exports.MainKafkaModule = MainKafkaModule;
//# sourceMappingURL=main.module.js.map