import { OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import SocketsStore from "../services/socket-store.service";
import StatisticsStoreService from "../services/statistics-store.service";
import { IJwtService } from "../../api/core/abstracts/adapters/jwt.interface";
export declare class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    jwtService: IJwtService;
    socketsStore: SocketsStore;
    statisticsStore: StatisticsStoreService;
    constructor(jwtService: IJwtService, socketsStore: SocketsStore, statisticsStore: StatisticsStoreService);
    server: Server;
    private logger;
    subscribe(client: Socket): void;
    onStatisticsUpdated(): void;
    afterInit(server: Server): void;
    handleConnection(client: any, ...args: any[]): void;
    handleDisconnect(client: Socket): void;
}
