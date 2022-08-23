import { CreateUserDto } from "../../infrastructure/controllers/user/dtos/user.dto";
import { User } from "../../core/entities/user.entity";
export declare class UserFactoryService {
    createNewUser(createUserDto: CreateUserDto): User;
}
