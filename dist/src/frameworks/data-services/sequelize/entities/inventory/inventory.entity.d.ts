import { Drop } from "../drop/drop.entity";
import { WhereDrop } from "../../../../../core/entities/inventory.entity";
export declare class Inventory extends Drop {
    archivePrice: number;
    whereDrop: WhereDrop;
    boxId: number;
    boxCover: string;
}
