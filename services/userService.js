import User from "../models/User.js";

class UserService{
    getAllUserService = async () =>{
        try {
            const data = await User.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getUserByIdService = async (id) =>{
        try {
            const data = await User.findByPk(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    createUserService = async (nombre, apellido, email, password, direccion, localidad, cp, provincia) =>{
        try {
            const data = await User.create({nombre, apellido, email, password, direccion, localidad, cp, provincia})
            return data;
        } catch (error) {
            throw error;
        }
    }

    updateUserService = (id) =>{
        return "update service";
    }

    deleteUserService = (id) =>{
        return "delete service";
    }
}

export default UserService;