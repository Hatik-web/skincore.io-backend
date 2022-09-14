import { DropEntity } from "./drop.entity";
export declare enum WhereDrop {
    "Case" = "Case",
    "Upgrade" = "Upgrade"
}
export declare class InventoryEntity extends DropEntity {
    archivePrice: number;
    whereDrop: WhereDrop;
    boxId: number;
    boxCover: string;
}
