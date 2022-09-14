import {
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect, SubscribeMessage, ConnectedSocket,
} from '@nestjs/websockets';
import {Socket, Server} from 'socket.io';
import SocketsStore from "../services/socket-store.service";
import StatisticsStoreService from "../services/statistics-store.service";
import {IJwtService} from "../../api/core/abstracts/adapters/jwt.interface";
import {socketEmits} from "../emits";
import {Logger} from "@nestjs/common";

@WebSocketGateway(5001, {
    namespace: "/websocket",
    transports: ['websocket'],
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }
})
export class AppGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
    constructor(
        public jwtService: IJwtService,
        public socketsStore: SocketsStore,
        public statisticsStore: StatisticsStoreService,
    ) {
    }

    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger(AppGateway.name);

    @SubscribeMessage(socketEmits.onStatisticsUpdated)
    subscribe(@ConnectedSocket() client: Socket): void {
        this.onStatisticsUpdated()
    }

    onStatisticsUpdated () {
        this.server.emit(socketEmits.onStatisticsUpdated, this.statisticsStore.getData());
    }

    afterInit(server: Server) {
        this.logger.log('Init');
    }
    handleConnection(client, ...args: any[]) {
        this.logger.log(`Client connected: ${client.id}`);
        this.socketsStore.addSocket(client, client.id);

        const cookie = client.request.headers.cookie

        if (cookie !== undefined) {
            const token = this.jwtService.parseToken(cookie);
            const {user} = this.jwtService.checkToken(token);

            if (user) {
                this.logger.log(`Client online id: ${user.id}`);
                this.statisticsStore.incrementOnline();
                this.onStatisticsUpdated()
            }
        }
    }
    handleDisconnect(client: Socket) {
        this.logger.log(`Client disconnected: ${client.id}`);
        this.socketsStore.removeSocket(client.id);

        const cookie = client.request.headers.cookie

        if (cookie !== undefined) {
            const token = this.jwtService.parseToken(cookie);
            const { user } = this.jwtService.checkToken(token);

            if (user) {
                this.logger.log(`Client offline id: ${user.id}`);
                this.statisticsStore.decrementOnline();
                this.onStatisticsUpdated()
            }
        }
    }
}