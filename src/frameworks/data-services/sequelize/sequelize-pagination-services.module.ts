import { Module } from '@nestjs/common';
import {IPaginationService} from "../../../core/abstracts/adapters/pagination.interface";
import {PaginationService} from "./sequelize-pagination.service";


@Module({
  providers: [{
    provide: IPaginationService,
    useClass: PaginationService,
  }],
  exports: [IPaginationService]
})
export class SequelizePaginationServicesModule {}