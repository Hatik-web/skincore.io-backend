import {Injectable} from '@nestjs/common';
import {IDataServices} from "../../../core/abstracts/repositories/data-services.abstract";
import {User, UserWithoutRefreshToken} from "../../../core/entities/user.entity";

@Injectable()
export class IsAuthUseCase {
  constructor(
      private readonly dataServices: IDataServices,
  ) {}

  async execute(steamId: string): Promise<UserWithoutRefreshToken> {
    const user: User = await this.dataServices.users.getUserBySteamId(steamId);
    const { refreshToken, ...info } = user;
    return info;
  }

}