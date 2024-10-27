import { Sequelize } from "sequelize";

const connection = new Sequelize("tp2", "root", "admin", {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

try {
    await connection.authenticate();
    console.log("La conexion ha sido exitosa");
} catch (error) {
    console.error("Error al conectarse a la base de datos.", error)
}

export default connection;