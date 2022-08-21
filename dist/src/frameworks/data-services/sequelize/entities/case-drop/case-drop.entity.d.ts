import { Model } from 'sequelize-typescript';
import { CaseDropEntity } from "../../../../../core/entities/case-drop.entity";
export declare class CaseDropRelations extends Model implements CaseDropEntity {
    id: number;
    dropId: number;
    boxId: number;
}
