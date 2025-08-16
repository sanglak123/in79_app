('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';
import { IPosition } from './positions';
export interface IUser {
  id: number;
  username: string
  password: string
  displayname: string
  email: string
  phone: string
  address: string
  idPosition: number
  Position: IPosition
}
export default class Users extends Model<
  InferAttributes<Users>,
  InferCreationAttributes<Users>
> {
  declare id: number;
  declare username: string
  declare password: string
  declare displayname: string
  declare email: string
  declare phone: string
  declare address: string
  declare idPosition: number
}
Users.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    displayname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    idPosition: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: 'Users',
  }
);