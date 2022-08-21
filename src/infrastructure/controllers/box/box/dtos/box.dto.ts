import {IsString, IsNotEmpty, Length, IsNumber, IsBoolean} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import {TypeBox} from "../../../../../core/entities/box-category.entity";

export class CreateBoxDto {
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  @Length(4, 32, {message: 'Не меньше 4 и не больше 32'})
  readonly name: string;

  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly cover: string;

  @IsNumber({},{message: 'Должно быть числом'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly price: number;

  @IsBoolean({message: 'Должно быть boolean'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly isActive: boolean;

  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly type: TypeBox;

  @IsNumber({},{message: 'Должно быть числом'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly boxCategoryId: number;

  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly dropIds: number[]
}

export class UpdateBoxDto extends PartialType(CreateBoxDto) {}