import {Module} from "@nestjs/common";
import {AppGateway} from "./gateways/app.gateway";
import SocketsStore from "./services/socket-store.service";
import StatisticsStoreService from "./services/statistics-store.service";
import LiveDropsStoreService from "./services/live-drops-store.service";
import {LiveDropsGateway} from "./gateways/live-drops.gateway";
import {UserStatusGateway} from "./gateways/user-status.gateway";

@Module({
    imports: [ ],
    controllers: [],
    providers: [
        AppGateway,
        // LiveDropsGateway,
        // UserStatusGateway,

        SocketsStore,
        StatisticsStoreService,
        LiveDropsStoreService,
    ],
})
export class MainWebsocketModule {}