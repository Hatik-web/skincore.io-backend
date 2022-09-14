"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainWebsocketModule = void 0;
const common_1 = require("@nestjs/common");
const app_gateway_1 = require("./gateways/app.gateway");
const socket_store_service_1 = require("./services/socket-store.service");
const statistics_store_service_1 = require("./services/statistics-store.service");
const live_drops_store_service_1 = require("./services/live-drops-store.service");
let MainWebsocketModule = class MainWebsocketModule {
};
MainWebsocketModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [],
        providers: [
            app_gateway_1.AppGateway,
            socket_store_service_1.default,
            statistics_store_service_1.default,
            live_drops_store_service_1.default,
        ],
    })
], MainWebsocketModule);
exports.MainWebsocketModule = MainWebsocketModule;
//# sourceMappingURL=main.module.js.map