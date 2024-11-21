import { Router } from "express";
import ProyectoControllers from "../controllers/ProyectoControllers.js";
import { validarAdmin } from "../middleware/validarAdmin.js";

const proyectoController = new ProyectoControllers();
const proyectoRoutes = Router();

proyectoRoutes.get("/:id",proyectoController.getProyectoById);
proyectoRoutes.get("/user/:userId",proyectoController.getProyectosByUser);
proyectoRoutes.post("/",proyectoController.createProyecto);
proyectoRoutes.put("/:id",proyectoController.updateProyecto);
proyectoRoutes.delete("/:id",proyectoController.deleteProyecto);

proyectoRoutes.use(validarAdmin);
proyectoRoutes.get("/",proyectoController.getAllProyectos);

export default proyectoRoutes;