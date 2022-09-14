import {IsNotEmpty, IsString} from "class-validator";

export class PaginationQueryDto {

    @IsString({message: "Должно быть строкой"})
    @IsNotEmpty({message: "Обязательный query параметр"})
    public page: string;

    @IsString({message: "Должно быть строкой"})
    @IsNotEmpty({message: "Обязательный query параметр"})
    public limit: string;

    public totalCount: string;
}
