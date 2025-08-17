'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IRecruitment {
  id: number
  title: string
  benefits: string
  location: string
  deadline: Date
  file: string
  is_active: boolean
}
export default class Recruitments extends Model<
  InferAttributes<Recruitments>,
  InferCreationAttributes<Recruitments>
> {
  declare id: number;
  declare title: string
  declare benefits: string
  declare location: string
  declare deadline: Date
  declare file: string
  declare is_active: boolean
}
Recruitments.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    title: DataTypes.STRING,
    benefits: DataTypes.TEXT,
    location: DataTypes.STRING,
    deadline: DataTypes.DATE,
    file: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'Recruitments',
  }
);
