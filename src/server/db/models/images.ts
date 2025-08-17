('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IImage {
  id: number
  filename: string
  folder: string
  idProduct: string
}
export default class Images extends Model<
  InferAttributes<Images>,
  InferCreationAttributes<Images>
> {
  declare id: number;
  declare filename: string
  declare folder: string
  declare idProduct: number
}
Images.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    filename: DataTypes.STRING,
    folder: DataTypes.STRING,
    idProduct: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Images',
  }
);
