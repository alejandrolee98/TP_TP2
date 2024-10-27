import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";

class User extends Model{}

User.init({
   nombre:{
    type: DataTypes.STRING,
    allowNull: false
   },
   apellido:{
    type: DataTypes.STRING,
    allowNull:false
   },
   email:{
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
         isEmail:true,
      }
   },
   password:{
      type: DataTypes.STRING,
      allowNull: false
   },
   direccion:{
      type:DataTypes.STRING,
      allowNull:false
   },
   localidad:{
      type:DataTypes.STRING,
      allowNull: false
   },
   cp:{
      type: DataTypes.INTEGER,
      allowNull: false
   },
   provincia:{
      type: DataTypes.STRING,
      allowNull: false
   }
},
{
sequelize:connection,
modelName: "User",
})

export default User;