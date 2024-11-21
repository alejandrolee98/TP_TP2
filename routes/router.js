import {Router} from "express";
import userRoutes from "./userRoutes.js";
import rolesRoutes from "./rolesRoutes.js";
import proyectoRoutes from "./proyectoRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
routes.use("/roles", rolesRoutes);
routes.use("/proyecto", proyectoRoutes);

export default routes;