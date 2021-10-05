require("dotenv").config();

const {SEQUELIZE_DATABASE, SEQUELIZE_USERNAME, SEQUELIZE_PASSWORD, SEQUELIZE_HOST, SEQUELIZE_DIALECT} = require("../config/index");

module.exports = {
    PORT: process.env.PORT,
    sequelize_database: SEQUELIZE_DATABASE,
    sequelize_username: SEQUELIZE_USERNAME,
    sequelize_password: SEQUELIZE_PASSWORD,
    sequelize_host: SEQUELIZE_HOST,
    sequelize_dialect: SEQUELIZE_DIALECT
}