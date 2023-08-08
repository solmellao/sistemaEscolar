const Service = require('../services/estudiantesService');

async function getAll (req, res) {//getAll: obtener todos
    try {
        const estudiante = await Service.getAll();
        if (estudiante) {
            return res.status(200).json(estudiante);
        }
        else {
            return res.status(400).json({
                message: "No se encontraron los estudiantes",
            })
        }
    } catch {
        throw new Error('Ocurrio un error')
    }
}

async function getOne(req, res) { //extraigo el id del req
    try {
        const idestudiante = req.params.id
        const estudiante = await Service.getOne(idestudiante);
        if (estudiante) {
            return res.status(200).json(estudiante);
        }
        else {
            return res.status(400).json({
                message: "No se encontro el estudiante"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function create(req, res) {
    try {
        const estudiantenew = req.body;
        const estudiante = await Service.create(estudiantenew);
        if (estudiante) {
            return res.status(200).json(estudiante);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el nuevo estudiante"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function update(req, res) {
    try {
        const estudianteData = req.params.id;
        const estudianteActualizado = req.body;
        const estudiante = await Service.update(estudianteData, estudianteActualizado);
        if (estudiante) {
            return res.status(200).json({
                message: "Estudiante editado con exito!",estudiante
            })
        }
        else {
            return res.status(400).json({
                message: "No se pudo editar el nuevo estudiante"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function Delete (req,res){
    try{
        const idresponse = req.params.id;
        const estudiante = Service.Delete (idresponse);
        if (estudiante) {
            return res.status(200).json(estudiante);
        }
        else {
            return res.status(400).json({
                message: "No se pudo eliminar al estudiante"
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