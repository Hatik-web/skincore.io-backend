"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeDataServicesModule = void 0;
const common_1 = require("@nestjs/common");
const sequelize_typescript_1 = require("sequelize-typescript");
const entities_1 = require("./entities");
const data_services_abstract_1 = require("../../../core/abstracts/repositories/data-services.abstract");
const sequelize_data_services_service_1 = require("./sequelize-data-services.service");
const user_provider_1 = require("./entities/user/user.provider");
const box_category_entity_1 = require("./entities/box/box-category.entity");
const boxes_categories_provider_1 = require("./entities/box/boxes-categories.provider");
const box_provider_1 = require("./entities/box/box.provider");
const box_entity_1 = require("./entities/box/box.entity");
const drop_entity_1 = require("./entities/drop/drop.entity");
const drop_provider_1 = require("./entities/drop/drop.provider");
const box_drop_entity_1 = require("./entities/box/box-drop.entity");
const box_drop_provider_1 = require("./entities/box/box-drop.provider");
const inventory_provider_1 = require("./entities/inventory/inventory.provider");
const inventory_entity_1 = require("./entities/inventory/inventory.entity");
let SequelizeDataServicesModule = class SequelizeDataServicesModule {
};
SequelizeDataServicesModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: 'SEQUELIZE',
                useFactory: async () => {
                    const sequelize = new sequelize_typescript_1.Sequelize({
                        dialect: 'postgres',
                        host: '217.25.92.140',
                        port: 5432,
                        username: 'gen_user',
                        password: '79snx0yz96',
                        database: 'default_db',
                    });
                    sequelize.addModels([
                        entities_1.User,
                        box_category_entity_1.BoxesCategory,
                        box_entity_1.Box,
                        drop_entity_1.Drop,
                        box_drop_entity_1.BoxDropRelations,
                        inventory_entity_1.Inventory
                    ]);
                    await sequelize.sync({ force: true });
                    return sequelize;
                }
            },
            {
                provide: data_services_abstract_1.IDataServices,
                useClass: sequelize_data_services_service_1.SequelizeDataServices,
            },
            user_provider_1.userProvider,
            boxes_categories_provider_1.boxesCategoriesProvider,
            box_provider_1.boxProvider,
            drop_provider_1.dropProvider,
            box_drop_provider_1.boxDropProvider,
            inventory_provider_1.inventoryProvider
        ],
        exports: [data_services_abstract_1.IDataServices],
    })
], SequelizeDataServicesModule);
exports.SequelizeDataServicesModule = SequelizeDataServicesModule;
//# sourceMappingURL=sequelize-data-services.module.js.map