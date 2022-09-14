import {Module} from "@nestjs/common";
import {CasesMessageController} from "./controllers/cases-message.controller";
import LiveDropsStoreService from "../websockets/services/live-drops-store.service";
import StatisticsStoreService from "../websockets/services/statistics-store.service";
import {LiveDropsGateway} from "../websockets/gateways/live-drops.gateway";
import {AppGateway} from "../websockets/gateways/app.gateway";
import SocketsStore from "../websockets/services/socket-store.service";
import {UserStatusGateway} from "../websockets/gateways/user-status.gateway";

@Module({
    imports: [],
    controllers: [
        CasesMessageController
    ],
    providers: [
        LiveDropsStoreService,
        StatisticsStoreService,
        AppGateway,
        LiveDropsGateway,
        UserStatusGateway,
        SocketsStore
    ],
})
export class MainKafkaModule {}