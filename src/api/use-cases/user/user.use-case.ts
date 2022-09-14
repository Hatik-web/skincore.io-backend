import {Injectable} from '@nestjs/common';
import {User} from "../../core/entities/user.entity";
import {IDataServices} from "../../core/abstracts/repositories/data-services.abstract";

@Injectable()
export class UserUseCases {
  constructor(private dataServices: IDataServices) {}

    getAllUsers(options): Promise<any> {
    return this.dataServices.users.getAllAndCount(options);
  }

  getUserById(id: number): Promise<User> {
    return this.dataServices.users.get(id);
  }

  async createUser(user: User): Promise<User> {
      return await this.dataServices.users.create(user);
  }
}