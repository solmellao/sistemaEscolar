const Service = require('../services/cursosService');

async function getAll (req, res) { //getAll: obtener todos
    try {
        const cursos = await Service.getAll();
        if (cursos) {
            return res.status(200).json(cursos);
        }
        else {
            return res.status(400).json({
                message: "No se encontraron los cursos",
            })
        }
    } catch {
        throw new Error('Ocurrio un error')
    }
}

async function getOne(req, res) { //extraigo el id del req
    try {
        const idcurso = req.params.id

        const cursos = await Service.getOne(idcurso);
        if (cursos) {
            return res.status(200).json(cursos);
        }
        else {
            return res.status(400).json({
                message: "No se encontro el curso"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function create(req, res) {
    try {
        const cursonew = req.body;
        const cursos = await Service.create(cursonew);
        if (cursos) {
            return res.status(200).json(cursos);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el nuevo curso"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function update(req, res) {
    try {
        const cursosData = req.params.id;
        const cursoActualizado = req.body;
        const cursos = await Service.update(cursosData, cursoActualizado);
        if (cursos) {
            return res.status(200).json(cursos);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar el nuevo curso"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function Delete (req,res){
    try{
        const idresponse = req.params.id;
        const cursos = Service.Delete (idresponse);
        if (cursos) {
            return res.status(200).json(cursos);
        }
        else {
            return res.status(400).json({
                message: "No se pudo eliminar el curso"
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