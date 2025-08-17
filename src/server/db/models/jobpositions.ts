('use strict');
import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  DataTypes,
} from 'sequelize';
import sequelize from '../config/connection';

export interface IJob {
  id: number
  idRecruitment: number
  name: string
  qty: number
  type: string
  salary_from: number
  salary_to: number
  job_description: string
  job_requirements: string
}
export default class JobPositions extends Model<
  InferAttributes<JobPositions>,
  InferCreationAttributes<JobPositions>
> {
  declare id: number;
  declare idRecruitment: number
  declare name: string
  declare qty: number
  declare type: string
  declare salary_from: number
  declare salary_to: number
  declare job_description: string
  declare job_requirements: string
}
JobPositions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    idRecruitment: DataTypes.INTEGER,
    name: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    type: DataTypes.STRING,
    salary_from: DataTypes.FLOAT,
    salary_to: DataTypes.FLOAT,
    job_description: DataTypes.TEXT,
    job_requirements: DataTypes.TEXT,
  },
  {
    sequelize,
    modelName: 'JobPositions',
  }
);
