import { Injectable } from '@nestjs/common';
import {
  CreateBoxesCategoryDto, UpdateBoxesCategoryDto
} from "../../infrastructure/controllers/box/boxes-categories/dtos/boxes-category.dto";
import {BoxCategoryEntity, TypeBox} from "../../core/entities/box-category.entity";
import {CreateBoxDto} from "../../infrastructure/controllers/box/box/dtos/box.dto";
import {BoxEntity} from "../../core/entities/box.entity";

@Injectable()
export class BoxesFactoryService {

  createCategory(createBoxCategoryDto: CreateBoxesCategoryDto) {
    const newBoxesCategory = new BoxCategoryEntity();
    newBoxesCategory.name = createBoxCategoryDto.name;
    newBoxesCategory.position = createBoxCategoryDto.position;
    newBoxesCategory.type = createBoxCategoryDto.type;

    return newBoxesCategory;
  }

  update(updateBoxCategoryDto: UpdateBoxesCategoryDto) {
    const newBoxesCategory = new BoxCategoryEntity();
    newBoxesCategory.name = updateBoxCategoryDto.name;
    newBoxesCategory.position = updateBoxCategoryDto.position;
    newBoxesCategory.type = updateBoxCategoryDto.type;

    return newBoxesCategory;
  }

  createBox(createBoxDto: CreateBoxDto) {
    const newBox = new BoxEntity();
    newBox.name = createBoxDto.name;
    newBox.type = createBoxDto.type;
    newBox.cover = createBoxDto.cover;
    newBox.price = createBoxDto.price;
    newBox.isActive = createBoxDto.isActive;
    newBox.boxCategoryId = createBoxDto.boxCategoryId;
    newBox.boxCategoryId = createBoxDto.boxCategoryId;

    return newBox;
  }
}