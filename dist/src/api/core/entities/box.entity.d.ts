import { TypeBox } from "./box-category.entity";
export declare class BoxEntity {
    id: number;
    name: string;
    cover: string;
    price: number;
    isActive: boolean;
    type: TypeBox;
    boxCategoryId: number;
    deletedAt: string | null;
}
