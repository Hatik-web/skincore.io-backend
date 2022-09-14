import { IDataServices } from "../../core/abstracts/repositories/data-services.abstract";
import { DropEntity } from "../../core/entities/drop.entity";
export declare class DropUseCases {
    private dataServices;
    constructor(dataServices: IDataServices);
    getAll(options: any): Promise<any>;
    getById(id: number): Promise<DropEntity>;
}
