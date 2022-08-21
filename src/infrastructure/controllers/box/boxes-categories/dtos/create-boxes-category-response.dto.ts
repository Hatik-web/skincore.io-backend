import {BoxCategoryEntity} from "../../../../../core/entities/box-category.entity";


export class CreateBoxesCategoryResponseDto {
  success: boolean;

  created: BoxCategoryEntity;
}