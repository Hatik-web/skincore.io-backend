"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiAppOptions = void 0;
const microservices_1 = require("@nestjs/microservices");
exports.apiAppOptions = {
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
};
//# sourceMappingURL=index.js.map