import sequelize from 'sequelize';
import {
  IBaseGenericRepository,
} from "../../../../core/abstracts/repositories/base-generic-repositories/base-generic-repositories.abstract";
import seq from "sequelize";

export class BaseGenericRepository<T extends sequelize.Model> implements IBaseGenericRepository<T> {
  public _repository: sequelize.ModelCtor<T>;

  constructor(repository: sequelize.ModelCtor<T>) {
    this._repository = repository;
  }

  getAll(options?: seq.FindAndCountOptions): Promise<T[]> {
    return this._repository.findAll(options)
  }

  getAllAndCount(options?: seq.FindAndCountOptions) {
    return this._repository.findAndCountAll(options)
  }

  get(id: number): Promise<T> {
    const options: seq.FindAndCountOptions = { where: { id }}
    return this._repository.findOne(options)
  }

  create(item: T): Promise<T> {
    return this._repository.create(item as any);
  }

  update(id: number, item: T): Promise<any> {
    return this._repository.update(id, item as any);
  }

  upsert(data: T, options?: seq.FindAndCountOptions) {
    return this._repository.upsert(data as any, options);
  }
}