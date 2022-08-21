import {IBaseGenericRepository} from "../base-generic-repositories/base-generic-repositories.abstract";

export abstract class IGenericUsersRepository<T> extends IBaseGenericRepository<T> {

    abstract getUserBySteamId(steamId: string): Promise<T>
    abstract updateRefreshToken(steamId: string, refreshToken: string): Promise<T>
}