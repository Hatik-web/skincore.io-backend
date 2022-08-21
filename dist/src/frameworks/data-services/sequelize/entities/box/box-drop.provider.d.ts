import { BoxDropRelations } from "./box-drop.entity";
export declare const BOX_DROP_REPOSITORY_TOKEN = "BOX_DROP_REPOSITORY";
export declare const boxDropProvider: {
    provide: string;
    useValue: typeof BoxDropRelations;
};
