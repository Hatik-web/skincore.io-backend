import {Module} from '@nestjs/common';
import {Sequelize} from "sequelize-typescript";
import { User} from "./entities";
import {IDataServices} from "../../../core/abstracts/repositories/data-services.abstract";
import {SequelizeDataServices} from "./sequelize-data-services.service";
import {userProvider} from "./entities/user/user.provider";
import {BoxesCategory} from "./entities/box/box-category.entity";
import {boxesCategoriesProvider} from "./entities/box/boxes-categories.provider";
import {boxProvider} from "./entities/box/box.provider";
import {Box} from "./entities/box/box.entity";
import {Drop} from "./entities/drop/drop.entity";
import {dropProvider} from "./entities/drop/drop.provider";
import {BoxDropRelations} from "./entities/box/box-drop.entity";
import {boxDropProvider} from "./entities/box/box-drop.provider";
import {inventoryProvider} from "./entities/inventory/inventory.provider";
import {Inventory} from "./entities/inventory/inventory.entity";

@Module({
    providers: [
        {
            provide: 'SEQUELIZE',
            useFactory: async () => {
                const sequelize = new Sequelize({
                    dialect: 'postgres',
                    host: '217.25.92.140',
                    port: 5432,
                    username: 'gen_user',
                    password: '79snx0yz96',
                    database: 'default_db',
                });
                sequelize.addModels([
                    User,
                    BoxesCategory,
                    Box,
                    Drop,
                    BoxDropRelations,
                    Inventory
                ]);
                await sequelize.sync({ force: true });
                return sequelize;
            }
        },
        {
            provide: IDataServices,
            useClass: SequelizeDataServices,
        },
        userProvider,
        boxesCategoriesProvider,
        boxProvider,
        dropProvider,
        boxDropProvider,
        inventoryProvider
    ],
    exports: [IDataServices],
})
export class SequelizeDataServicesModule {}


