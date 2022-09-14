"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HexaOneService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
let HexaOneService = class HexaOneService {
    async getCurrencies(currency_code) {
        return await this.doRequest(`market/currencies/${currency_code}`);
    }
    async getItems(app_id) {
        return await this.doRequest(`market/items/${app_id}`);
    }
    async getListings(app_id) {
        return await this.doRequest(`market/listings/${app_id}`);
    }
    async getPrices(app_id) {
        return await this.doRequest(`market/prices/${app_id}`);
    }
    async getProfile(steam_id) {
        return await this.doRequest(`user/profile/${steam_id}`);
    }
    async getInventory(steam_id, app_id, context_id) {
        return await this.doRequest(`user/inventory/${steam_id}/${app_id}/${context_id}`);
    }
    async doRequest(endpoint) {
        try {
            let request = await (0, axios_1.default)(`https://api.hexa.one/${endpoint}`, {
                headers: {
                    'User-Agent': 'HEXA.ONE NodeJS Package',
                    'X-API-Key': process.env.HEXAONE_KEY
                },
                responseType: 'json',
                timeout: 5000
            });
            return request.data;
        }
        catch (err) {
            throw new common_1.UnauthorizedException(err.response.data.message);
        }
    }
};
HexaOneService = __decorate([
    (0, common_1.Injectable)()
], HexaOneService);
exports.HexaOneService = HexaOneService;
//# sourceMappingURL=hexaone.service.js.map