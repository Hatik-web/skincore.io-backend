import { SchedulerRegistry } from '@nestjs/schedule';
import { LiveDropsUseCase } from "../use-cases/live-drops.use-case";
export declare class TasksService {
    private schedulerRegistry;
    private liveDropsUseCase;
    constructor(schedulerRegistry: SchedulerRegistry, liveDropsUseCase: LiveDropsUseCase);
    private readonly logger;
    liveDropsBot(): void;
    stopLiveDropsBot(): void;
    startLiveDropsBot(): void;
}
