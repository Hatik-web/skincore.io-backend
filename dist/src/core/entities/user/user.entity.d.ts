import { Roles } from "../role/roles.constants";
export declare class User {
    id: number;
    steamId: string;
    avatar: string;
    username: string;
    refreshToken: string;
    role: Roles;
}
export interface UserWithoutRefreshToken extends Omit<User, 'refreshToken'> {
}
export declare class SteamUser {
    steamid: string;
    communityvisibilitystate: number;
    profilestate: number;
    personaname: string;
    profileurl: string;
    avatar: string;
    avatarmedium: string;
    avatarfull: string;
    avatarhash: string;
    personastate: number;
    primaryclanid: string;
    timecreated: number;
    personastateflags: number;
}
