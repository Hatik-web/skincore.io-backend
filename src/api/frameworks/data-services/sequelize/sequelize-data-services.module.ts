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
                    host: process.env.HOST_DB,
                    port: parseInt(process.env.PORT_DB),
                    username: process.env.USER_DB,
                    password: process.env.PASSWORD_DB,
                    database: process.env.NAME_DB,
                });
                sequelize.addModels([
                    User,
                    BoxesCategory,
                    Box,
                    Drop,
                    BoxDropRelations,
                    Inventory
                ]);
                await sequelize.sync();
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


