import { IBcryptService } from "../../../core/abstracts/adapters/bcrypt.interface";
export declare class BcryptService implements IBcryptService {
    rounds: number;
    hash(hashString: string): Promise<string>;
    compare(password: string, hashPassword: string): Promise<boolean>;
}