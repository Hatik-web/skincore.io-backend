import { Promocode } from "./promocode.entity";
export declare const PROMOCODES_REPOSITORY_TOKEN = "PROMOCODES_REPOSITORY";
export declare const promocodeProvider: {
    provide: string;
    useValue: typeof Promocode;
};
