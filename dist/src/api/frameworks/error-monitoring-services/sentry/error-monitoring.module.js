"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMonitoringModule = void 0;
const common_1 = require("@nestjs/common");
const nestjs_sentry_1 = require("@ntegral/nestjs-sentry");
let ErrorMonitoringModule = class ErrorMonitoringModule {
};
ErrorMonitoringModule = __decorate([
    (0, common_1.Module)({
        imports: [
            nestjs_sentry_1.SentryModule.forRoot({
                debug: true,
                dsn: 'https://01c8b0b854f24ddeaf0872866c4c3c08@o1221362.ingest.sentry.io/6566625',
                environment: 'development',
                tracesSampleRate: 1.0,
            }),
        ],
        exports: [nestjs_sentry_1.SentryModule],
    })
], ErrorMonitoringModule);
exports.ErrorMonitoringModule = ErrorMonitoringModule;
//# sourceMappingURL=error-monitoring.module.js.map