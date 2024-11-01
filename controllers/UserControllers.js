import UserService from "../services/UserService.js"


class UserControllers {

    userService = new UserService();

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUserService();
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getUserById = async (req, res) => {
        try {
            const {id} = req.body;
            const user = await this.userService.getUserByIdService(id);
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    createUser = async (req, res) => {
        try {
            const {nombre, apellido, email, password, direccion, localidad, cp, provincia} = req.body;
            const user = await this.userService.createUserService(nombre, apellido, email, password, direccion, localidad, cp, provincia);
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    updateUser = (req, res) => {
        try {
            const user = this.userService.updateUserService();
            res.status(200).send(user);
        } catch (error) {
            res.status(404).send(error);
        }
    }

    deleteUser = (req, res) => {
        try {
            const user = this.userService.deleteUserService();
            res.status(200).send(user);
        } catch (error) {
            res.status(404).send(error);
        }
    }

}

export default UserControllers;