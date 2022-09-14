
import sequelize, {UpdateOptions} from 'sequelize';
import {BaseGenericRepository} from "../base-generic-repository";
import {
    IGenericUsersRepository
} from "../../../../../core/abstracts/repositories/user-repository/generic-user-repository.abstract";
import {SteamUser} from "../../../../../core/entities/user.entity";
import {CreationAttributes} from "sequelize/types/model";

export class GenericUsersRepository<T extends sequelize.Model>
    extends BaseGenericRepository<T>
    implements IGenericUsersRepository<T>
{
    async getUserBySteamId(username: string): Promise<T> {
        const options: UpdateOptions = {
            where: {
                username
            },
        }
        return this._repository.findOne({ raw: true, ...options})
    }

    async updateRefreshToken(username: string, refreshToken: string): Promise<any> {
        const options: UpdateOptions = {
            where: {
                username
            }
        }
        return this._repository.update({ refreshToken },options)
    }
}