'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IPayment {
  id: number
  type: boolean
  bankname: string
  bankbrand: string
  banknumber: string
  bankowner: string
  idImage: number
}
export default class Payments extends Model<
  InferAttributes<Payments>,
  InferCreationAttributes<Payments>
> {
  declare id: number;
  declare type: boolean
  declare bankname: string
  declare bankbrand: string
  declare banknumber: string
  declare bankowner: string
  declare idImage: number
}
Payments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    type: DataTypes.BOOLEAN,
    bankname: DataTypes.STRING,
    bankbrand: DataTypes.STRING,
    banknumber: DataTypes.STRING,
    bankowner: DataTypes.STRING,
    idImage: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Payments',
  }
);
