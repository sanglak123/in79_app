// db/config/connection.ts
import { Sequelize } from 'sequelize';
import 'dotenv/config';

const connection = {
    DB_DATABASE: process.env.DB_DATABASE,
    DB_USERNAME: process.env.DB_USERNAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    DB_HOST: process.env.DB_HOST,
    DB_DIALECT: process.env.DB_DIALECT
}

if (!connection.DB_DATABASE || !connection.DB_USERNAME) {
    throw new Error('Missing DB_DATABASE or DB_USERNAME in environment variables');
}

const sequelize = new Sequelize(connection.DB_DATABASE, connection.DB_USERNAME, connection.DB_PASSWORD, {
    host: connection.DB_HOST,   
    dialect: connection.DB_DIALECT as any,
});

export default sequelize;