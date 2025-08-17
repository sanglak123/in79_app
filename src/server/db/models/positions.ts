'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IPosition {
  id: number
  name: string
}
export default class Positions extends Model<
  InferAttributes<Positions>,
  InferCreationAttributes<Positions>
> {
  declare id: number;
  declare name: string;
}
Positions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Positions',
  }
);
