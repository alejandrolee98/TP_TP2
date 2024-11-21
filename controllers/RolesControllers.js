import RolesService from "../services/RolesService.js"


class RoleControllers {

    roleService = new RolesService();

    getAllRoles = async (req, res) => {
        try {
            const roles = await this.roleService.getAllRolesService();
            res.status(200).send({success:true, message: roles});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    getRoleById = async (req, res) => {
        try {
            const {id} = req.params;
            const role = await this.roleService.getRoleByIdService(id);
            res.status(200).send({success:true, message: role});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    createRole = async (req, res) => {
        try {
            const {nombre} = req.body;
            const role = await this.roleService.createRoleService({nombre});
            res.status(200).send({success:true, message: role});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    updateRole = async (req, res) => {
        try {
            const {id} = req.params;
            const {nombre} = req.body;
            const role = await this.roleService.updateRoleService(id,{nombre});
            res.status(200).send({success:true, message: role});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }

    deleteRole = async (req, res) => {
        try {
            const {id} = req.params;
            const role = await this.roleService.deleteRoleService(id);
            res.status(200).send({success:true, message: role});
        } catch (error) {
            res.status(404).send({
                success:false,
                message:error.message,
            });
        }
    }
}

export default RoleControllers;