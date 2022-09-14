import { TypeBox } from "../../../../../core/entities/box-category.entity";
export declare class CreateBoxDto {
    readonly name: string;
    readonly cover: string;
    readonly price: number;
    readonly isActive: boolean;
    readonly type: TypeBox;
    readonly boxCategoryId: number;
    readonly dropIds: number[];
}
declare const UpdateBoxDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBoxDto>>;
export declare class UpdateBoxDto extends UpdateBoxDto_base {
}
export {};
