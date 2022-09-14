import { ClientKafka } from "@nestjs/microservices";
export declare class LiveDropsUseCase {
    private client;
    constructor(client: ClientKafka);
    liveDropsBotRun(): void;
    private getRandomPlayer;
    private getRandomMockDrop;
}
