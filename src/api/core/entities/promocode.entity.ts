import {TypeBox} from "./box-category.entity";

export class PromoCodeEntity {
    declare id: number;
    declare name: string;
    declare percent: number;
    declare timer: Date;
}