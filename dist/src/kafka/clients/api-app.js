"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiAppClientModule = void 0;
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
const cases_message_controller_1 = require("../controllers/cases-message.controller");
let ApiAppClientModule = class ApiAppClientModule {
};
ApiAppClientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            microservices_1.ClientsModule.register([
                {
                    name: 'API_APP_CLIENT',
                    transport: microservices_1.Transport.KAFKA,
                    options: {
                        client: {
                            clientId: 'api-app',
                            brokers: ['localhost:9092'],
                        },
                        consumer: {
                            groupId: 'api-app-consumer'
                        }
                    }
                },
            ]),
        ],
        controllers: [cases_message_controller_1.CasesMessageController],
    })
], ApiAppClientModule);
exports.ApiAppClientModule = ApiAppClientModule;
//# sourceMappingURL=api-app.js.map