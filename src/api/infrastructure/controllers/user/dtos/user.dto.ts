import {IsString, IsNotEmpty, IsEmail, Length} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import {Roles} from "../../../../core/entities/user.entity";

export class CreateUserDto {
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  @Length(4, 32, {message: 'Не меньше 4 и не больше 32'})
  readonly username: string;

  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  @Length(4, 16, {message: 'Не меньше 4 и не больше 16'})
  readonly password: string;

  readonly role?: Roles;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}