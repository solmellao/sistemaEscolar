const Service = require('../services/estudiantes_cursosService');

async function getAll(req, res) {//getAll: obtener todos
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

async function getOneByCurso(req, res) { //extraigo el id del req
    try {
        const idcurso = req.params.id

        const estudiantecurso = await Service.getOneByCurso(idcurso);
        if (estudiantecurso) {
            return res.status(200).json(estudiantecurso);
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

async function getOneByEstudiante(req, res) { //extraigo el id del req
    try {
        const idestudiante = req.params.id

        const estudiantecurso = await Service.getOneByEstudiante(idestudiante);
        if (estudiantecurso) {
            return res.status(200).json(estudiantecurso);
        }
        else {
            return res.status(400).json({
                message: "No se encontro al estudiante"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

async function create(req, res) {
    try {
        const estudiantecursonew = req.body;
        const estudiantecurso = await Service.create(estudiantecursonew);
        if (estudiantecurso) {
            return res.status(200).json(estudiantecurso);
        }
        else {
            return res.status(400).json({
                message: "No se pudo generar la nueva conexion"
            })
        }
    } catch(err) {
        throw new Error("Ha ocurrido un error")
    }
}

async function Delete (req,res){
    try{
        const id_estudiante = req.params.idestudiante;
        const id_curso = req.params.idcurso;
        const estudiantecurso = Service.Delete ({
            id_curso,
            id_estudiante,
        });
        if (estudiantecurso) {
            return res.status(200).json(estudiantecurso);
        }
        else {
            return res.status(400).json({
                message: "No se pudo eliminar al estudiante del curso"
            })
        }
    } catch {
        throw new Error("Ha ocurrido un error")
    }
}

module.exports = {
    getAll,
    getOneByCurso,
    getOneByEstudiante,
    Delete,
    create
}