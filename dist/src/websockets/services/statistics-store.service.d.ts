declare class StatisticsStoreService {
    private static instance;
    countUsers: number;
    countUpgrades: number;
    countOnline: number;
    countCases: number;
    setRegistered(count: number): void;
    incrementRegistered(count?: number): void;
    setUpgrades(count: number): void;
    incrementUpgrades(count?: number): void;
    setOnline(count: number): void;
    incrementOnline(count?: number): void;
    decrementOnline(count?: number): void;
    setCasesOpened(count: number): void;
    incrementCasesOpened(count?: number): void;
    getData(): {
        countUsers: number;
        countOnline: number;
        countCases: number;
        countUpgrades: number;
    };
}
export default StatisticsStoreService;
