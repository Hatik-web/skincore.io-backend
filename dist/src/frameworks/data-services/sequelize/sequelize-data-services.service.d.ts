import { OnApplicationBootstrap } from '@nestjs/common';
import { User } from './entities';
import { IDataServices } from "../../../core/abstracts/repositories/data-services.abstract";
import { GenericUsersRepository } from "./generic-repositories/generic-users-repository/generic-users-repository";
import { BaseGenericRepository } from "./generic-repositories/base-generic-repository";
import { BoxesCategory } from "./entities/box/box-category.entity";
import { Drop } from "./entities/drop/drop.entity";
import { BoxDropRelations } from "./entities/box/box-drop.entity";
import { Box } from "./entities/box/box.entity";
export declare class SequelizeDataServices implements IDataServices, OnApplicationBootstrap {
    private usersRepository;
    private boxesCategoryRepository;
    private dropsRepository;
    private boxDropRepository;
    private boxesRepository;
    users: GenericUsersRepository<User>;
    boxesCategory: BaseGenericRepository<BoxesCategory>;
    drops: BaseGenericRepository<Drop>;
    boxDropRelation: BaseGenericRepository<BoxDropRelations>;
    boxes: BaseGenericRepository<Box>;
    constructor(usersRepository: typeof User, boxesCategoryRepository: typeof BoxesCategory, dropsRepository: typeof Drop, boxDropRepository: typeof BoxDropRelations, boxesRepository: typeof Box);
    onApplicationBootstrap(): void;
}
