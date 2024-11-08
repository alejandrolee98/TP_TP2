import {User} from "../models/index.js"

async function userSeed(){
    await User.bulkCreate([
    {
        nombre:"Alejandro",
        apellido:"Lee",
        email:"ale@gmail.com",
        password:"ale",
        direccion:"Gaona 3910",
        localidad: "caba",
        cp:1407,
        provincia:"Bs As"

    },
    {
        nombre:"Rafael",
        apellido:"Lee",
        email:"rafa@gmail.com",
        password:"rafa",
        direccion:"Gaona 3910",
        localidad: "caba",
        cp:1407,
        provincia:"Bs As"
    },
    {
        nombre:"Sabrina",
        apellido:"Choe",
        email:"sabri@gmail.com",
        password:"sabri",
        direccion:"Saraza 2434",
        localidad: "caba",
        cp:1410,
        provincia:"Bs As"
    }
]);
}

export default userSeed;