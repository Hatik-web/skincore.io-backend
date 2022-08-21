import {HttpException, Injectable, UnauthorizedException} from '@nestjs/common';
import {IHexaOneService} from "../../core/abstracts/adapters/hexaone.interface";
import axios from "axios";


@Injectable()
export class HexaOneService implements IHexaOneService{

    async getCurrencies(currency_code) {
        return await this.doRequest(`market/currencies/${currency_code}`);
    }

    async getItems(app_id): Promise<any> {
        return await this.doRequest(`market/items/${app_id}`);
    }

    async getListings(app_id) {
        return await this.doRequest(`market/listings/${app_id}`);
    }

    async getPrices(app_id): Promise<any> {
        return await this.doRequest(`market/prices/${app_id}`);
    }

    async getProfile(steam_id) {
        return await this.doRequest(`user/profile/${steam_id}`);
    }

    async getInventory(steam_id, app_id, context_id) {
        return await this.doRequest(`user/inventory/${steam_id}/${app_id}/${context_id}`);
    }

    private async doRequest(endpoint) {
        try {
            let request = await axios(`https://api.hexa.one/${endpoint}`, {
                headers: {
                    'User-Agent': 'HEXA.ONE NodeJS Package',
                    'X-API-Key': process.env.HEXAONE_KEY
                },
                responseType: 'json',
                timeout: 5000
            });
            return request.data;
        } catch (err) {
            throw new UnauthorizedException(err.response.data.message)
        }
    }
}