import { Model } from 'sequelize-typescript';
import { DropEntity, RarityGroup } from "../../../../../core/entities/drop.entity";
export declare class Drop extends Model implements DropEntity {
    id: number;
    type: string;
    title: string;
    category: string;
    image: string;
    rarity: string;
    quality: string;
    skinName: string;
    weapon: string;
    price: number;
    rarityGroup: RarityGroup;
    isStatTrak: boolean;
    isSouvenir: boolean;
}
