import { UserWithoutRefreshToken } from "../../../../core/entities/user.entity";
export declare class IsAuthResponseDto {
    success: boolean;
    user: UserWithoutRefreshToken;
}
