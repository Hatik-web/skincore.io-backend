import { Injectable, Logger } from '@nestjs/common';
import {Cron, CronExpression, SchedulerRegistry} from '@nestjs/schedule';
import {LiveDropsUseCase} from "../use-cases/live-drops.use-case";

@Injectable()
export class TasksService {
    constructor(
        private schedulerRegistry: SchedulerRegistry,
        private liveDropsUseCase: LiveDropsUseCase
    ){}

    private readonly logger = new Logger(TasksService.name);

    @Cron(CronExpression.EVERY_10_SECONDS, {
        name: 'live-drop-bot'
    })
    liveDropsBot(){
        this.liveDropsUseCase.liveDropsBotRun()
    }

    stopLiveDropsBot() {
        const job = this.schedulerRegistry.getCronJob('live-drop-bot');

        job.stop();
        this.logger.debug(job.lastDate());
    }

    startLiveDropsBot() {
        const job = this.schedulerRegistry.getCronJob('live-drop-bot');

        job.start();
        this.logger.debug("Live Drop Bot started");
    }

}