import {Column, DataType, Table} from 'sequelize-typescript';
import {Drop} from "../drop/drop.entity";
import {WhereDrop} from "../../../../../core/entities/inventory.entity";

@Table({tableName: 'inventories'})
export class Inventory extends Drop {
  @Column({type: DataType.DECIMAL(10, 2), allowNull: false})
  archivePrice: number;

  @Column({type: DataType.STRING, allowNull: false})
  whereDrop: WhereDrop;

  @Column({type: DataType.INTEGER, allowNull: true})
  boxId: number;

  @Column({type: DataType.STRING, allowNull: false})
  boxCover: string;
}