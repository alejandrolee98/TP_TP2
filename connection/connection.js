import { Sequelize } from "sequelize";

const connection = new Sequelize('tp2', 'username', 'pass', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
})

export default connection;