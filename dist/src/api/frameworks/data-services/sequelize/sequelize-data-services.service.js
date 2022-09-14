"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeDataServices = void 0;
const common_1 = require("@nestjs/common");
const user_provider_1 = require("./entities/user/user.provider");
const generic_users_repository_1 = require("./generic-repositories/generic-users-repository/generic-users-repository");
const base_generic_repository_1 = require("./generic-repositories/base-generic-repository");
const boxes_categories_provider_1 = require("./entities/box/boxes-categories.provider");
const drop_provider_1 = require("./entities/drop/drop.provider");
const box_drop_provider_1 = require("./entities/box/box-drop.provider");
const box_provider_1 = require("./entities/box/box.provider");
let SequelizeDataServices = class SequelizeDataServices {
    constructor(usersRepository, boxesCategoryRepository, dropsRepository, boxDropRepository, boxesRepository) {
        this.usersRepository = usersRepository;
        this.boxesCategoryRepository = boxesCategoryRepository;
        this.dropsRepository = dropsRepository;
        this.boxDropRepository = boxDropRepository;
        this.boxesRepository = boxesRepository;
    }
    onApplicationBootstrap() {
        this.users = new generic_users_repository_1.GenericUsersRepository(this.usersRepository);
        this.drops = new generic_users_repository_1.GenericUsersRepository(this.dropsRepository);
        this.boxesCategory = new base_generic_repository_1.BaseGenericRepository(this.boxesCategoryRepository);
        this.boxDropRelation = new base_generic_repository_1.BaseGenericRepository(this.boxDropRepository);
        this.boxes = new base_generic_repository_1.BaseGenericRepository(this.boxesRepository);
    }
};
SequelizeDataServices = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(user_provider_1.USERS_REPOSITORY_TOKEN)),
    __param(1, (0, common_1.Inject)(boxes_categories_provider_1.BOXES_CATEGORIES_REPOSITORY_TOKEN)),
    __param(2, (0, common_1.Inject)(drop_provider_1.DROPS_REPOSITORY_TOKEN)),
    __param(3, (0, common_1.Inject)(box_drop_provider_1.BOX_DROP_REPOSITORY_TOKEN)),
    __param(4, (0, common_1.Inject)(box_provider_1.BOXES_REPOSITORY_TOKEN)),
    __metadata("design:paramtypes", [Object, Object, Object, Object, Object])
], SequelizeDataServices);
exports.SequelizeDataServices = SequelizeDataServices;
//# sourceMappingURL=sequelize-data-services.service.js.map