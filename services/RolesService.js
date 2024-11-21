import { Role } from "../models/index.js";

class RolesService {
    getAllRolesService = async () => {
        try {
            const data = await Role.findAll();
            return data;
        } catch (error) {
            throw error;
        }
    }

    getRoleByIdService = async (id) => {
        try {
            const data = await Role.findByPk(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    createRoleService = async (nombreRol) => {
        try {
            await Role.create(nombreRol);
            return "Nuevo rol creado.";
        } catch (error) {
            throw error;
        }
    }

    updateRoleService = async (roleId, nombreRol) => {
        try {
            const data = await Role.update(nombreRol,
                {
                    where: {
                        id: roleId
                    }
                });

            if (data > 0) {
                return "Rol actualizado exitosamente."
            } else {
                return "No se encontro el rol."
            }
        } catch (error) {
            throw error;
        }
    }

    deleteRoleService = async (roleId) => {
        try {
            const data = await Role.destroy({
                where: {
                    id: roleId,
                }
            })
            if (data > 0) {
                return "Rol eliminado exitosamente."
            } else {
                return "No se encontro el rol."
            }
        } catch (error) {
            throw error;
        }
    }
}

export default RolesService;