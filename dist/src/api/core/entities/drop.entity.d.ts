export declare enum RarityGroup {
    Other = "Other",
    ConsumerGrade = "ConsumerGrade",
    IndustrialGrade = "IndustrialGrade",
    MilSpec = "MilSpec",
    Restricted = "Restricted",
    Classified = "Classified",
    Covert = "Covert",
    Contraband = "Contraband"
}
export declare class DropEntity {
    id: number;
    type: string;
    title: string;
    category: string;
    image: string;
    rarity: string;
    wear: string;
    skinName: string;
    weapon: string;
    price: number;
    rarityGroup: RarityGroup;
    isStatTrak: boolean;
    isSouvenir: boolean;
}
