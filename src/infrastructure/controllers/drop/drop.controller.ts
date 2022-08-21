import {Controller, Get, Post, Query} from '@nestjs/common';
import {ParseDropUseCases} from "../../../use-cases/drop/parse-drop.use-case";
import {PaginationResponseDto} from "../../common/dtos/api-pagination-response.dto";
import {IPaginationService} from "../../../core/abstracts/adapters/pagination.interface";
import {DropUseCases} from "../../../use-cases/drop/drop.use-case";
import sequelize, { Op } from "sequelize";
import {GetAllDropsQueryDto} from "./dtos/getAll-drops.qyery.dto";
import {BoxDropRelations} from "../../../frameworks/data-services/sequelize/entities/box/box-drop.entity";

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

    const { rows, count } = await this.dropUseCases.getAll(params.options);

    getAllUserResponseDto.total = count
    getAllUserResponseDto.page = params.page
    getAllUserResponseDto.pages = Math.ceil(count / params.limit)
    getAllUserResponseDto.rows = rows

    return getAllUserResponseDto;
  }
}