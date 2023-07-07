const cursosModel = require('../models/cursosModel');
exports.obtenerCursos = async (req, res) => {   
    try {
        const cursos = await cursosModel.obtenerCursos();
        res.status(200).json({
            success: true,
            data: cursos
        })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.getCursosById = async (req, res) => {
    const idCursos = req.params.id;
    try {
        const cursos = await cursosModel.getCursosById(idCursos);

        if (cursos.length < 1) {
            res.status(404).json({
                success: false,
                msg: `no se encuentra el: ${idCursos}`
            })
        }
        res.status(200).json({
            success: true,
            cursos
        })
    }catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}

exports.agregarCursos = async (req, res) => {
    const cursosData = req.body;
    try {
        const cursosAgregado = await cursosModel.agregarCursos(cursosData);
        res.status(200).json({
            success: true,
            message: "Curso agregado con exito!",
            cursosAgregado
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'
        })
    }
}


exports.actualizarCursos = async (req, res) => {
    const cursosData = req.params.id;
    const cursoActualizado = req.body;

    const curso = {
      cursosData,
        ...cursoActualizado
    }
    console.log(curso)
    try {
        const listaActualizada = await cursosModel.actualizarCursos(curso);
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
    }catch (error) {
        res.status(500).json({
            success: false,
            message: 'Hubo un error al obtener los datos'

        })
    }
}
exports.eliminarCursosById = async (req, res) => {

    const idCurso = req.params.id;
    try {
        const eliminarCurso = await cursosModel.eliminarCursosById(idCurso);

        if (eliminarCurso.length < 1) {
            res.status(404).json({
                success: false,
                mgs: `No existe curso con el id: ${idCurso}`
            })
        }res.status(200).json({
            success: true,
            msg: "El curso fue eliminado con exito"
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Hubo un error al eliminar al curso'
        })
    }
}  


exports.obtenerCursosDelEstudiante = async (req, res) => {
  const idCursodelEstudiante = req.params.id;
  try {
      const cursoDelEstudiante= await cursosModel.obtenerCursosDelEstudiante(idCursodelEstudiante);

      if (cursoDelEstudiante.length < 1) {
          res.status(404).json({
              success: false,
              msg: `No se encuentra dentro del curso: ${idEstudiante}`
          })
      }res.status(200).json({
          success: true,
          cursoDelEstudiante
      })
  }catch (error) {
      console.error(error);
      res.status(500).json({
          success: false,
          message: 'Hubo un error al obtener los datos'
      })
  }
}