import { Transport } from "@nestjs/microservices";
import { logLevel } from "kafkajs";
declare const _default: {
    initialization: (client: string, consumer: string) => {
        transport: Transport;
        options: {
            client: {
                clientId: string;
                brokers: string[];
                logLevel: logLevel;
            };
            consumer: {
                groupId: string;
                allowAutoTopicCreation: boolean;
            };
        };
    };
};
export default _default;
