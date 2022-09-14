import {Transport} from "@nestjs/microservices";
import {logLevel} from "kafkajs";

export default {
    initialization: (client: string, consumer: string) => {
        return {
            transport: Transport.KAFKA,
            options: {
                client: {
                    clientId: client,
                    brokers: [`${process.env.KAFKA_HOST}:${process.env.KAFKA_PORT}`],
                    logLevel: logLevel.ERROR
                },
                consumer: {
                    groupId: consumer,
                    allowAutoTopicCreation: true,
                }
            }
        }
    }
};