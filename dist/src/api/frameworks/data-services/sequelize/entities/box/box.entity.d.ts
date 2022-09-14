import { Model } from 'sequelize-typescript';
import { BoxEntity } from "../../../../../core/entities/box.entity";
import { TypeBox } from "../../../../../core/entities/box-category.entity";
import { Drop } from "../drop/drop.entity";
export declare class Box extends Model implements BoxEntity {
    id: number;
    name: string;
    cover: string;
    price: number;
    isActive: boolean;
    type: TypeBox;
    boxCategoryId: number;
    deletedAt: string | null;
    children: Drop[];
}
