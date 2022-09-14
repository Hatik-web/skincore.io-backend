import { BoxesUseCases } from "../../../../use-cases/box/boxes.use-case";
import { BoxesFactoryService } from "../../../../use-cases/box/boxes-factory.service";
import { CreateBoxDto } from "./dtos/box.dto";
import { CreateBoxResponseDto } from "./dtos/create-box-response.dto";
import { BoxEntity } from "../../../../core/entities/box.entity";
export declare class BoxController {
    private boxesUseCases;
    private boxesFactoryService;
    constructor(boxesUseCases: BoxesUseCases, boxesFactoryService: BoxesFactoryService);
    getAll(query: any): Promise<BoxEntity[]>;
    createBox(boxDto: CreateBoxDto): Promise<CreateBoxResponseDto>;
}
