import sequelize from 'sequelize';
import { BaseGenericRepository } from "../base-generic-repository";
import { IGenericUsersRepository } from "../../../../../core/abstracts/repositories/user-repository/generic-user-repository.abstract";
export declare class GenericUsersRepository<T extends sequelize.Model> extends BaseGenericRepository<T> implements IGenericUsersRepository<T> {
    getUserBySteamId(username: string): Promise<T>;
    updateRefreshToken(username: string, refreshToken: string): Promise<any>;
}
