import seq from "sequelize";
export declare class PaginationService {
    protected defaultPage: number;
    protected defaultLimit: number;
    getParams(query: any): {
        page: number;
        limit: number;
        offset: number;
        count: number;
        pages: number;
        options: seq.FindAndCountOptions;
    };
    getOptions(params: any): seq.FindAndCountOptions;
}
