'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IResultOrder {
  id: number
  idOrder: number
  idProduct: number
  infomations: string
  count: number
  unit_price: number
}
export default class ResultOrders extends Model<
  InferAttributes<ResultOrders>,
  InferCreationAttributes<ResultOrders>
> {
  declare id: number;
  declare idOrder: number
  declare idProduct: number
  declare infomations: string
  declare count: number
  declare unit_price: number
}
ResultOrders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idOrder: DataTypes.INTEGER,
    idProduct: DataTypes.INTEGER,
    infomations: DataTypes.TEXT,
    count: DataTypes.INTEGER,
    unit_price: DataTypes.FLOAT,
  },
  {
    sequelize,
    modelName: 'ResultOrders',
  }
);
