import {UserWithoutRefreshToken} from "../../../../core/entities/user.entity";


export class IsAuthResponseDto {

  success: boolean

  user: UserWithoutRefreshToken;
}