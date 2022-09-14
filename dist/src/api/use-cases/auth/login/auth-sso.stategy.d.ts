import { AuthUseCase } from "./auth.use-case";
declare const OpenidStrategy_base: new (...args: any[]) => any;
export declare class OpenidStrategy extends OpenidStrategy_base {
    private readonly authUseCase;
    constructor(authUseCase: AuthUseCase);
    private static getSteamIdFromIdentifier;
    validate(identifier: string): Promise<any>;
}
export {};
