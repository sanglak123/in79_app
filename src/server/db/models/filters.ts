('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IFilter {
  id: number
  idProduct: number
  type: string
  placeholder: string
  label: string
  col: number
  rows_input: number
  min: number
  step: number
  options: string
  errorData: string
  value: string
  textTrue: string
  textFalse: string
}
export default class Filters extends Model<
  InferAttributes<Filters>,
  InferCreationAttributes<Filters>
> {
  declare id: number;
  declare idProduct: number
  declare type: string
  declare placeholder: string
  declare label: string
  declare col: number
  declare rows_input: number
  declare min: number
  declare step: number
  declare options: string
  declare errorData: string
  declare value: string
  declare textTrue: string
  declare textFalse: string
}
Filters.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idProduct: DataTypes.INTEGER,
    type: DataTypes.STRING,
    placeholder: DataTypes.STRING,
    label: DataTypes.STRING,
    col: DataTypes.INTEGER,
    rows_input: DataTypes.INTEGER,
    min: DataTypes.INTEGER,
    step: DataTypes.INTEGER,
    options: DataTypes.TEXT,
    errorData: DataTypes.STRING,
    value: DataTypes.STRING,
    textTrue: DataTypes.STRING,
    textFalse: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Filters',
  }
);
