"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectSocketClient = void 0;
const socket_io_client_1 = require("socket.io-client");
const connectSocketClient = () => {
    const socket = (0, socket_io_client_1.default)(`http://localhost:5000`, {
        transports: ['websocket'],
    });
    socket.on('connect', () => {
        console.log("WS CONNECTED");
    });
};
exports.connectSocketClient = connectSocketClient;
//# sourceMappingURL=client.js.map