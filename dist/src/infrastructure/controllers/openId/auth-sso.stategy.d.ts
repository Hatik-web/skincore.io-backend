declare const OpenidStrategy_base: new (...args: any[]) => any;
export declare class OpenidStrategy extends OpenidStrategy_base {
    constructor();
    private static getSteamIdFromIdentifier;
    validate(identifier: string): Promise<any>;
}
export {};
