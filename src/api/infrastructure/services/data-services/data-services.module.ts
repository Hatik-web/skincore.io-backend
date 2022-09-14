import {Module} from '@nestjs/common';
import { SequelizeDataServicesModule } from '../../../frameworks/data-services/sequelize/sequelize-data-services.module';
import {
  SequelizePaginationServicesModule
} from "../../../frameworks/data-services/sequelize/sequelize-pagination-services.module";

@Module({
  imports: [SequelizeDataServicesModule, SequelizePaginationServicesModule],
  exports: [SequelizeDataServicesModule, SequelizePaginationServicesModule],
})
export class DataServicesModule {}