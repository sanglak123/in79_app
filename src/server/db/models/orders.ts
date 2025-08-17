'use strict'
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IOrder {
  id: number
  code: string
  fullname: string
  email: string
  phone: string
  note: string
  status: number // 0: gửi lên || 1: gửi báo giá || 2:Đặt cọc || 3: sản xuất || 4:Hoàn thành || 5:Hủy
  vat: number
  total: number
  deposit: number
  totalDay: number
  filename: string
  address: string
  cause: string
  userCheck: string
}
export default class Orders extends Model<
  InferAttributes<Orders>,
  InferCreationAttributes<Orders>
> {
  declare id: number;
  declare code: string
  declare fullname: string
  declare email: string
  declare phone: string
  declare note: string
  declare status: number // 0: gửi lên || 1: gửi báo giá || 2:Đặt cọc || 3: sản xuất || 4:Hoàn thành || 5:Hủy
  declare vat: number
  declare total: number
  declare deposit: number
  declare totalDay: number
  declare filename: string
  declare address: string
  declare cause: string
  declare userCheck: string
}
Orders.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    code: DataTypes.STRING,
    fullname: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    note: DataTypes.STRING,
    status: DataTypes.INTEGER, // 0: gửi lên || 1: gửi báo giá || 2:Đặt cọc || 3: sản xuất || 4:Hoàn thành || 5:Hủy
    vat: DataTypes.INTEGER,
    total: DataTypes.FLOAT,
    deposit: DataTypes.FLOAT,
    totalDay: DataTypes.INTEGER,
    filename: DataTypes.STRING,
    address: DataTypes.STRING,
    cause: DataTypes.TEXT,
    userCheck: DataTypes.STRING,
  },
  {
    sequelize,
    modelName: 'Orders',
  }
);
