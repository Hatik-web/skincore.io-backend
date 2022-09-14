"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.KafkaModule = void 0;
const common_1 = require("@nestjs/common");
const statistics_store_service_1 = require("../websockets/services/statistics-store.service");
const live_drops_store_service_1 = require("../websockets/services/live-drops-store.service");
let KafkaModule = class KafkaModule {
};
KafkaModule = __decorate([
    (0, common_1.Module)({
        providers: [statistics_store_service_1.default, live_drops_store_service_1.default],
        exports: [statistics_store_service_1.default, live_drops_store_service_1.default]
    })
], KafkaModule);
exports.KafkaModule = KafkaModule;
//# sourceMappingURL=kafka.module.js.map