import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import {CreateBoxesCategoryResponseDto} from "./dtos/create-boxes-category-response.dto";
import {BoxesUseCases} from "../../../../use-cases/box/boxes.use-case";
import {BoxesFactoryService} from "../../../../use-cases/box/boxes-factory.service";
import {CreateBoxesCategoryDto, UpdateBoxesCategoryDto} from "./dtos/boxes-category.dto";
import {BoxCategoryEntity} from "../../../../core/entities/box-category.entity";

@Controller('box-category')
export class BoxCategoriesController {
  constructor(
    private boxesUseCases: BoxesUseCases,
    private boxesFactoryService: BoxesFactoryService
  ) {}

  @Get()
  async getAll(@Query() query) : Promise<BoxCategoryEntity[]> {
    return await this.boxesUseCases.getAll();
  }

  @Post()
  async createBoxCategory(
      @Body() boxDto: CreateBoxesCategoryDto) : Promise<CreateBoxesCategoryResponseDto>
  {
    const createResponse = new CreateBoxesCategoryResponseDto();
    try {
      const boxCategory = this.boxesFactoryService.createCategory(boxDto);
      const createdBoxCategory = await this.boxesUseCases.createCategory(boxCategory);

      createResponse.success = true;
      createResponse.created = createdBoxCategory;
    } catch (error) {
      createResponse.success = false;
    }

    return createResponse;
  }

  @Put(':id')
  async updateBoxCategory(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateBoxesCategoryDto): Promise<BoxCategoryEntity>
  {
    const boxCategory = this.boxesFactoryService.update(updateDto);
    return await this.boxesUseCases.update(id, boxCategory);
  }
}