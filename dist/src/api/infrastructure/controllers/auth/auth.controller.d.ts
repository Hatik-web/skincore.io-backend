import { AuthUseCase } from "../../../use-cases/auth/login/auth.use-case";
import { LogoutUseCase } from "../../../use-cases/auth/logout/logout.usecases";
import { IsAuthUseCase } from "../../../use-cases/auth/isAuth/is-auth.use-case";
import { User } from "../../../core/entities/user.entity";
import { IsAuthResponseDto } from "./dtos/isAuth-response.dto";
export declare class AuthController {
    private loginUseCase;
    private logoutUseCase;
    private isAuthUseCase;
    constructor(loginUseCase: AuthUseCase, logoutUseCase: LogoutUseCase, isAuthUseCase: IsAuthUseCase);
    login(steamId: string): string;
    successLogin(request: any, res: any): Promise<void>;
    logout(request: any): Promise<string>;
    isAuthenticated(request: any): Promise<IsAuthResponseDto>;
    refresh(request: any, currentUser: User): Promise<string>;
}
