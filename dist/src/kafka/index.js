"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const kafkajs_1 = require("kafkajs");
exports.default = {
    initialization: (client, consumer) => {
        return {
            transport: microservices_1.Transport.KAFKA,
            options: {
                client: {
                    clientId: client,
                    brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
                    logLevel: kafkajs_1.logLevel.ERROR
                },
                consumer: {
                    groupId: consumer,
                    allowAutoTopicCreation: true,
                }
            }
        };
    }
};
//# sourceMappingURL=index.js.map