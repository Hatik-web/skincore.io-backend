import {Table, Column, Model, DataType, HasMany} from 'sequelize-typescript';
import {Box} from "./box.entity";

@Table({tableName: 'box-categories'})
export class BoxesCategory extends Model {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  name: string;

  @Column({type: DataType.INTEGER, allowNull: false})
  position: number;

  @Column({type: DataType.STRING, allowNull: false})
  type: string;

  @HasMany(() => Box, "boxCategoryId")
  children: Box[];
}