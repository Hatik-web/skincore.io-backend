import { Injectable } from '@nestjs/common';
import {CreateUserDto, UpdateUserDto} from "../../infrastructure/controllers/user/dtos/user.dto";
import {User} from "../../core/entities/user.entity";

@Injectable()
export class UserFactoryService {
  createNewUser(createUserDto: CreateUserDto) {
    const newUser = new User();
    newUser.username = createUserDto.username;
    // newUser.role = createUserDto.role;

    return newUser;
  }
}