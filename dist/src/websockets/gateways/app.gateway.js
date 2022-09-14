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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var AppGateway_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppGateway = void 0;
const websockets_1 = require("@nestjs/websockets");
const socket_io_1 = require("socket.io");
const socket_store_service_1 = require("../services/socket-store.service");
const statistics_store_service_1 = require("../services/statistics-store.service");
const jwt_interface_1 = require("../../api/core/abstracts/adapters/jwt.interface");
const emits_1 = require("../emits");
const common_1 = require("@nestjs/common");
let AppGateway = AppGateway_1 = class AppGateway {
    constructor(jwtService, socketsStore, statisticsStore) {
        this.jwtService = jwtService;
        this.socketsStore = socketsStore;
        this.statisticsStore = statisticsStore;
        this.logger = new common_1.Logger(AppGateway_1.name);
    }
    subscribe(client) {
        this.onStatisticsUpdated();
    }
    onStatisticsUpdated() {
        this.server.emit(emits_1.socketEmits.onStatisticsUpdated, this.statisticsStore.getData());
    }
    afterInit(server) {
        this.logger.log('Init');
    }
    handleConnection(client, ...args) {
        this.logger.log(`Client connected: ${client.id}`);
        this.socketsStore.addSocket(client, client.id);
        const cookie = client.request.headers.cookie;
        if (cookie !== undefined) {
            const token = this.jwtService.parseToken(cookie);
            const { user } = this.jwtService.checkToken(token);
            if (user) {
                this.logger.log(`Client online id: ${user.id}`);
                this.statisticsStore.incrementOnline();
                this.onStatisticsUpdated();
            }
        }
    }
    handleDisconnect(client) {
        this.logger.log(`Client disconnected: ${client.id}`);
        this.socketsStore.removeSocket(client.id);
        const cookie = client.request.headers.cookie;
        if (cookie !== undefined) {
            const token = this.jwtService.parseToken(cookie);
            const { user } = this.jwtService.checkToken(token);
            if (user) {
                this.logger.log(`Client offline id: ${user.id}`);
                this.statisticsStore.decrementOnline();
                this.onStatisticsUpdated();
            }
        }
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", socket_io_1.Server)
], AppGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)(emits_1.socketEmits.onStatisticsUpdated),
    __param(0, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [socket_io_1.Socket]),
    __metadata("design:returntype", void 0)
], AppGateway.prototype, "subscribe", null);
AppGateway = AppGateway_1 = __decorate([
    (0, websockets_1.WebSocketGateway)(5001, {
        namespace: "/websocket",
        transports: ['websocket'],
        cors: {
            origin: "http://localhost:3000",
            credentials: true
        }
    }),
    __metadata("design:paramtypes", [jwt_interface_1.IJwtService,
        socket_store_service_1.default,
        statistics_store_service_1.default])
], AppGateway);
exports.AppGateway = AppGateway;
//# sourceMappingURL=app.gateway.js.map