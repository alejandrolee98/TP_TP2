import { Router } from "express";
import UserControllers from "../controllers/UserControllers.js";
import { validarLogin } from "../middleware/validarLogin.js";
import { validarAdmin } from "../middleware/validarAdmin.js";

const userController = new UserControllers();
const userRoutes = Router();

userRoutes.post("/",userController.createUser);
userRoutes.post("/login", userController.login);
userRoutes.get("/me",userController.getMe);

userRoutes.use(validarLogin);
userRoutes.get("/:id",userController.getUserById);
userRoutes.put("/:id",userController.updateUser);
userRoutes.delete("/:id",userController.deleteUser);

userRoutes.use(validarAdmin);
userRoutes.get("/",userController.getAllUsers);

export default userRoutes;