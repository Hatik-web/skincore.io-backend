import {Transport} from "@nestjs/microservices";
import {ClientProviderOptions} from "@nestjs/microservices/module/interfaces/clients-module.interface";

export const apiAppClient: ClientProviderOptions = {
    name: 'API_APP_CLIENT',
        transport: Transport.KAFKA,
        options: {
        client: {
            clientId: 'api-app',
                brokers: ['localhost:9092'],
        },
        consumer: {
            groupId: 'api-app-consumer'
        }
    }
}