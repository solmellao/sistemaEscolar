const Service = require('../services/usuariosService');

async function getOne(req, res) { //extraigo el id del req
    try {
        const idusuario = req.params.id

        const usuario = await Service.getOne(idusuario);
        if (usuario) {
            return res.status(200).json(usuario);
        }
        else {
            return res.status(400).json({
                message: "No se encontro al usuario"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function signup(req, res) {
    try {
        const usuarionew = req.body;
        const usuario = await Service.signup(usuarionew);
        if (usuario) {
            return res.status(200).json(usuario);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el usuario"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function login (req,res){
    try {
        const credencial = req.body;
        const token = await Service.login(credencial); //aca devuelvo el token
        if (token) {
            return res.status(200).json(token);
        }
        else {
            return res.status(400).json({
                message: "No se pudo iniciar sesion"
            })
        }
    } catch(err) {
        console.log(err)
        throw new Error("Ha ocurrido un error")
    }
}

module.exports = {
    getOne,
    signup,
    login
}