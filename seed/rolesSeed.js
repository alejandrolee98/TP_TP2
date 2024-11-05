import {Role} from "../models/index.js"

async function roleSeed(){
    await Role.bulkCreate([{nombre:"Admin"},{nombre: "User"}]);
}

export default roleSeed;