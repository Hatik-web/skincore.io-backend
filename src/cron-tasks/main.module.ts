import {Module} from "@nestjs/common";
import {TasksService} from "./services/live-drops-task.service";
import {LiveDropsUseCase} from "./use-cases/live-drops.use-case";
import {ScheduleModule, SchedulerRegistry} from "@nestjs/schedule";
import {ClientsModule} from "@nestjs/microservices";
import {apiAppClient} from "../kafka/clients/api-app.client";

@Module({
    imports: [
        ScheduleModule.forRoot(),
        ClientsModule.register([ apiAppClient ])],
    controllers: [],
    providers: [
        TasksService,
        LiveDropsUseCase,
        SchedulerRegistry,
    ],
})
export class MainCronModule {}