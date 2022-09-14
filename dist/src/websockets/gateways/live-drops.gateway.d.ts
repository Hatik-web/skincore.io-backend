import { Server } from 'socket.io';
import LiveDropsStoreService from "../services/live-drops-store.service";
export declare class LiveDropsGateway {
    liveDropsStore: LiveDropsStoreService;
    constructor(liveDropsStore: LiveDropsStoreService);
    server: Server;
    private logger;
}
