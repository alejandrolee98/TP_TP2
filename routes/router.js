import {Router} from "express";
import userRoutes from "./userRoutes.js";
// import rolesRoutes from "./rolesRoutes.js";
// import pedidoRoutes from "./pedidoRoutes.js";
// import proyectoRoutes from "./proyectoRoutes.js";

const routes = Router();

routes.use("/user", userRoutes);
// routes.use("/roles", rolesRoutes);
// routes.use("/pedido", pedidoRoutes);
// routes.use("/proyecto", proyectoRoutes);

export default routes;