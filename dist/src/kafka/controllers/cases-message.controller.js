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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasesMessageController = void 0;
const live_drops_store_service_1 = require("../../websockets/services/live-drops-store.service");
const statistics_store_service_1 = require("../../websockets/services/statistics-store.service");
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const topics_1 = require("../topics");
const live_drops_gateway_1 = require("../../websockets/gateways/live-drops.gateway");
const app_gateway_1 = require("../../websockets/gateways/app.gateway");
let CasesMessageController = class CasesMessageController {
    constructor(liveDropsStore, statisticsStore, appGateway, liveDropsGateway) {
        this.liveDropsStore = liveDropsStore;
        this.statisticsStore = statisticsStore;
        this.appGateway = appGateway;
        this.liveDropsGateway = liveDropsGateway;
    }
    async handleCaseOpened(payload) {
        this.liveDropsStore.pushLiveDrops([]);
        this.statisticsStore.incrementUpgrades();
        this.appGateway.onStatisticsUpdated();
    }
};
__decorate([
    (0, microservices_1.EventPattern)(topics_1.topics.cases.caseOpened),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], CasesMessageController.prototype, "handleCaseOpened", null);
CasesMessageController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [live_drops_store_service_1.default,
        statistics_store_service_1.default,
        app_gateway_1.AppGateway,
        live_drops_gateway_1.LiveDropsGateway])
], CasesMessageController);
exports.CasesMessageController = CasesMessageController;
//# sourceMappingURL=cases-message.controller.js.map