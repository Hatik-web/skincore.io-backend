import { CreateBoxesCategoryResponseDto } from "./dtos/create-boxes-category-response.dto";
import { BoxesUseCases } from "../../../../use-cases/box/boxes.use-case";
import { BoxesFactoryService } from "../../../../use-cases/box/boxes-factory.service";
import { CreateBoxesCategoryDto, UpdateBoxesCategoryDto } from "./dtos/boxes-category.dto";
import { BoxCategoryEntity } from "../../../../core/entities/box-category.entity";
export declare class BoxCategoriesController {
    private boxesUseCases;
    private boxesFactoryService;
    constructor(boxesUseCases: BoxesUseCases, boxesFactoryService: BoxesFactoryService);
    getAll(query: any): Promise<BoxCategoryEntity[]>;
    createBoxCategory(boxDto: CreateBoxesCategoryDto): Promise<CreateBoxesCategoryResponseDto>;
    updateBoxCategory(id: number, updateDto: UpdateBoxesCategoryDto): Promise<BoxCategoryEntity>;
}
