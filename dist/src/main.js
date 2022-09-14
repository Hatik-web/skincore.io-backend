"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("../utils/console");
const api_1 = require("./api");
const kafka_1 = require("./kafka");
const socket_io_adapter_1 = require("./websockets/socket-io.adapter");
(async function () {
    try {
        const PORT = process.env.APP_PORT || 3000;
        const app = await (0, api_1.createHttpServer)();
        app.useWebSocketAdapter(new socket_io_adapter_1.SocketIoAdapter(app));
        await app.connectMicroservice(kafka_1.default.initialization('api-app', 'api-app-consumer'));
        await app.startAllMicroservices();
        await app.listen(PORT, async () => console.info(console_1.ConsoleStatus.info, `Server has been started on: ${process.env.BASE_URL}/${api_1.API_PREFIX}`));
    }
    catch (err) {
        console.log(err);
    }
}());
//# sourceMappingURL=main.js.map