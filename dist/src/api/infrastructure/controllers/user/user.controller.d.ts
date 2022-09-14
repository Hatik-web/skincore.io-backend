import { UserUseCases } from "../../../use-cases/user/user.use-case";
import { CreateUserDto } from "./dtos/user.dto";
import { CreateUserResponseDto } from "./dtos/create-user-response.dto";
import { UserFactoryService } from "../../../use-cases/user/user-factory.service";
import { IPaginationService } from "../../../core/abstracts/adapters/pagination.interface";
import { PaginationResponseDto } from "../../common/dtos/api-pagination-response.dto";
import { UserWithoutRefreshToken } from "../../../core/entities/user.entity";
export declare class UserController {
    private userUseCases;
    private userFactoryService;
    private paginationService;
    constructor(userUseCases: UserUseCases, userFactoryService: UserFactoryService, paginationService: IPaginationService);
    getAll(query: any): Promise<PaginationResponseDto>;
    getById(id: number): Promise<UserWithoutRefreshToken>;
    createUser(userDto: CreateUserDto): Promise<CreateUserResponseDto>;
}
