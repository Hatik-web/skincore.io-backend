export enum RarityGroup {
    Other="Other",
    ConsumerGrade="ConsumerGrade",
    IndustrialGrade="IndustrialGrade",
    MilSpec="MilSpec",
    Restricted="Restricted",
    Classified="Classified",
    Covert="Covert",
    Contraband="Contraband"
}

export class DropEntity {
    declare id: number;
    declare type: string;
    declare title: string;
    declare category: string;
    declare image: string;
    declare rarity: string;
    declare wear: string;
    declare skinName: string;
    declare weapon: string;
    declare price: number;
    declare rarityGroup: RarityGroup;
    declare isStatTrak: boolean;
    declare isSouvenir: boolean;
}