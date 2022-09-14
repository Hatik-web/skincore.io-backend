import { ParseDropUseCases } from "../../../use-cases/drop/parse-drop.use-case";
import { PaginationResponseDto } from "../../common/dtos/api-pagination-response.dto";
import { IPaginationService } from "../../../core/abstracts/adapters/pagination.interface";
import { DropUseCases } from "../../../use-cases/drop/drop.use-case";
import { GetAllDropsQueryDto } from "./dtos/getAll-drops.qyery.dto";
export declare class DropController {
    private parseDropUseCases;
    private dropUseCases;
    private paginationService;
    constructor(parseDropUseCases: ParseDropUseCases, dropUseCases: DropUseCases, paginationService: IPaginationService);
    parseAndSaveDrops(): Promise<any[]>;
    getAll(query: GetAllDropsQueryDto): Promise<PaginationResponseDto>;
}
