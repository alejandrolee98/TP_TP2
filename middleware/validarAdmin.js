import { verifyToken } from "../utils/token.js"

export const validarAdmin = async(req, res, next)=>{
    try {
        const {token}= req.cookies;
        if(!token) throw new Error("No estas logueado.");
        const verify = verifyToken(token);
        req.user = verify.data;

        if(req.user.RoleId !== 1){
            throw new Error ("No tenes permiso de Administrador")
        }

        next();
    } catch (error) {
        res.status(403).send({
            succes: false,
            message: error.message
        })
    }
}