import { User } from "../../core/entities/user.entity";
import { IDataServices } from "../../core/abstracts/repositories/data-services.abstract";
export declare class UserUseCases {
    private dataServices;
    constructor(dataServices: IDataServices);
    getAllUsers(options: any): Promise<any>;
    getUserById(id: number): Promise<User>;
    createUser(user: User): Promise<User>;
}
