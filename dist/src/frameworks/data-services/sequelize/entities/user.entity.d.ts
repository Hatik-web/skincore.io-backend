import { Model } from 'sequelize-typescript';
import { Roles } from "../../../../../core/entities/role/roles.constants";
export declare class User extends Model {
    id: number;
    steamId: string;
    profileUrl: string;
    avatar: string;
    username: string;
    refreshToken: string;
    role: Roles;
}
