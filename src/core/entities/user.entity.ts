
export enum Roles {
  USER="USER"
}

export class User {
  declare id: number;
  declare steamId: string;
  declare avatar: string;
  declare username: string;
  declare refreshToken: string;
  declare balance: number;
  declare role: Roles;
}

export interface UserWithoutRefreshToken extends Omit<User, 'refreshToken'> {}

export class SteamUser {
  steamid: string
  communityvisibilitystate: number
  profilestate: number
  personaname: string
  profileurl: string
  avatar: string
  avatarmedium: string
  avatarfull: string
  avatarhash: string
  personastate: number
  primaryclanid: string
  timecreated: number
  personastateflags: number
}