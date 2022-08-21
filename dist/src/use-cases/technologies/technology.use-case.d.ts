import { IDataServices } from "../../core/abstracts/repositories/data-services.abstract";
import { TechnologyCategory } from "../../core/entities/technologies/technology-categories/technology-category.entity";
export declare class TechnologyUseCases {
    private dataServices;
    constructor(dataServices: IDataServices);
    getAllTechnologiesCategories(): Promise<TechnologyCategory[]>;
    createTechnologyCategory(category: TechnologyCategory): Promise<TechnologyCategory>;
}
