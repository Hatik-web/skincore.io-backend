"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootControllersModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app/app.controller");
const auth_controller_1 = require("./auth/auth.controller");
const user_controller_1 = require("./user/user.controller");
const box_categories_controller_1 = require("./box/boxes-categories/box-categories.controller");
const drop_controller_1 = require("./drop/drop.controller");
const box_controller_1 = require("./box/box/box.controller");
let RootControllersModule = class RootControllersModule {
};
RootControllersModule = __decorate([
    (0, common_1.Module)({
        controllers: [
            app_controller_1.AppController,
            auth_controller_1.AuthController,
            user_controller_1.UserController,
            box_categories_controller_1.BoxCategoriesController,
            drop_controller_1.DropController,
            box_controller_1.BoxController
        ]
    })
], RootControllersModule);
exports.RootControllersModule = RootControllersModule;
//# sourceMappingURL=root-controllers.module.js.map