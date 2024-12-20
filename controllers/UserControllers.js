import UserService from "../services/UserService.js"


class UserControllers {

    userService = new UserService();

    getAllUsers = async (req, res) => {
        try {
            const users = await this.userService.getAllUserService();
            res.status(200).send({success:true, message: users});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getUserById = async (req, res) => {
        try {
            const {id} = req.params;
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
            const {nombre, apellido, email, password, direccion, localidad, cp, provincia, RoleId} = req.body;
            const user = await this.userService.createUserService({nombre, apellido, email, password, direccion, localidad, cp, provincia, RoleId});
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    updateUser = async (req, res) => {
        try {
            const {id} = req.params;
            const {nombre, apellido, email, password, direccion, localidad, cp, provincia} = req.body;
            const user = await this.userService.updateUserService(id,{nombre, apellido, email, password, direccion, localidad, cp, provincia});
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    deleteUser = async (req, res) => {
        try {
            const {id} = req.params;
            const user = await this.userService.deleteUserService(id);
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    login = async (req, res) => {
        try {
            const {email, password} = req.body;
            const user = await this.userService.loginUserService({email, password});
            res.cookie("token",user)
            res.status(200).send({success:true, message: "Usuario logueado exitosamente."});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getMe = async (req, res) => {
        try {
            const {token} = req.cookies;
            const user = await this.userService.me(token);
            res.status(200).send({success:true, message: user});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

}

export default UserControllers;