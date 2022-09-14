import LiveDropsStoreService from "../../../websockets/services/live-drops-store.service";
import StatisticsStoreService from "../../../websockets/services/statistics-store.service";
export declare class CasesMessageHandler {
    liveDropsStore: LiveDropsStoreService;
    statisticsStore: StatisticsStoreService;
    constructor(liveDropsStore: LiveDropsStoreService, statisticsStore: StatisticsStoreService);
}
