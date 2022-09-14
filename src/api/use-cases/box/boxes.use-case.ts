import {Injectable} from '@nestjs/common';
import {IDataServices} from "../../core/abstracts/repositories/data-services.abstract";
import {BoxCategoryEntity} from "../../core/entities/box-category.entity";
import {BoxEntity} from "../../core/entities/box.entity";
import {Box} from "../../frameworks/data-services/sequelize/entities/box/box.entity";

@Injectable()
export class BoxesUseCases {
  constructor(private dataServices: IDataServices) {}

  getAll(): Promise<BoxCategoryEntity[]> {
    return this.dataServices.boxesCategory.getAll({ include: {
        as: "children",
        model: Box,
        include: "drops"
      }});
  }

  getAllBox(): Promise<BoxEntity[]> {
    return this.dataServices.boxes.getAll();
  }

  async createCategory(category: BoxCategoryEntity): Promise<BoxCategoryEntity> {
    return await this.dataServices.boxesCategory.create(category);
  }

  async update(id: BoxCategoryEntity['id'], category: BoxCategoryEntity): Promise<BoxCategoryEntity> {
    return await this.dataServices.boxesCategory.update(id, category);
  }

  async createBox(box: BoxEntity): Promise<BoxEntity> {
    return await this.dataServices.boxes.create(box);
  }

  async addDrops(boxId: number, dropIds: number[]): Promise<void> {
    for (const id of dropIds){
      await this.dataServices.boxDropRelation.create({
        dropId: id,
        boxId
      })
    }
  }
}