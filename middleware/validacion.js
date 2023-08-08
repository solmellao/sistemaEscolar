const Jwt = require("jsonwebtoken");

function validar(req,res,next) {
    try{
        const token= req.headers.authorization.split (" ")[1]; 
        Jwt.verify(token,process.env.SECRET)
        next()
    }
    catch{
        res.status (401).json ({message: 'No autorizado'});
    }
}
module.exports = validar;

//authorization:es el encabezado  que lleva el token de la req
//si es valido deja que continue la accion que esta generando el usuario si es invalido le dice que no esta autorizado
