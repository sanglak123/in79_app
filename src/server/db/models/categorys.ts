'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface ICategory {
  id: number
  name: string
  link: string 
}
export default class Categorys extends Model<
  InferAttributes<Categorys>,
  InferCreationAttributes<Categorys>
> {
  declare id: number;
  declare name: string
  declare link: string
}
Categorys.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    link: DataTypes.STRING,    
  },
  {
    sequelize,
    modelName: 'Categorys',
  }
);
