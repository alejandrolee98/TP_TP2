import ProyectoService from "../services/ProyectoService.js"


class ProyectoControllers {

    proyectoService = new ProyectoService();

    getAllProyectos = async (req, res) => {
        try {
            const proyectos = await this.proyectoService.getAllProyectosService();
            res.status(200).send({success:true, message: proyectos});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getProyectoById = async (req, res) => {
        try {
            const {id} = req.params;
            const proyecto = await this.proyectoService.getProyectoByIdService(id);
            res.status(200).send({success:true, message: proyecto});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getProyectosByUser = async (req, res) => {
        try {
            const {userId} = req.params;
            const proyectos = await this.proyectoService.getProyectosByUserService(userId);
            res.status(200).send({success:true, message: proyectos});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    createProyecto = async (req, res) => {
        try {
            const {descripcion, ancho, alto, grosor, tipo, material, cantidadColores, cantidad} = req.body;
            const {token} = req.cookies;
            const proyecto = await this.proyectoService.createProyectoService({descripcion, ancho, alto, grosor, tipo, material, cantidadColores, cantidad}, token);
            res.status(200).send({success:true, message: proyecto});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    updateProyecto = async (req, res) => {
        try {
            const {id} = req.params;
            const {descripcion, ancho, alto, grosor, tipo, material, cantidadColores, cantidad} = req.body;
            const proyecto = await this.proyectoService.updateProyectoService(id,{descripcion, ancho, alto, grosor, tipo, material, cantidadColores, cantidad});
            res.status(200).send({success:true, message: proyecto});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    deleteProyecto = async (req, res) => {
        try {
            const {id} = req.params;
            const proyecto = await this.proyectoService.deleteProyectoService(id);
            res.status(200).send({success:true, message: proyecto});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }
}

export default ProyectoControllers;