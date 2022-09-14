"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootUseCasesModule = void 0;
const common_1 = require("@nestjs/common");
const auth_use_cases_module_1 = require("./auth/login/auth-use-cases.module");
const user_use_cases_module_1 = require("./user/user-use-cases.module");
const logout_use_cases_module_1 = require("./auth/logout/logout-use-cases.module");
const is_auth_use_cases_module_1 = require("./auth/isAuth/is-auth-use-cases.module");
const boxes_use_cases_module_1 = require("./box/boxes-use-cases.module");
const parse_drop_use_cases_module_1 = require("./drop/parse-drop-use-cases.module");
const drop_use_cases_module_1 = require("./drop/drop-use-cases.module");
let RootUseCasesModule = class RootUseCasesModule {
};
RootUseCasesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_use_cases_module_1.AuthUseCasesModule,
            user_use_cases_module_1.UserUseCasesModule,
            logout_use_cases_module_1.LogoutUseCasesModule,
            is_auth_use_cases_module_1.IsAuthUseCasesModule,
            boxes_use_cases_module_1.BoxesUseCasesModule,
            parse_drop_use_cases_module_1.ParseDropUseCasesModule,
            drop_use_cases_module_1.DropUseCasesModule
        ],
        exports: [
            auth_use_cases_module_1.AuthUseCasesModule,
            user_use_cases_module_1.UserUseCasesModule,
            logout_use_cases_module_1.LogoutUseCasesModule,
            is_auth_use_cases_module_1.IsAuthUseCasesModule,
            boxes_use_cases_module_1.BoxesUseCasesModule,
            parse_drop_use_cases_module_1.ParseDropUseCasesModule,
            drop_use_cases_module_1.DropUseCasesModule
        ],
    })
], RootUseCasesModule);
exports.RootUseCasesModule = RootUseCasesModule;
//# sourceMappingURL=root-use-cases.module.js.map