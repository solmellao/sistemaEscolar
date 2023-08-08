const Service = require('../services/profesoresService');

async function getAll (req, res) {//getAll: obtener todos
    try {
        const profesor = await Service.getAll();
        if (profesor) {
            return res.status(200).json(profesor);
        }
        else {
            return res.status(400).json({
                message: "No se encontraron los profesores",
            })
        }
    } catch {
        throw new Error('Ocurrio un error')
    }
}

async function getOne(req, res) { //extraigo el id del req
    try {
        const idprofesor = req.params.id

        const profesor = await Service.getOne(idprofesor);
        if (profesor) {
            return res.status(200).json(profesor);
        }
        else {
            return res.status(400).json({
                message: "No se encontro al profesor"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function create(req, res) {
    try {
        const profesornew = req.body;
        const profesor = await Service.create(profesornew);
        if (profesor) {
            return res.status(200).json(profesor);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el nuevo profesor"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function update(req, res) {
    try {
        const profesorData = req.params.id;
        const profesorActualizado = req.body;
        const profesor = await Service.update(profesorData, profesorActualizado);
        if (profesor) {
            return res.status(200).json(profesor)
             //message: "Profesor agregado con exito!",

        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el nuevo profesor"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function Delete (req, res){
    try{
        const idresponse = req.params.id;
        const profesor = Service.Delete (idresponse);
        if (profesor) {
            return res.status(200).json(profesor);
        }
        else {
            return res.status(400).json({
                message: "No se pudo eliminar al profesor"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

module.exports = {
    getAll,
    getOne,
    update,
    Delete,
    create
}