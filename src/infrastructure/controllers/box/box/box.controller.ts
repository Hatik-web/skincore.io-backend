import {Body, Controller, Get, Param, ParseIntPipe, Post, Put, Query} from '@nestjs/common';
import {BoxesUseCases} from "../../../../use-cases/box/boxes.use-case";
import {BoxesFactoryService} from "../../../../use-cases/box/boxes-factory.service";
import {BoxCategoryEntity} from "../../../../core/entities/box-category.entity";
import {CreateBoxDto} from "./dtos/box.dto";
import {CreateBoxResponseDto} from "./dtos/create-box-response.dto";
import {BoxEntity} from "../../../../core/entities/box.entity";

@Controller('box')
export class BoxController {
  constructor(
    private boxesUseCases: BoxesUseCases,
    private boxesFactoryService: BoxesFactoryService
  ) {}

  @Get()
  async getAll(@Query() query) : Promise<BoxEntity[]> {
    return await this.boxesUseCases.getAllBox();
  }

  @Post()
  async createBox(
      @Body() boxDto: CreateBoxDto) : Promise<CreateBoxResponseDto>
  {
    const createResponse = new CreateBoxResponseDto();
    try {
      const box = this.boxesFactoryService.createBox(boxDto);
      const createdBox = await this.boxesUseCases.createBox(box);
      await this.boxesUseCases.addDrops(createdBox.id, boxDto.dropIds);

      createResponse.success = true;
      createResponse.created = createdBox;
    } catch (error) {
      createResponse.success = false;
    }

    return createResponse;
  }

  // @Put(':id')
  // async updateBoxCategory(
  //   @Param('id', ParseIntPipe) id: number,
  //   @Body() updateDto: UpdateBoxesCategoryDto): Promise<BoxCategoryEntity>
  // {
  //   const boxCategory = this.boxesFactoryService.update(updateDto);
  //   return await this.boxesUseCases.update(id, boxCategory);
  // }
}