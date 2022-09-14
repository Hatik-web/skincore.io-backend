import {DropEntity} from "./drop.entity";

export enum WhereDrop {
    "Case"="Case",
    "Upgrade"="Upgrade"
}

export class InventoryEntity extends DropEntity{
    archivePrice: number;
    whereDrop: WhereDrop;
    boxId: number;
    boxCover: string;
}