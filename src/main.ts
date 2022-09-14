import {ConsoleStatus} from '../utils/console';
import {API_PREFIX, createHttpServer} from "./api";
import createInstanceKafka from "./kafka";
import {SocketIoAdapter} from "./websockets/socket-io.adapter";

(async function () {
    try {
        //TODO: HTTP SERVER
        const PORT = process.env.APP_PORT || 3000
        const app = await createHttpServer()

        app.useWebSocketAdapter(new SocketIoAdapter(app));

        // TODO: KAFKA
        await app.connectMicroservice(createInstanceKafka.initialization('api-app', 'api-app-consumer'))
        await app.startAllMicroservices()
        await app.listen(PORT, async () => console.info(ConsoleStatus.info, `Server has been started on: ${process.env.BASE_URL}/${API_PREFIX}`));
    } catch (err) {
        console.log(err)
    }
}());

