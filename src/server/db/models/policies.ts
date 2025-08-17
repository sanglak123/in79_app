'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IPolicies {
  id: number
  index: number
  name: string
  mess: string
}
export default class Policies extends Model<
  InferAttributes<Policies>,
  InferCreationAttributes<Policies>
> {
  declare id: number;
  declare index: number
  declare name: string
  declare mess: string
}
Policies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    index: DataTypes.INTEGER,
    name: DataTypes.STRING,
    mess: DataTypes.TEXT
  },
  {
    sequelize,
    modelName: 'Policies',
  }
);
