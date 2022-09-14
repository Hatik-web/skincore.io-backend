import { IHexaOneService } from "../../core/abstracts/adapters/hexaone.interface";
export declare const img_url = "https://steamcommunity-a.akamaihd.net/economy/image/";
export declare const CsgoId = 730;
export declare class ParseDropUseCases {
    private readonly hexaOneService;
    constructor(hexaOneService: IHexaOneService);
    parseAndSaveDrops(): Promise<any[]>;
    private parseDrops;
    private baseRequest;
    private parseDrop;
    private skinCategory;
    private handleRarityGroup;
    private exterior;
    private skinType;
    private skinName;
    private isStatTrak;
    private isSouvenir;
    private skinRarity;
}
