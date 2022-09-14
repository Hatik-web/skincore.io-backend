import {Table, Column, Model, DataType, ForeignKey} from 'sequelize-typescript';
import {CaseDropEntity} from "../../../../../core/entities/case-drop.entity";
import {Drop} from "../drop/drop.entity";
import {Box} from "./box.entity";

@Table({tableName: 'box-drop-relations'})
export class BoxDropRelations extends Model implements CaseDropEntity{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @ForeignKey(() => Drop)
  @Column({type: DataType.INTEGER, allowNull: false})
  dropId: number;

  @ForeignKey(() => Box)
  @Column({type: DataType.INTEGER, allowNull: false})
  boxId: number;
}