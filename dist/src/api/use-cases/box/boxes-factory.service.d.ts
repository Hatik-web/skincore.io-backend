import { CreateBoxesCategoryDto, UpdateBoxesCategoryDto } from "../../infrastructure/controllers/box/boxes-categories/dtos/boxes-category.dto";
import { BoxCategoryEntity } from "../../core/entities/box-category.entity";
import { CreateBoxDto } from "../../infrastructure/controllers/box/box/dtos/box.dto";
import { BoxEntity } from "../../core/entities/box.entity";
export declare class BoxesFactoryService {
    createCategory(createBoxCategoryDto: CreateBoxesCategoryDto): BoxCategoryEntity;
    update(updateBoxCategoryDto: UpdateBoxesCategoryDto): BoxCategoryEntity;
    createBox(createBoxDto: CreateBoxDto): BoxEntity;
}
