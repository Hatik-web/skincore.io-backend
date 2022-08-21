import { TechnologyCategory } from "./technology-category.entity";
export declare const TECHNOLOGY_CATEGORIES_REPOSITORY_TOKEN = "TECHNOLOGY_CATEGORIES_REPOSITORY";
export declare const technologyCategoriesProvider: {
    provide: string;
    useValue: typeof TechnologyCategory;
};
