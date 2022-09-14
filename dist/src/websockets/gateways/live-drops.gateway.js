"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var LiveDropsGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.LiveDropsGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const live_drops_store_service_1 = require("../services/live-drops-store.service");
const common_1 = require("@nestjs/common");
let LiveDropsGateway = LiveDropsGateway_1 = class LiveDropsGateway {
    constructor(liveDropsStore) {
        this.liveDropsStore = liveDropsStore;
        this.logger = new common_1.Logger(LiveDropsGateway_1.name);
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], LiveDropsGateway.prototype, "server", void 0);
LiveDropsGateway = LiveDropsGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)({
        namespace: "/websocket",
        transports: ['websocket'],
        cors: {
            origin: "http://localhost:3000",
            credentials: true
        }
    }),
    __metadata("design:paramtypes", [live_drops_store_service_1.default])
], LiveDropsGateway);
exports.LiveDropsGateway = LiveDropsGateway;
//# sourceMappingURL=live-drops.gateway.js.map