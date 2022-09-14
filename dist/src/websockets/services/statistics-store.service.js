"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let StatisticsStoreService = class StatisticsStoreService {
    constructor() {
        this.countUsers = 0;
        this.countUpgrades = 0;
        this.countOnline = 0;
        this.countCases = 0;
    }
    setRegistered(count) {
        this.countUsers = count;
    }
    incrementRegistered(count = 1) {
        this.countUsers += count;
    }
    setUpgrades(count) {
        this.countUpgrades = count;
    }
    incrementUpgrades(count = 1) {
        this.countUpgrades += count;
    }
    setOnline(count) {
        this.countOnline = count;
    }
    incrementOnline(count = 1) {
        this.countOnline += count;
    }
    decrementOnline(count = 1) {
        this.countOnline -= count;
    }
    setCasesOpened(count) {
        this.countCases = count;
    }
    incrementCasesOpened(count = 1) {
        this.countCases += count;
    }
    getData() {
        return {
            countUsers: this.countUsers,
            countOnline: this.countOnline,
            countCases: this.countCases,
            countUpgrades: this.countUpgrades
        };
    }
};
StatisticsStoreService = __decorate([
    (0, common_1.Injectable)()
], StatisticsStoreService);
exports.default = StatisticsStoreService;
//# sourceMappingURL=statistics-store.service.js.map