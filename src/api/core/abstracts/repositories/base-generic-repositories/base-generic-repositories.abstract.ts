export abstract class IBaseGenericRepository<T> {
  
  abstract getAll(options?: any): Promise<T[]>;

  abstract getAllAndCount(options?: any);

  abstract get(id: number): Promise<T>;

  abstract create(item: T): Promise<T>;

  abstract update(id: number, item: T): Promise<T>

  abstract upsert(data: any, options?: any): any;
}