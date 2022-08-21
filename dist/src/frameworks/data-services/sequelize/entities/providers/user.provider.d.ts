import { User } from '../users/user.entity';
export declare const USERS_REPOSITORY_TOKEN = "USERS_REPOSITORY";
export declare const userProvider: {
    provide: string;
    useValue: typeof User;
};
