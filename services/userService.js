import { User, Role } from "../models/index.js";

class UserService {
    getAllUserService = async () => {
        try {
            const data = await User.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getUserByIdService = async (id) => {
        try {
            const data = await User.findByPk(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    createUserService = async (userData) => {
        try {
            const data = await User.create(userData);
            return data;
        } catch (error) {
            throw error;
        }
    }

    updateUserService = async (userId, userData) => {
        try {
            const data = await User.update(userData,
                {
                    where: {
                        id: userId
                    }
                });

            if (data > 0) {
                return "Usuario actualizado exitosamente."
            } else {
                return "No se encontro el usuario."
            }
        } catch (error) {
            throw error;
        }
    }

    deleteUserService = async (userId) => {
        try {
            const data = await User.destroy({
                where: {
                    id: userId,
                }
            })
            if (data > 0) {
                return "Usuario eliminado exitosamente."
            } else {
                return "No se encontro el usuario."
            }
        } catch (error) {
            throw error;
        }
    }

    loginUserService = async (user) => {
        try {
            const { email, password } = user;
            const data = await User.findOne({ where: { email } });
            if (!data) throw new Error("El usuario no existe");
            const compararPass = await User.comparar(password);
            return data;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService;