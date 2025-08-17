'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';
import { IBrand } from './brands';

export interface ICompany {
  id: number;
  email: string
  hotline: string
  zalo: string
  facebook: string
  logo: string
  address: string
  Brands?: IBrand[]
}
export default class Companys extends Model<
  InferAttributes<Companys>,
  InferCreationAttributes<Companys>
> {
  declare id: number;
  declare email: string
  declare hotline: string
  declare zalo: string
  declare facebook: string
  declare logo: string
  declare address: string
}
Companys.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    email: DataTypes.STRING,
    hotline: DataTypes.STRING,
    zalo: DataTypes.STRING,
    facebook: DataTypes.STRING,
    logo: DataTypes.STRING,
    address: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Companys',
  }
);
