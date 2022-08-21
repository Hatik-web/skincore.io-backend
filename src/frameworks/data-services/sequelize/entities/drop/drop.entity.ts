import {Table, Column, Model, DataType, BelongsToMany} from 'sequelize-typescript';
import {DropEntity, RarityGroup} from "../../../../../core/entities/drop.entity";
import {BoxDropRelations} from "../box/box-drop.entity";
import {Box} from "../box/box.entity";

@Table({tableName: 'drops'})
export class Drop extends Model implements DropEntity{
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, allowNull: false})
  type: string;

  @Column({type: DataType.STRING, allowNull: false})
  title: string;

  @Column({type: DataType.STRING, allowNull: false})
  category: string;

  @Column({type: DataType.TEXT, allowNull: false})
  image: string;

  @Column({type: DataType.STRING, allowNull: false})
  rarity: string;

  @Column({type: DataType.STRING, allowNull: true})
  wear: string;

  @Column({type: DataType.STRING, allowNull: false})
  skinName: string;

  @Column({type: DataType.STRING, allowNull: false})
  weapon: string;

  @Column({type: DataType.DECIMAL(10, 2), allowNull: false})
  price: number;

  @Column({type: DataType.STRING, allowNull: false})
  rarityGroup: RarityGroup;

  @Column({type: DataType.BOOLEAN, allowNull: false})
  isStatTrak: boolean;

  @Column({type: DataType.BOOLEAN, allowNull: false})
  isSouvenir: boolean;

  @BelongsToMany(() => Box, { as: 'box', through: () => BoxDropRelations })
  children: Box[]
}