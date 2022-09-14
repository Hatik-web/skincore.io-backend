import {Global, Injectable} from "@nestjs/common";

@Injectable()
class StatisticsStoreService {
    private static instance: StatisticsStoreService;

    public countUsers: number = 0;
    public countUpgrades: number = 0;
    public countOnline: number  = 0;
    public countCases: number = 0;

    public setRegistered(count: number) {
        this.countUsers = count;
    }

    public incrementRegistered(count = 1) {
        this.countUsers += count;
    }

    public setUpgrades(count: number) {
        this.countUpgrades = count;
    }

    public incrementUpgrades(count = 1) {
        this.countUpgrades += count;
    }

    public setOnline(count: number) {
        this.countOnline = count;
    }

    public incrementOnline(count = 1) {
        this.countOnline += count;
    }

    public decrementOnline(count = 1) {
        this.countOnline -= count;
    }

    public setCasesOpened(count: number) {
        this.countCases = count;
    }

    public incrementCasesOpened(count = 1) {
        this.countCases += count;
    }

    public getData() {
        return {
            countUsers: this.countUsers,
            countOnline: this.countOnline,
            countCases: this.countCases,
            countUpgrades: this.countUpgrades
        };
    }
}

export default StatisticsStoreService;
