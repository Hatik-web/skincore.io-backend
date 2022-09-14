declare class SocketsStore {
    private static instance;
    sockets: {};
    static createInstance(): SocketsStore;
    static getInstance(): SocketsStore;
    addSocket(socket: any, id: any): void;
    getSocket(id: any): any;
    removeSocket(id: any): void;
}
export default SocketsStore;
