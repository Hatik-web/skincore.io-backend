import seq from "sequelize";
import {Injectable} from "@nestjs/common";

@Injectable()
export class PaginationService {
    protected defaultPage: number = 1;
    protected defaultLimit: number = 16;

    public getParams(query): {
        page: number
        limit: number
        offset: number
        count: number
        pages: number
        options: seq.FindAndCountOptions,
    } {
        const page = parseInt(query.page) || this.defaultPage;
        const limit = parseInt(query.limit) || this.defaultLimit;
        const offset = (page - 1) * limit;

        return {
            page,
            limit,
            offset,
            options: this.getOptions({limit, offset}),
            count: query.totalCount,
            pages: Math.ceil(query.totalCount / query.limit)
        }
    }

    getOptions(params): seq.FindAndCountOptions {
        const { limit, offset } = params
        const options: seq.FindAndCountOptions = {
            raw: true,
            // where: filterInputList,
            limit: limit,
            offset: offset
        };
        return options;
    }
}