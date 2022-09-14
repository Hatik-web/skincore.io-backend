"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParseDropUseCases = exports.CsgoId = exports.img_url = void 0;
const common_1 = require("@nestjs/common");
const drop_entity_1 = require("../../core/entities/drop.entity");
const hexaone_interface_1 = require("../../core/abstracts/adapters/hexaone.interface");
const axios_1 = require("axios");
const parseName = require("csgo-item-name-parser");
const drop_entity_2 = require("../../frameworks/data-services/sequelize/entities/drop/drop.entity");
exports.img_url = "https://steamcommunity-a.akamaihd.net/economy/image/";
exports.CsgoId = 730;
let ParseDropUseCases = class ParseDropUseCases {
    constructor(hexaOneService) {
        this.hexaOneService = hexaOneService;
        this.parseDrops = async () => {
            const hexaOneResponse = await this.hexaOneService.getItems(exports.CsgoId);
            const itemsList = hexaOneResponse.result.items;
            const pricesData = await this.baseRequest();
            const prices = {};
            const currency = await axios_1.default.get('https://www.cbr-xml-daily.ru/daily_json.js');
            const USD = currency.data.Valute.USD;
            pricesData.data.forEach((item) => {
                prices[item.market_hash_name] = {
                    price: (Number((item.prices.safe).toFixed(2)) * USD.Value).toFixed(2)
                };
            });
            return this.parseDrop(itemsList, prices);
        };
        this.parseDrop = (items, listings) => {
            const drops = [];
            for (const nameItem in items) {
                const { type, icon_url, tags } = items[nameItem];
                let price = 0;
                if (listings[nameItem]) {
                    price = listings[nameItem].price;
                }
                const details = parseName(nameItem);
                drops.push({
                    title: nameItem,
                    price,
                    category: this.skinCategory(tags),
                    type,
                    rarityGroup: this.handleRarityGroup(type),
                    image: `${exports.img_url}${icon_url}`,
                    rarity: this.skinRarity(tags),
                    wear: this.exterior(details.wear) || null,
                    weapon: details.weapon,
                    skinName: details.skin || "",
                    isStatTrak: details.statTrak,
                    isSouvenir: details.souvenir
                });
            }
            return drops;
        };
        this.skinCategory = (tags) => {
            const type = tags.find((tag) => tag.category === "Type");
            if (!type)
                return null;
            return type.name;
        };
        this.handleRarityGroup = (type) => {
            let rarityGroup = drop_entity_1.RarityGroup.Other;
            type = type.toLowerCase();
            const checkRarity = (string) => type.includes(string);
            if (checkRarity("industrial")) {
                rarityGroup = drop_entity_1.RarityGroup.IndustrialGrade;
            }
            if (checkRarity("mil-spec") || checkRarity("high")) {
                rarityGroup = drop_entity_1.RarityGroup.MilSpec;
            }
            if (checkRarity("restricted") || checkRarity("remarkable")) {
                rarityGroup = drop_entity_1.RarityGroup.Restricted;
            }
            if (checkRarity("classified") || checkRarity("exotic")) {
                rarityGroup = drop_entity_1.RarityGroup.Classified;
            }
            if (checkRarity("covert") || checkRarity("extraordinary")) {
                rarityGroup = drop_entity_1.RarityGroup.Covert;
            }
            if (checkRarity("knife") || checkRarity("gloves") || checkRarity("contraband")) {
                rarityGroup = drop_entity_1.RarityGroup.Contraband;
            }
            return rarityGroup;
        };
        this.exterior = (title) => {
            if (title) {
                return title
                    .replace("(", "")
                    .replace(")", "")
                    .match(/\b(\w)/g)
                    .join("")
                    .trim();
            }
            return null;
        };
        this.skinType = (title) => title
            .split("|")[0]
            .replace("StatTrak", "")
            .replace("Souvenir", "")
            .replace("★", "")
            .replace("™", "")
            .trim();
        this.skinName = (title) => {
            const split = title.split("|");
            return (split[1] || "").replace(/\((.*)\)/, "").trim();
        };
        this.isStatTrak = (title) => title.indexOf("StatTrak") !== -1;
        this.isSouvenir = (title) => title.indexOf("Souvenir") !== -1;
        this.skinRarity = (tags) => {
            const type = tags.find((tag) => tag.category === "Rarity");
            if (!type)
                return null;
            return type.name;
        };
    }
    async parseAndSaveDrops() {
        const drops = await this.parseDrops();
        function chunk(arr, chunkSize) {
            const res = [];
            for (let i = 0; i < arr.length; i += chunkSize) {
                const chunk = arr.slice(i, i + chunkSize);
                res.push(chunk);
            }
            return res;
        }
        const sliceDrops = chunk(drops, 6);
        for (const chunk of sliceDrops) {
            await drop_entity_2.Drop.bulkCreate(chunk);
        }
        return drops;
    }
    async baseRequest() {
        const endpoint = `market/items/${exports.CsgoId}`;
        const res = await (0, axios_1.default)({
            url: `http://api.steamapis.com/${endpoint}?api_key=${process.env.STEAM_APIS}`,
            method: "GET",
            headers: {
                "User-Agent": "STEAMAPIS NPM PACKAGE",
            },
        });
        return res.data;
    }
};
ParseDropUseCases = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [hexaone_interface_1.IHexaOneService])
], ParseDropUseCases);
exports.ParseDropUseCases = ParseDropUseCases;
//# sourceMappingURL=parse-drop.use-case.js.map