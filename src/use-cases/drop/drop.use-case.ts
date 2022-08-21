import {Injectable} from '@nestjs/common';
import {IDataServices} from "../../core/abstracts/repositories/data-services.abstract";
import {DropEntity} from "../../core/entities/drop.entity";

@Injectable()
export class DropUseCases {
  constructor(private dataServices: IDataServices) {}

    getAll(options): Promise<any> {
    return this.dataServices.drops.getAllAndCount(options);
  }

  getById(id: number): Promise<DropEntity> {
    return this.dataServices.drops.get(id);
  }
}