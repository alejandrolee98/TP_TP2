import UserService from "../services/UserService.js"


class UserControllers {

    userService = new UserService();

    getAllUsers = (req, res) => {
        try {
            const users = this.userService.getAllUserService();
            res.status(200).send(users);
        } catch (error) {
            res.status(404).throw(error);
        }
    }

    getUserById = (req, res) => {
        try {
            const user = this.userService.getUserByIdService();
            res.status(200).send(user);
        } catch (error) {
            res.status(404).throw(error);
        }
    }

    createUser = (req, res) => {
        try {
            const user = this.userService.getUserByIdService();
            res.status(201).send(user);
        } catch (error) {
            res.status(404).throw(error);
        }
    }

    updateUser = (req, res) => {
        try {
            const user = this.userService.getUserByIdService();
            res.status(200).send(user);
        } catch (error) {
            res.status(404).throw(error);
        }
    }

    deleteUser = (req, res) => {
        try {
            const user = this.userService.getUserByIdService();
            res.status(200).send(user);
        } catch (error) {
            res.status(404).throw(error);
        }
    }

}

export default UserControllers;