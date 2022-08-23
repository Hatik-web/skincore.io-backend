import { BoxesCategory } from "./box-category.entity";
export declare const BOXES_CATEGORIES_REPOSITORY_TOKEN = "BOXES_CATEGORIES_REPOSITORY";
export declare const boxesCategoriesProvider: {
    provide: string;
    useValue: typeof BoxesCategory;
};
