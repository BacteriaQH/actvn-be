const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_DATABASE_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    port: 5432,
    dialect: 'postgres',
    query: {
        raw: true,
    },
    timezone: '+7:00',
    logging: false,
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

const conn = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connected db');
    } catch (error) {
        console.error(error);
    }
};

module.exports = conn;
