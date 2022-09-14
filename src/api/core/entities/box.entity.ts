import {TypeBox} from "./box-category.entity";

export class BoxEntity {
    declare id: number;
    declare name: string;
    declare cover: string;
    declare price: number;
    declare isActive: boolean;
    declare type: TypeBox;
    declare boxCategoryId: number;
    declare deletedAt: string | null;
}