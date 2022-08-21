import {IsString, IsNotEmpty, Length, IsNumber, IsOptional} from 'class-validator';

export class GetAllDropsQueryDto {
  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly min: string;

  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly max: string;

  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly category: string;

  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly wear: string;

  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly rarity: string;

  @IsOptional()
  @IsString({message: 'Должно быть строкой'})
  @IsNotEmpty({message: 'Не может быть пустым'})
  readonly weapon: string;
}