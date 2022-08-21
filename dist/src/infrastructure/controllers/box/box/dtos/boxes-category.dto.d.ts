import { TypeBox } from "../../../../../core/entities/box-category.entity";
export declare class CreateBoxesCategoryDto {
    readonly name: string;
    readonly position: number;
    readonly type: TypeBox;
}
declare const UpdateBoxesCategoryDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateBoxesCategoryDto>>;
export declare class UpdateBoxesCategoryDto extends UpdateBoxesCategoryDto_base {
}
export {};
