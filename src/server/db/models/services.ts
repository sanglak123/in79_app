'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IService {
  id: number
  name: string
  slogan: string
  banner: string
  link: string
}
export default class Serevices extends Model<
  InferAttributes<Serevices>,
  InferCreationAttributes<Serevices>
> {
  declare id: number;
  declare name: string
  declare slogan: string
  declare banner: string
  declare link: string
}
Serevices.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    slogan: DataTypes.STRING,
    banner: DataTypes.STRING,
    link: DataTypes.STRING
  },
  {
    sequelize,
    modelName: 'Serevices',
  }
);
