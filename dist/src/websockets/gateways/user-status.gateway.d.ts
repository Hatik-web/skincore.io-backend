import { Server } from "socket.io";
import SocketsStore from "../services/socket-store.service";
import StatisticsStoreService from "../services/statistics-store.service";
export declare class UserStatusGateway {
    socketsStore: SocketsStore;
    statisticsStore: StatisticsStoreService;
    constructor(socketsStore: SocketsStore, statisticsStore: StatisticsStoreService);
    server: Server;
}
