import {
    SubscribeMessage,
    WebSocketGateway,
    OnGatewayInit,
    WebSocketServer,
    OnGatewayConnection,
    OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Socket, Server } from 'socket.io';
import LiveDropsStoreService from "../services/live-drops-store.service";
import {socketEmits} from "../emits";
import {Logger} from "@nestjs/common";

@WebSocketGateway({
    namespace: "/websocket",
    transports: ['websocket'],
    cors: {
        origin: "http://localhost:3000",
        credentials: true
    }})
export class LiveDropsGateway {
    constructor(
        public liveDropsStore: LiveDropsStoreService,
    ) {}

    @WebSocketServer()
    server: Server;

    private logger: Logger = new Logger(LiveDropsGateway.name);

    // @SubscribeMessage(socketEmits.liveDropsSubscribed)
    // subscribe(client: Socket, data): void {
    //     this.logger.log(`Live Drops Subscribed`);
    //     client.join("liveDrops");
    //     client.emit(socketEmits.liveDropsSubscribed, this.liveDropsStore.getData());
    // }
    //
    // @SubscribeMessage(socketEmits.liveDropsUnsubscribed)
    // unsubscribe(client: Socket): void {
    //     this.logger.log(`Live Drops Unsubscribed`);
    //     client.leave("liveDrops");
    // }
    //
    // sendNewItems() {
    //     // this.server.emit(socketEmits.sendLiveDrops, );
    // }
}