import { Router } from "express";
import RolesControllers from "../controllers/RolesControllers.js";
import { validarAdmin } from "../middleware/validarAdmin.js";

const roleController = new RolesControllers();
const roleRoutes = Router();

roleRoutes.use(validarAdmin);
roleRoutes.get("/",roleController.getAllRoles);
roleRoutes.get("/:id",roleController.getRoleById);
roleRoutes.post("/",roleController.createRole);
roleRoutes.put("/:id",roleController.updateRole);
roleRoutes.delete("/:id",roleController.deleteRole);

export default roleRoutes;