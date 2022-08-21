import {Injectable} from '@nestjs/common';
import {RarityGroup} from "../../core/entities/drop.entity";
import {IHexaOneService} from "../../core/abstracts/adapters/hexaone.interface";
import axios from "axios";
import parseName = require('csgo-item-name-parser')
import _ from "lodash";
import {Drop} from "../../frameworks/data-services/sequelize/entities/drop/drop.entity";

export const img_url = "https://steamcommunity-a.akamaihd.net/economy/image/";

export const CsgoId = 730

@Injectable()
export class ParseDropUseCases {
  constructor(
      private readonly hexaOneService: IHexaOneService,
      // private readonly dataServices: IDataServices,
  ) {}

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
      //TODO: Заменить
      await Drop.bulkCreate(chunk);
    }

    return drops;
  }

  private parseDrops = async () => {
    const hexaOneResponse = await this.hexaOneService.getItems(CsgoId);
    const itemsList = hexaOneResponse.result.items

    const pricesData = await this.baseRequest()
    const prices = {};

    const currency = await axios.get('https://www.cbr-xml-daily.ru/daily_json.js')
    const USD = currency.data.Valute.USD

    pricesData.data.forEach((item) => {
      prices[item.market_hash_name] = {
        price: (Number((item.prices.safe).toFixed(2)) * USD.Value).toFixed(2)
      };
    });

    return this.parseDrop(itemsList, prices);
  }

  private async baseRequest() {
    const endpoint = `market/items/${CsgoId}`
    const res = await axios({
      url: `http://api.steamapis.com/${endpoint}?api_key=${process.env.STEAM_APIS}`,
      method: "GET",
      headers: {
        "User-Agent": "STEAMAPIS NPM PACKAGE",
      },
    });
    return res.data;
  }

  private parseDrop = (items, listings) => {
    const drops = [];

    for (const nameItem in items) {
      const { type, icon_url, tags } = items[nameItem];

      let price = 0;
      if (listings[nameItem]) {
        price = listings[nameItem].price;
      }

      const details = parseName(nameItem)

      drops.push({
        title: nameItem,
        price,
        category: this.skinCategory(tags),
        type,
        rarityGroup: this.handleRarityGroup(type),
        image: `${img_url}${icon_url}`,
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

  private skinCategory = (tags) => {
    const type = tags.find((tag) => tag.category === "Type");

    if (!type) return null;

    return type.name;
  };

  private handleRarityGroup = (type) => {
    let rarityGroup = RarityGroup.Other;

    type = type.toLowerCase();
    const checkRarity = (string) => type.includes(string);

    if (checkRarity("industrial")) {
      rarityGroup = RarityGroup.IndustrialGrade;
    }

    if (checkRarity("mil-spec") || checkRarity("high")) {
      rarityGroup = RarityGroup.MilSpec;
    }

    if (checkRarity("restricted") || checkRarity("remarkable")) {
      rarityGroup = RarityGroup.Restricted;
    }

    if (checkRarity("classified") || checkRarity("exotic")) {
      rarityGroup = RarityGroup.Classified;
    }

    if (checkRarity("covert") || checkRarity("extraordinary")) {
      rarityGroup = RarityGroup.Covert;
    }

    if (checkRarity("knife") || checkRarity("gloves") || checkRarity("contraband")) {
      rarityGroup = RarityGroup.Contraband;
    }

    return rarityGroup;
  };

  private exterior = (title) => {
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

  private skinType = (title) => title
      .split("|")[0]
      .replace("StatTrak", "")
      .replace("Souvenir", "")
      .replace("★", "")
      .replace("™", "")
      .trim();

  private skinName = (title) => {
    const split = title.split("|");

    return (split[1] || "").replace(/\((.*)\)/, "").trim();
  };

  private isStatTrak = (title) => title.indexOf("StatTrak") !== -1;

  private isSouvenir = (title) => title.indexOf("Souvenir") !== -1;

  private skinRarity = (tags) => {
    const type = tags.find((tag) => tag.category === "Rarity");

    if (!type) return null;

    return type.name;
  };

}