import LiveDropsStoreService from "../../websockets/services/live-drops-store.service";
import StatisticsStoreService from "../../websockets/services/statistics-store.service";
import { LiveDropsGateway } from "../../websockets/gateways/live-drops.gateway";
import { AppGateway } from "../../websockets/gateways/app.gateway";
export declare class CasesMessageController {
    liveDropsStore: LiveDropsStoreService;
    statisticsStore: StatisticsStoreService;
    appGateway: AppGateway;
    liveDropsGateway: LiveDropsGateway;
    constructor(liveDropsStore: LiveDropsStoreService, statisticsStore: StatisticsStoreService, appGateway: AppGateway, liveDropsGateway: LiveDropsGateway);
    handleCaseOpened(payload: Record<string, unknown>): Promise<void>;
}
