import { Model } from 'sequelize-typescript';
import { Box } from "./box.entity";
export declare class BoxesCategory extends Model {
    id: number;
    name: string;
    position: number;
    type: string;
    children: Box[];
}
