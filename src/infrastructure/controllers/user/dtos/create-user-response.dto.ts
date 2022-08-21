import {UserWithoutRefreshToken} from "../../../../core/entities/user.entity";


export class CreateUserResponseDto {
  success: boolean;

  createdUser: UserWithoutRefreshToken;
}