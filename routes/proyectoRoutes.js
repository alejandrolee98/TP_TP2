import { Router } from "express";
import ProyectoControllers from "../controllers/ProyectoControllers.js";

const proyectoController = new ProyectoControllers();
const proyectoRoutes = Router();

proyectoRoutes.get("/",proyectoController.getAllProyectos);
proyectoRoutes.get("/:id",proyectoController.getProyectoById);
proyectoRoutes.get("/user/:userId",proyectoController.getProyectosByUser);
proyectoRoutes.post("/",proyectoController.createProyecto);
proyectoRoutes.put("/:id",proyectoController.updateProyecto);
proyectoRoutes.delete("/:id",proyectoController.deleteProyecto);

export default proyectoRoutes;