"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsocketModule = void 0;
const common_1 = require("@nestjs/common");
const statistics_store_service_1 = require("./services/statistics-store.service");
const socket_store_service_1 = require("./services/socket-store.service");
const live_drops_store_service_1 = require("./services/live-drops-store.service");
const app_gateway_1 = require("./gateways/app.gateway");
const live_drops_gateway_1 = require("./gateways/live-drops.gateway");
const user_status_gateway_1 = require("./gateways/user-status.gateway");
let WebsocketModule = class WebsocketModule {
};
WebsocketModule = __decorate([
    (0, common_1.Module)({
        providers: [
            app_gateway_1.AppGateway,
            live_drops_gateway_1.LiveDropsGateway,
            user_status_gateway_1.UserStatusGateway,
            socket_store_service_1.default,
            statistics_store_service_1.default,
            live_drops_store_service_1.default,
        ],
        exports: [
            socket_store_service_1.default,
            statistics_store_service_1.default,
            live_drops_store_service_1.default
        ]
    })
], WebsocketModule);
exports.WebsocketModule = WebsocketModule;
//# sourceMappingURL=websocket.module.js.map