import { Inject, Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {User} from './entities';

import { USERS_REPOSITORY_TOKEN } from './entities/user/user.provider';
import {IDataServices} from "../../../core/abstracts/repositories/data-services.abstract";
import {GenericUsersRepository} from "./generic-repositories/generic-users-repository/generic-users-repository";
import {BaseGenericRepository} from "./generic-repositories/base-generic-repository";
import {BoxesCategory} from "./entities/box/box-category.entity";
import {BOXES_CATEGORIES_REPOSITORY_TOKEN} from "./entities/box/boxes-categories.provider";
import {Drop} from "./entities/drop/drop.entity";
import {DROPS_REPOSITORY_TOKEN} from "./entities/drop/drop.provider";
import {BoxDropRelations} from "./entities/box/box-drop.entity";
import {BOX_DROP_REPOSITORY_TOKEN} from "./entities/box/box-drop.provider";
import {Box} from "./entities/box/box.entity";
import {BOXES_REPOSITORY_TOKEN} from "./entities/box/box.provider";

@Injectable()
export class SequelizeDataServices
  implements IDataServices, OnApplicationBootstrap
{
  users: GenericUsersRepository<User>;
  // @ts-ignore
  boxesCategory: BaseGenericRepository<BoxesCategory>;
  // @ts-ignore
  drops: BaseGenericRepository<Drop>;
  boxDropRelation: BaseGenericRepository<BoxDropRelations>;
  boxes: BaseGenericRepository<Box>;

  constructor(
    @Inject(USERS_REPOSITORY_TOKEN)
    private usersRepository: typeof User,
    @Inject(BOXES_CATEGORIES_REPOSITORY_TOKEN)
    private boxesCategoryRepository: typeof BoxesCategory,
    @Inject(DROPS_REPOSITORY_TOKEN)
    private dropsRepository: typeof Drop,
    @Inject(BOX_DROP_REPOSITORY_TOKEN)
    private boxDropRepository: typeof BoxDropRelations,
    @Inject(BOXES_REPOSITORY_TOKEN)
    private boxesRepository: typeof Box,
  ) {}

  onApplicationBootstrap() {
    this.users = new GenericUsersRepository<User>(this.usersRepository);
    this.drops = new GenericUsersRepository<Drop>(this.dropsRepository);
    this.boxesCategory = new BaseGenericRepository<BoxesCategory>(this.boxesCategoryRepository);
    this.boxDropRelation = new BaseGenericRepository<BoxDropRelations>(this.boxDropRepository);
    this.boxes = new BaseGenericRepository<Box>(this.boxesRepository);
  }
}