import { CreateTechnologyCategoryResponseDto } from "./dtos/create-technology-category-response.dto";
import { BoxesUseCases } from "../../../../use-cases/boxes/boxes.use-case";
import { BoxesFactoryService } from "../../../../use-cases/boxes/boxes-factory.service";
import { CreateTechnologyCategoryDto } from "./dtos/technology-category.dto";
import { BoxesCategory } from "../../../../core/entities/technologies/technology-categories/technology-category.entity";
export declare class TechnologyCategoriesController {
    private technologyUseCases;
    private technologyFactoryService;
    constructor(technologyUseCases: BoxesUseCases, technologyFactoryService: BoxesFactoryService);
    getAll(query: any): Promise<BoxesCategory[]>;
    createTechnologyCategory(technologyDto: CreateTechnologyCategoryDto): Promise<CreateTechnologyCategoryResponseDto>;
}
