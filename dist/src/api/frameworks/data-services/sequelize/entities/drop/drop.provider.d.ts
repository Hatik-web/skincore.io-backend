import { Drop } from "./drop.entity";
export declare const DROPS_REPOSITORY_TOKEN = "DROPS_REPOSITORY";
export declare const dropProvider: {
    provide: string;
    useValue: typeof Drop;
};
