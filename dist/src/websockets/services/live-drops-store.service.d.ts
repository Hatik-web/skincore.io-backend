declare class LiveDropsStoreService {
    private instance;
    liveDrops: any[];
    topDrops: any[];
    pushLiveDrops(openData: []): void;
    getData(): {
        liveDrops: any[];
        topDrops: any[];
    };
}
export default LiveDropsStoreService;
