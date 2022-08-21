import {Table, Column, Model, DataType} from 'sequelize-typescript';
import {Roles} from "../../../../../core/entities/user.entity";

@Table({tableName: 'users'})
export class User extends Model {
  @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
  id: number;

  @Column({type: DataType.STRING, unique: true })
  steamId: string;

  @Column({type: DataType.STRING})
  profileUrl: string

  @Column({type: DataType.STRING})
  avatar: string;

  @Column({type: DataType.STRING, allowNull: false, unique: true})
  username: string;

  @Column({type: DataType.DECIMAL(10, 2), allowNull: false, defaultValue: 0})
  balance: number;

  @Column({type: DataType.STRING})
  refreshToken: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    defaultValue: Roles.USER
  })
  role: Roles;
}