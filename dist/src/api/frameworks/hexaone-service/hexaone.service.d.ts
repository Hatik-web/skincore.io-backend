import { IHexaOneService } from "../../core/abstracts/adapters/hexaone.interface";
export declare class HexaOneService implements IHexaOneService {
    getCurrencies(currency_code: any): Promise<any>;
    getItems(app_id: any): Promise<any>;
    getListings(app_id: any): Promise<any>;
    getPrices(app_id: any): Promise<any>;
    getProfile(steam_id: any): Promise<any>;
    getInventory(steam_id: any, app_id: any, context_id: any): Promise<any>;
    private doRequest;
}
