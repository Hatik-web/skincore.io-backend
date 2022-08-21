import { Roles } from "../../../../core/entities/user.entity";
export declare class CreateUserDto {
    readonly username: string;
    readonly password: string;
    readonly role?: Roles;
}
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
}
export {};
