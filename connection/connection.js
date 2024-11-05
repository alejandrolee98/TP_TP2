import { Sequelize } from "sequelize";
import { DB_DIALECT, DB_HOST, DB_NAME, DB_PASS, DB_USER, DB_PORT } from "../config/config.js";

const connection = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: DB_PORT
});

try {
    await connection.authenticate();
    console.log("La conexion ha sido exitosa");
} catch (error) {
    console.error("Error al conectarse a la base de datos.", error)
}

export default connection;