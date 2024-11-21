import { Proyecto } from "../models/index.js";
import { verifyToken } from "../utils/token.js";

class ProyectoService {
    getAllProyectosService = async () => {
        try {
            const data = await Proyecto.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getProyectoByIdService = async (id) => {
        try {
            const data = await Proyecto.findByPk(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    getProyectosByUserService = async (userId) => {
        try {
            const data = await Proyecto.findAll({
                where: {UserId: userId}
            });
            return data;
        } catch (error) {
            throw error;
        }
    }

    createProyectoService = async (proyectoData, token) => {
        
        try {
            const verify = verifyToken(token);
            const { id } = verify.data;


            const {ancho, alto, grosor, tipo, material, cantidadColores, cantidad} = proyectoData;

            const costoUnitario = calcularCostoUnitario(ancho, alto, grosor, tipo, material, cantidadColores);

            proyectoData.UserId = id;

            proyectoData.costoUnitario = costoUnitario;

            proyectoData.costoTotal = costoUnitario * cantidad;

            

            await Proyecto.create(proyectoData);
            return "Proyecto creado con exito";
        } catch (error) {
            throw error;
        }
    }

    updateProyectoService = async (proyectoId, proyectoData) => {
        try {
            const {ancho, alto, grosor, tipo, material, cantidadColores, cantidad} = proyectoData;

            const costoUnitario = calcularCostoUnitario(ancho, alto, grosor, tipo, material, cantidadColores);

            proyectoData.costoUnitario = costoUnitario;

            proyectoData.costoTotal = costoUnitario * cantidad;

            const data = await Proyecto.update(proyectoData,
                {
                    where: {
                        id: proyectoId
                    }
                });

            if (data > 0) {
                return "Proyecto actualizado exitosamente."
            } else {
                return "No se encontro el proyecto."
            }
        } catch (error) {
            throw error;
        }
    }

    deleteProyectoService = async (proyectoId) => {
        try {
            const data = await Proyecto.destroy({
                where: {
                    id: proyectoId,
                }
            })
            if (data > 0) {
                return "Proyecto eliminado exitosamente."
            } else {
                return "No se encontro el proyecto."
            }
        } catch (error) {
            throw error;
        }
    }
}

const calcularCostoUnitario = (ancho, alto, grosor, tipo, material, cantidadColores) =>{
    const baseCostos = { iman: 50, figura: 100, otro: 75 };
    const materiales = { economico: 1.0, premium: 1.2, alimentos: 1.5 };
    const base = baseCostos[tipo];
    const tamanio = ancho * alto * grosor;
    const costoPorColor = 20;

    return (base + tamanio * 0.1 + cantidadColores * costoPorColor) * materiales[material];
}

export default ProyectoService;