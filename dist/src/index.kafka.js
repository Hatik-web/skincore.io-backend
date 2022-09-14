"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafka_1 = require("./kafka");
(async function () {
    const instanceKafkaApi = await kafka_1.default.initialization('api-app', 'api-app-consumer');
    await instanceKafkaApi.listen();
}());
//# sourceMappingURL=index.kafka.js.map