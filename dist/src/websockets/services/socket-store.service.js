"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SocketsStore_1;
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
let SocketsStore = SocketsStore_1 = class SocketsStore {
    constructor() {
        this.sockets = {};
    }
    static createInstance() {
        if (!SocketsStore_1.instance) {
            SocketsStore_1.instance = new SocketsStore_1();
        }
        return SocketsStore_1.instance;
    }
    static getInstance() {
        if (!SocketsStore_1.instance) {
            SocketsStore_1.instance = new SocketsStore_1();
        }
        return SocketsStore_1.instance;
    }
    addSocket(socket, id) {
        this.sockets[id] = socket;
    }
    getSocket(id) {
        return this.sockets[id];
    }
    removeSocket(id) {
        delete this.sockets[id];
    }
};
SocketsStore = SocketsStore_1 = __decorate([
    (0, common_1.Injectable)()
], SocketsStore);
exports.default = SocketsStore;
//# sourceMappingURL=socket-store.service.js.map