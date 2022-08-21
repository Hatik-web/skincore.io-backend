import { CreateBoxesCategoryDto } from "../../infrastructure/controllers/box/boxes-categories/dtos/boxes-category.dto";
import { BoxCategoryEntity } from "../../core/entities/box-category.entity";
export declare class BoxesFactoryService {
    createNewTechnologyCategory(createTechnologyCategoryDto: CreateBoxesCategoryDto): BoxCategoryEntity;
}
