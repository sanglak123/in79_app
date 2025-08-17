('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IRating {
  id: number
  name: string
  company: string
  phone: string
  email: string
  star: number
  mess: string
  idProduct: number
  status: boolean
}
export default class Ratings extends Model<
  InferAttributes<Ratings>,
  InferCreationAttributes<Ratings>
> {
  declare id: number
  declare name: string
  declare company: string
  declare phone: string
  declare email: string
  declare star: number
  declare mess: string
  declare idProduct: number
  declare status: boolean
}
Ratings.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    company: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    star: DataTypes.INTEGER,
    mess: DataTypes.STRING,
    idProduct: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
  },
  {
    sequelize,
    modelName: 'Ratings',
  }
);
