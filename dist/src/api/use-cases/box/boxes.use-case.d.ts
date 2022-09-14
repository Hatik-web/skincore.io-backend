import { IDataServices } from "../../core/abstracts/repositories/data-services.abstract";
import { BoxCategoryEntity } from "../../core/entities/box-category.entity";
import { BoxEntity } from "../../core/entities/box.entity";
export declare class BoxesUseCases {
    private dataServices;
    constructor(dataServices: IDataServices);
    getAll(): Promise<BoxCategoryEntity[]>;
    getAllBox(): Promise<BoxEntity[]>;
    createCategory(category: BoxCategoryEntity): Promise<BoxCategoryEntity>;
    update(id: BoxCategoryEntity['id'], category: BoxCategoryEntity): Promise<BoxCategoryEntity>;
    createBox(box: BoxEntity): Promise<BoxEntity>;
    addDrops(boxId: number, dropIds: number[]): Promise<void>;
}
