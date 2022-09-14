import {
    OnGatewayConnection,
    OnGatewayDisconnect,
    OnGatewayInit,
    SubscribeMessage, WebSocketGateway,
    WebSocketServer
} from "@nestjs/websockets";
import {socketEmits} from "../emits";
import {Server, Socket} from "socket.io";
import {Logger} from "@nestjs/common";
import SocketsStore from "../services/socket-store.service";
import StatisticsStoreService from "../services/statistics-store.service";


@WebSocketGateway({
    namespace: "/websocket",
    transports: ['websocket'],
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }})
export class UserStatusGateway {
    constructor(
        public socketsStore: SocketsStore,
        public statisticsStore: StatisticsStoreService
    ) {}

    @WebSocketServer()
    server: Server;

    // private logger: Logger = new Logger('Websocket-gateway-user-status');
    //
    // @SubscribeMessage(socketEmits.offline)
    // offline(client: Socket, userId: number): void {
    //     this.logger.log(`Client offline`);
    //     this.statisticsStore.decrementOnline();
    //     this.socketsStore.removeSocket(userId);
    //     this.server.emit(socketEmits.onStatisticsUpdated, this.statisticsStore.getData());
    // }
}