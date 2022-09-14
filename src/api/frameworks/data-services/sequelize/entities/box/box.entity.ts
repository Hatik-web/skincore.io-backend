import {Table, Column, Model, DataType, ForeignKey, BelongsToMany} from 'sequelize-typescript';
import {BoxEntity} from "../../../../../core/entities/box.entity";
import {TypeBox} from "../../../../../core/entities/box-category.entity";
import {BoxesCategory} from "./box-category.entity";
import {Drop} from "../drop/drop.entity";
import {BoxDropRelations} from "./box-drop.entity";

@Table({tableName: 'boxes'})
export class Box extends Model implements BoxEntity {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.STRING, allowNull: false})
    cover: string;

    @Column({type: DataType.DECIMAL(10, 2), allowNull: false})
    price: number;

    @Column({type: DataType.BOOLEAN, allowNull: false})
    isActive: boolean;

    @Column({type: DataType.STRING, allowNull: false})
    type: TypeBox;

    @ForeignKey(() => BoxesCategory)
    @Column({type: DataType.INTEGER, allowNull: false, onUpdate: "CASCADE", onDelete: "CASCADE"})
    boxCategoryId: number;

    @Column({type: DataType.DATE, allowNull: true})
    deletedAt: string | null;

    @BelongsToMany(() => Drop, { as: 'drops', through: () => BoxDropRelations })
    children: Drop[]
}