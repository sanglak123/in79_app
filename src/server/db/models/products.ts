('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';
import { ICategory } from './categorys';

export interface IProduct {
  id: number;
  name: string
  unit: string
  decscription: string
  idCate: number
  Category: ICategory
  best: boolean
  tags: string
  link: string
  print_min: number
}
export default class Products extends Model<
  InferAttributes<Products>,
  InferCreationAttributes<Products>
> {
  declare id: number;
  declare name: string
  declare unit: string
  declare decscription: string
  declare idCate: number
  declare best: boolean
  declare tags: string
  declare link: string
  declare print_min: number
}
Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    unit: DataTypes.STRING,
    decscription: DataTypes.TEXT,
    idCate: DataTypes.INTEGER,
    best: DataTypes.BOOLEAN,
    tags: DataTypes.STRING,
    link: DataTypes.STRING,
    print_min: DataTypes.INTEGER,
  },
  {
    sequelize,
    modelName: 'Products',
  }
);
