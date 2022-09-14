import { Model } from 'sequelize-typescript';
import { PromoCodeEntity } from "../../../../../core/entities/promocode.entity";
export declare class Promocode extends Model implements PromoCodeEntity {
    id: number;
    name: string;
    percent: number;
    timer: Date;
}
