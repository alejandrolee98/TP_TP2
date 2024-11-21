import { verifyToken } from "../utils/token.js"

export const validarLogin = async(req, res, next)=>{
    try {
        const {token}= req.cookies;
        if(!token) throw new Error("No estas logueado.");
        const verify = verifyToken(token);
        req.user = verify.data;

        next();
    } catch (error) {
        res.status(400).send({
            succes: false,
            message: error.message
        })
    }
}