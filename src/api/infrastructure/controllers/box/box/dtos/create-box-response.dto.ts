import {BoxEntity} from "../../../../../core/entities/box.entity";


export class CreateBoxResponseDto {
  success: boolean;

  created: BoxEntity;
}