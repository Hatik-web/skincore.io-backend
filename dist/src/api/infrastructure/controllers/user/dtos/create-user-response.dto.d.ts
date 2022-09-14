import { UserWithoutRefreshToken } from "../../../../core/entities/user.entity";
export declare class CreateUserResponseDto {
    success: boolean;
    createdUser: UserWithoutRefreshToken;
}
