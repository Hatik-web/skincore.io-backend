import { User } from './user.entity';

export const USERS_REPOSITORY_TOKEN = 'USERS_REPOSITORY'

export const userProvider = {
    provide: USERS_REPOSITORY_TOKEN,
    useValue: User,
  }