('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IBrand {
  id: number
  name: string
  email: string
  hotline: string
  address: string
  zalo: string
  facebook: string
  idCompany: number
}
export default class Brands extends Model<
  InferAttributes<Brands>,
  InferCreationAttributes<Brands>
> {
  declare id: number;
  declare name: string
  declare email: string
  declare hotline: string
  declare address: string
  declare zalo: string
  declare facebook: string
  declare idCompany: number
}
Brands.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    hotline: DataTypes.STRING,
    address: DataTypes.STRING,
    zalo: DataTypes.STRING,
    facebook: DataTypes.STRING,
    idCompany: DataTypes.INTEGER
  },
  {
    sequelize,
    modelName: 'Brands',
  }
);
