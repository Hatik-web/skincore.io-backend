import { IDataServices } from "../../core/abstracts/repositories/data-services.abstract";
import { BoxCategoryEntity } from "../../core/entities/box-category.entity";
export declare class BoxesUseCases {
    private dataServices;
    constructor(dataServices: IDataServices);
    getAllTechnologiesCategories(): Promise<BoxCategoryEntity[]>;
    createTechnologyCategory(category: BoxCategoryEntity): Promise<BoxCategoryEntity>;
}
