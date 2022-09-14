import {Controller, Get, Post, Query} from '@nestjs/common';
import {ParseDropUseCases} from "../../../use-cases/drop/parse-drop.use-case";
import {PaginationResponseDto} from "../../common/dtos/api-pagination-response.dto";
import {IPaginationService} from "../../../core/abstracts/adapters/pagination.interface";
import {DropUseCases} from "../../../use-cases/drop/drop.use-case";
import sequelize, { Op } from "sequelize";
import {GetAllDropsQueryDto} from "./dtos/getAll-drops.qyery.dto";

@Controller('drop')
export class DropController {
  constructor(
    private parseDropUseCases: ParseDropUseCases,
    private dropUseCases: DropUseCases,
    private paginationService: IPaginationService
  ) {}

  @Post()
  async parseAndSaveDrops() {
    return await this.parseDropUseCases.parseAndSaveDrops()
  }

  @Get()
  async getAll(@Query() query: GetAllDropsQueryDto): Promise<PaginationResponseDto> {
    const getAllUserResponseDto = new PaginationResponseDto();

    const params = this.paginationService.getParams(query);

    const { category, wear, rarity, weapon, min, max } = query

    const filters = {
      [Op.and]: [
        sequelize.literal(`price > ${parseInt(min) || 1}`),
        sequelize.literal(`price < ${parseInt(max) || 1000000}`),
        category && { category },
        wear && { wear },
        rarity && { rarity },
        weapon && { weapon }
      ]
    };

    params.options = {
      ...params.options,
      where: filters,
      order: [["price", "ASC"]]
    };

    // const { rows, count } = await this.dropUseCases.getAll(params.options);

    // getAllUserResponseDto.total = count
    // getAllUserResponseDto.page = params.page
    // getAllUserResponseDto.pages = Math.ceil(count / params.limit)
    // getAllUserResponseDto.rows = rows

    // return getAllUserResponseDto;
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
    }
  }
}