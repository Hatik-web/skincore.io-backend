import { IDataServices } from "../../../core/abstracts/repositories/data-services.abstract";
import { UserWithoutRefreshToken } from "../../../core/entities/user.entity";
export declare class IsAuthUseCase {
    private readonly dataServices;
    constructor(dataServices: IDataServices);
    execute(steamId: string): Promise<UserWithoutRefreshToken>;
}
