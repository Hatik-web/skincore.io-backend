import { CreateTechnologyCategoryDto } from "../../infrastructure/controllers/technologies/technology-categories/dtos/technology-category.dto";
import { TechnologyCategory } from "../../core/entities/technologies/technology-categories/technology-category.entity";
export declare class TechnologyFactoryService {
    createNewTechnologyCategory(createTechnologyCategoryDto: CreateTechnologyCategoryDto): TechnologyCategory;
}
