import { BoxesUseCases } from "../../../../use-cases/boxes/boxes.use-case";
import { BoxesFactoryService } from "../../../../use-cases/boxes/boxes-factory.service";
export declare class BoxesCategoriesController {
    private technologyUseCases;
    private technologyFactoryService;
    constructor(technologyUseCases: BoxesUseCases, technologyFactoryService: BoxesFactoryService);
}
