import Role from "./Role.js";
import User from "./User.js";
import Proyecto from "./Proyecto.js"

Role.hasMany(User);
User.belongsTo(Role);
User.hasMany(Proyecto);
Proyecto.belongsTo(User);

export {Role, User, Proyecto}