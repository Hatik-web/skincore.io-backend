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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropController = void 0;
const common_1 = require("@nestjs/common");
const parse_drop_use_case_1 = require("../../../use-cases/drop/parse-drop.use-case");
const api_pagination_response_dto_1 = require("../../common/dtos/api-pagination-response.dto");
const pagination_interface_1 = require("../../../core/abstracts/adapters/pagination.interface");
const drop_use_case_1 = require("../../../use-cases/drop/drop.use-case");
const sequelize_1 = require("sequelize");
const getAll_drops_qyery_dto_1 = require("./dtos/getAll-drops.qyery.dto");
let DropController = class DropController {
    constructor(parseDropUseCases, dropUseCases, paginationService) {
        this.parseDropUseCases = parseDropUseCases;
        this.dropUseCases = dropUseCases;
        this.paginationService = paginationService;
    }
    async parseAndSaveDrops() {
        return await this.parseDropUseCases.parseAndSaveDrops();
    }
    async getAll(query) {
        const getAllUserResponseDto = new api_pagination_response_dto_1.PaginationResponseDto();
        const params = this.paginationService.getParams(query);
        const { category, wear, rarity, weapon, min, max } = query;
        const filters = {
            [sequelize_1.Op.and]: [
                sequelize_1.default.literal(`price > ${parseInt(min) || 1}`),
                sequelize_1.default.literal(`price < ${parseInt(max) || 1000000}`),
                category && { category },
                wear && { wear },
                rarity && { rarity },
                weapon && { weapon }
            ]
        };
        params.options = Object.assign(Object.assign({}, params.options), { where: filters, order: [["price", "ASC"]] });
        return {
            "total": 26336,
            "page": 1,
            "pages": 1646,
            "rows": [
                {
                    "id": 1174,
                    "type": "Consumer Grade Pistol",
                    "title": "Dual Berettas | Colony (Battle-Scarred)",
                    "category": "Pistol",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3Yi1D79mJmYGZnvnxDLPUl31IpsNy2-iY8YiljFfhqUE4ZW77cNOVI1RrYlHVrgS2kOq5h8To7syYyCZ9-n51ETpn3yM",
                    "rarity": "Consumer Grade",
                    "wear": "BS",
                    "skinName": "Colony",
                    "weapon": "Dual Berettas",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:39.840Z",
                    "updatedAt": "2022-08-28T16:54:39.840Z"
                },
                {
                    "id": 1177,
                    "type": "Consumer Grade Pistol",
                    "title": "Dual Berettas | Colony (Minimal Wear)",
                    "category": "Pistol",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3Yi1D79mJmYGZnvnxDLfYkWNFppQh2-qX996s2wXhr0BrNzvzIYbEdlU5aVnXq1XtwO_qhJHu7czIz3V9-n51SayrbWI",
                    "rarity": "Consumer Grade",
                    "wear": "MW",
                    "skinName": "Colony",
                    "weapon": "Dual Berettas",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:39.891Z",
                    "updatedAt": "2022-08-28T16:54:39.891Z"
                },
                {
                    "id": 381,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Sweeper (Well-Worn)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDum25V4dB8xLDHrI2tjgbm-kRoa2HycofEcQc8ZgvZ-gDvwby705S17pXLmyBruCQ8pSGKnwGWryQ",
                    "rarity": "Consumer Grade",
                    "wear": "WW",
                    "skinName": "Sweeper",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.342Z",
                    "updatedAt": "2022-08-28T16:54:32.342Z"
                },
                {
                    "id": 380,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Sweeper (Minimal Wear)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDummJW4NE_3riWo9r2jFbs_RBrMW_1JteRIQA9YF6C-Fm4xenqhMW5uJTNySQy7D5iuyjPnxcPTA",
                    "rarity": "Consumer Grade",
                    "wear": "MW",
                    "skinName": "Sweeper",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.342Z",
                    "updatedAt": "2022-08-28T16:54:32.342Z"
                },
                {
                    "id": 379,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Sweeper (Field-Tested)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDum25V4dB8xLDHrI2tjgbm-kRoa2HycofEcQc8ZgvZ-gDvwby705S17pXLmyBruCQ8pSGKnwGWryQ",
                    "rarity": "Consumer Grade",
                    "wear": "FT",
                    "skinName": "Sweeper",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.342Z",
                    "updatedAt": "2022-08-28T16:54:32.342Z"
                },
                {
                    "id": 1176,
                    "type": "Consumer Grade Pistol",
                    "title": "Dual Berettas | Colony (Field-Tested)",
                    "category": "Pistol",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3Yi1D79mJmYGZnvnxDLbUkmJE5YsojLiXo96gjVbt-BY5Yjv0LIHAeg86M1jYq1G6wbu8g5K-tZqfn3NlpGB8spTFqtYC",
                    "rarity": "Consumer Grade",
                    "wear": "FT",
                    "skinName": "Colony",
                    "weapon": "Dual Berettas",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:39.840Z",
                    "updatedAt": "2022-08-28T16:54:39.840Z"
                },
                {
                    "id": 362,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Storm (Battle-Scarred)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0n_L1JaKfzm8H68Rz2rDDp93w0QawrkRkYm2gIoeWdwM8Y16B_FLvl-zthcO9u4OJlyU1Qjv3jQ",
                    "rarity": "Consumer Grade",
                    "wear": "BS",
                    "skinName": "Storm",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.172Z",
                    "updatedAt": "2022-08-28T16:54:32.172Z"
                },
                {
                    "id": 289,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Contractor (Battle-Scarred)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJK6d2gjc7ez_LyN-LUxDMJsJIp2bHC8Y_2jVa1_kVrNz-hIYfBIwI4Y16C_FS3366x0iIMGq3k",
                    "rarity": "Consumer Grade",
                    "wear": "BS",
                    "skinName": "Contractor",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:31.462Z",
                    "updatedAt": "2022-08-28T16:54:31.462Z"
                },
                {
                    "id": 366,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Storm (Well-Worn)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0mvLwOq7c2D5QvsN12OqWoNX33ATm8xBpYGrzctKSdlNqZgzR-QXole_u1sC16czXiSw0a5jTWaU",
                    "rarity": "Consumer Grade",
                    "wear": "WW",
                    "skinName": "Storm",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.172Z",
                    "updatedAt": "2022-08-28T16:54:32.172Z"
                },
                {
                    "id": 377,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Sweeper (Battle-Scarred)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRw7P7NYjV9_92wkZSSlfv1MLDunm5Q_tw_0rmYpdug0AXh-kA6YWv0cNTDc1I7ZVmFrlnsye3ph57otJuanCFnuz5iuyihGM87Eg",
                    "rarity": "Consumer Grade",
                    "wear": "BS",
                    "skinName": "Sweeper",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.282Z",
                    "updatedAt": "2022-08-28T16:54:32.282Z"
                },
                {
                    "id": 291,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Contractor (Field-Tested)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJP6di_gY3FwaX2ZuuEzjxQscMgiOvDrI-tjFfkqUI6ZmnwI46dc1NoNQ7X-ATowvCv28F3OnPKLg",
                    "rarity": "Consumer Grade",
                    "wear": "FT",
                    "skinName": "Contractor",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:31.462Z",
                    "updatedAt": "2022-08-28T16:54:31.462Z"
                },
                {
                    "id": 365,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Storm (Minimal Wear)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0m_7zO6-fzj9V7cAl2eyVpIrz2FKx8kZtZGqhIoWQJwU4aArU8le2xea50J--6oOJlyWzfFi66w",
                    "rarity": "Consumer Grade",
                    "wear": "MW",
                    "skinName": "Storm",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.172Z",
                    "updatedAt": "2022-08-28T16:54:32.172Z"
                },
                {
                    "id": 292,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Contractor (Minimal Wear)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJO5du-gM6OxfakZbnQw28H65Eg2L2RrYin3ADjrkJqYWz0Jo6UdVNrYV3SqAW9366x0l1OAhlP",
                    "rarity": "Consumer Grade",
                    "wear": "MW",
                    "skinName": "Contractor",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:31.462Z",
                    "updatedAt": "2022-08-28T16:54:31.462Z"
                },
                {
                    "id": 364,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Storm (Field-Tested)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7ODcfi9P6s65mpS0mvLwOq7c2D5QvsN12OqWoNX33ATm8xBpYGrzctKSdlNqZgzR-QXole_u1sC16czXiSw0a5jTWaU",
                    "rarity": "Consumer Grade",
                    "wear": "FT",
                    "skinName": "Storm",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:32.172Z",
                    "updatedAt": "2022-08-28T16:54:32.172Z"
                },
                {
                    "id": 293,
                    "type": "Consumer Grade Rifle",
                    "title": "AUG | Contractor (Well-Worn)",
                    "category": "Rifle",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpot6-iFBRv7OPFcgJP6di_gY3FwaX2ZuuEzjxQscMgiOvDrI-tjFfkqUI6ZmnwI46dc1NoNQ7X-ATowvCv28F3OnPKLg",
                    "rarity": "Consumer Grade",
                    "wear": "WW",
                    "skinName": "Contractor",
                    "weapon": "AUG",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:31.462Z",
                    "updatedAt": "2022-08-28T16:54:31.462Z"
                },
                {
                    "id": 1178,
                    "type": "Consumer Grade Pistol",
                    "title": "Dual Berettas | Colony (Well-Worn)",
                    "category": "Pistol",
                    "image": "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpos7asPwJfwPz3Yi1D79mJmYGZnvnxDLbUkmJE5YsojLiXo96gjVbt-BY5Yjv0LIHAeg86M1jYq1G6wbu8g5K-tZqfn3NlpGB8spTFqtYC",
                    "rarity": "Consumer Grade",
                    "wear": "WW",
                    "skinName": "Colony",
                    "weapon": "Dual Berettas",
                    "price": "1.80",
                    "rarityGroup": "Other",
                    "isStatTrak": false,
                    "isSouvenir": false,
                    "createdAt": "2022-08-28T16:54:39.891Z",
                    "updatedAt": "2022-08-28T16:54:39.891Z"
                }
            ]
        };
    }
};
__decorate([
    (0, common_1.Post)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], DropController.prototype, "parseAndSaveDrops", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [getAll_drops_qyery_dto_1.GetAllDropsQueryDto]),
    __metadata("design:returntype", Promise)
], DropController.prototype, "getAll", null);
DropController = __decorate([
    (0, common_1.Controller)('drop'),
    __metadata("design:paramtypes", [parse_drop_use_case_1.ParseDropUseCases,
        drop_use_case_1.DropUseCases,
        pagination_interface_1.IPaginationService])
], DropController);
exports.DropController = DropController;
//# sourceMappingURL=drop.controller.js.map