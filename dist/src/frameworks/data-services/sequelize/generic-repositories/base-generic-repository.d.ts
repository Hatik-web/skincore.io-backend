import sequelize from 'sequelize';
import { IBaseGenericRepository } from "../../../../core/abstracts/repositories/base-generic-repositories/base-generic-repositories.abstract";
import seq from "sequelize";
export declare class BaseGenericRepository<T extends sequelize.Model> implements IBaseGenericRepository<T> {
    _repository: sequelize.ModelCtor<T>;
    constructor(repository: sequelize.ModelCtor<T>);
    getAll(options?: seq.FindAndCountOptions): Promise<T[]>;
    getAllAndCount(options?: seq.FindAndCountOptions): Promise<{
        rows: T[];
        count: number;
    }>;
    get(id: number): Promise<T>;
    create(item: T): Promise<T>;
    update(id: number, item: T): Promise<any>;
    upsert(data: T, options?: seq.FindAndCountOptions): Promise<[T, boolean]>;
}
