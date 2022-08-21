import {Table, Column, Model, DataType} from 'sequelize-typescript';
import {PromoCodeEntity} from "../../../../../core/entities/promocode.entity";

@Table({tableName: 'promocodes'})
export class Promocode extends Model implements PromoCodeEntity {
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    name: string;

    @Column({type: DataType.INTEGER, allowNull: false})
    percent: number;

    @Column({type: DataType.DATE, allowNull: true})
    timer: Date;
}