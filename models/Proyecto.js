import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class Proyecto extends Model{}

Proyecto.init({
   descripcion:{
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue:0
   },
   ancho:{
    type: DataTypes.DOUBLE,
    allowNull:false,
    defaultValue:0
   },
   alto:{
    type: DataTypes.DOUBLE,
    allowNull:false,
    defaultValue:0
   },
   grosor:{
    type: DataTypes.DOUBLE,
    allowNull:false,
    defaultValue:0
   },
   tipo:{
    type: DataTypes.STRING,
    allowNull: false
   },
   material:{
    type: DataTypes.STRING,
    allowNull: false
   },
   cantidadColores:{
    type: DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
   },
   cantidad:{
    type: DataTypes.INTEGER,
    allowNull:false,
    defaultValue:0
   },
   costoUnitario:{
    type: DataTypes.DOUBLE,
    defaultValue:0
   },
   costoTotal:{
    type: DataTypes.DOUBLE,
    defaultValue:0
   },
   UserId:{
      type:DataTypes.INTEGER,
   }
},
{
sequelize:connection,
modelName: "Proyecto",
});

export default Proyecto;