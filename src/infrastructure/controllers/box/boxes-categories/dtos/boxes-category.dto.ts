import {IsString, IsNotEmpty, Length, IsNumber} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';
import {TypeBox} from "../../../../../core/entities/box-category.entity";

export class CreateBoxesCategoryDto {
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  @Length(4, 32, {message: 'Не меньше 4 и не больше 32'})
  readonly name: string;

  @IsNumber({},{message: 'Должно быть числом'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly position: number;

  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly type: TypeBox;
}

export class UpdateBoxesCategoryDto extends PartialType(CreateBoxesCategoryDto) {}