import { DataTypes, Model } from "sequelize";
import connection from "../connection/connection.js";
import bcrypt from "bcrypt";

class User extends Model{

   comparar = async(password)=>{
      const compararPass = await bcrypt.compare(password, this.password);
      return compararPass;
   }

}

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
   },

   RoleId:{
      type:DataTypes.INTEGER,
      defaultValue:2,
   }
},
{
sequelize:connection,
modelName: "User",
});

User.beforeCreate(async (user)=>{
   const salt = await bcrypt.genSalt(10);
   const hash = await bcrypt.hash(user.password, salt);
   user.password = hash;
});

export default User;