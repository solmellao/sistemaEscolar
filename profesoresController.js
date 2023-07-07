const profesoresModel = require('./../models/profesoresModel');

exports.obtenerProfesores = async (req, res) => {   
    try {
        const profesores = await profesoresModel.obtenerProfesores();
        res.status(200).json({
            success: true,
            data: profesores
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.getProfesoresById = async (req, res) => {
    const idProfesores = req.params.id;
    try {
        const profesor = await profesoresModel.getProfesoresById(idProfesores);

        if (profesor.length < 1) {
            res.status(404).json({
                success: false,
                msg: `no se encuentra el: ${idProfesores}`
            })
        }
        res.status(200).json({
            success: true,
            profesor
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.agregarProfesores = async (req, res) => {
    const profesores = req.body;
    try {
        const profesoresAgregados = await profesoresModel.agregarProfesores(profesores);
        res.status(200).json({
            success: true,
            message: "¡Profesor agregado con exito!",
            profesoresAgregados
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}


exports.actualizarProfesores = async (req, res) => {
    const profesorData = req.params.id;
    const profesorActualizado = req.body;

    const profesor = {
      profesorData,
        ...profesorActualizado
    }
    console.log(profesor)
    try {
        const listaActualizada = await profesoresModel.actualizarProfesores(profesor);
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "¡Datos no actualizados!"
            })
        }
        res.status(200).json({
            success: true,
            message: "¡La lista se actualizado de forma correcta!",
            estudiante
        })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'

        })
    }
}
exports.eliminarProfesoresById = async (req, res) => {

    const idProfesor = req.params.id;
    try {
        const profesor = await profesoresModel.eliminarProfesoresById(idProfesor);

        if (profesor.length < 1) {
            res.status(404).json({
                success: false,
                mgs: `No existe profesor con el id: ${idProfesor}`
            })
        }res.status(200).json({
            success: true,
            msg: "El profesor fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el usuario'
        })
    }
}  