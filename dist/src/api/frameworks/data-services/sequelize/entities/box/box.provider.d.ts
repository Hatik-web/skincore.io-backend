import { Box } from "./box.entity";
export declare const BOXES_REPOSITORY_TOKEN = "BOXES_REPOSITORY";
export declare const boxProvider: {
    provide: string;
    useValue: typeof Box;
};
