import {Injectable} from "@nestjs/common";

@Injectable()
class SocketsStore {
    private static instance: SocketsStore;

    public sockets = {};

    public static createInstance(): SocketsStore {
        if (!SocketsStore.instance) {
            SocketsStore.instance = new SocketsStore();
        }

        return SocketsStore.instance;
    }

    public static getInstance(): SocketsStore {
        if (!SocketsStore.instance) {
            SocketsStore.instance = new SocketsStore();
        }

        return SocketsStore.instance;
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
}

export default SocketsStore;
