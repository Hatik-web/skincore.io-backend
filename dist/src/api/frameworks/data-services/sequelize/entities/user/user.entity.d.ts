import { Model } from 'sequelize-typescript';
import { Roles } from "../../../../../core/entities/user.entity";
export declare class User extends Model {
    id: number;
    steamId: string;
    profileUrl: string;
    avatar: string;
    username: string;
    balance: number;
    refreshToken: string;
    role: Roles;
}
