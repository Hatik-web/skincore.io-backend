import {Module} from '@nestjs/common';
import {MainApiModule} from "./api/main.module";
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path";
import {MainCronModule} from "./cron-tasks/main.module";
import {MainKafkaModule} from "./kafka/main.module";
import {MainWebsocketModule} from "./websockets/main.module";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '..', 'static')
        }),
        MainApiModule,
        MainCronModule,
        MainKafkaModule,
        MainWebsocketModule
    ],
    controllers: [],
    providers: [ ],
})
export class AppModule {
}
