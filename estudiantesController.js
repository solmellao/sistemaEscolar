const estudiantesModel = require('./../models/estudiantesModel')

exports.obtenerEstudiantes = async (req, res) => {   
    try {
        const estudiantes = await estudiantesModel.obtenerEstudiantes();
        res.status(200).json({
            success: true,
            data: estudiantes
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.getEstudianteById = async (req, res) => {
    const idEstudiante = req.params.id;
    try {
        const estudiante = await estudiantesModel.getEstudianteById(idEstudiante);

        if (estudiante.length < 1) {
            res.status(404).json({
                success: false,
                msg: `no se encuentra el: ${idEstudiante}`
            })
        }
        res.status(200).json({
            success: true,
            estudiante
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.agregarEstudiante = async (req, res) => {
    const estudiante = req.body;
    try {
        const estudianteAgregados = await estudiantesModel.agregarEstudiante(estudiante);
        res.status(200).json({
            success: true,
            message: "¡Estudiante agregado con exito!",
            estudianteAgregados
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}


exports.actualizarEstudiante = async (req, res) => {
    const estudianteData = req.params.id;
    const estudianteActualizado = req.body;

    const estudiante = {
      estudianteData,
        ...estudianteActualizado
    }
    console.log(estudiante)
    try {
        const listaActualizada = await estudiantesModel.actualizarEstudiante(estudiante);
        if (listaActualizada < 1) {
            res.status(404).json({
                success: false,
                message: "¡Datos no actualizados!"
            })
        }
        res.status(200).json({
            success: true,
            message: "¡Lista actualizada!",
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
exports.eliminarEstudianteById = async (req, res) => {

    const idEstudiante = req.params.id;
    try {
        const estudiante = await estudiantesModel.eliminarEstudianteById(idEstudiante);

        if (estudiante.length < 1) {
            res.status(404).json({
                success: false,
                mgs: `No existe usuario con el id: ${idEstudiante}`
            })
        }res.status(200).json({
            success: true,
            msg: "El usuario fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar el usuario'
        })
    }
}  
