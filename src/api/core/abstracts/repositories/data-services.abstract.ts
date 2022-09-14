import {IGenericUsersRepository} from "./user-repository/generic-user-repository.abstract";
import {User} from "../../entities/user.entity";
import {IBaseGenericRepository} from "./base-generic-repositories/base-generic-repositories.abstract";
import {BoxCategoryEntity} from "../../entities/box-category.entity";
import {DropEntity} from "../../entities/drop.entity";
import {CaseDropEntity} from "../../entities/case-drop.entity";
import {BoxEntity} from "../../entities/box.entity";

export abstract class IDataServices {
  abstract users: IGenericUsersRepository<User>;
  abstract drops: IGenericUsersRepository<DropEntity>;
  abstract boxesCategory: IBaseGenericRepository<BoxCategoryEntity>;
  abstract boxDropRelation: IBaseGenericRepository<CaseDropEntity>;
  abstract boxes: IBaseGenericRepository<BoxEntity>;
}