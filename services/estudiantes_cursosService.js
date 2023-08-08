const Database = require("../db");

const initModel = require ("../models/init-models");

const Models =initModel (Database);

const Estudiantes_Cursos = Models.EstudiantesCursos;

//sirve para señalar las funciones que se aplican en el model

const getAll=async ()=> { //para mostrar todos los registros de la tabla
    try{
        const estudiantesCursos= await Estudiantes_Cursos.findAll();//findAll: todo la info que tiene la tabla la trae
        return estudiantesCursos

    }catch(error){
        console.log(error);
    }
}

const getOneByCurso =async (id_curso)=> {//para encontrar uno solo= es igual al getbyID
    try{
        const estudiantesCursos= await Estudiantes_Cursos.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where:{
                id_curso:id_curso
                },
        });
        return estudiantesCursos

    }catch(error){
        console.log(error);
    }
}

const getOneByEstudiante =async (id_estudiante)=> {//para encontrar uno solo= es igual al getbyID
    try{
        const estudiantesCursos= await Estudiantes_Cursos.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where:{
                id_estudiante:id_estudiante
                },
        });
        return estudiantesCursos

    }catch(error){
        console.log(error);
    }
}


const create =async (estudiantesCursosnew)=> {//para encontrar uno solo
    try{
        const estudiantesCursos= await Estudiantes_Cursos.build(estudiantesCursosnew); //build: crear una nueva instancia del modelo
        await estudiantesCursos.save(); //guardar la instancia creado
        return estudiantesCursos

    }catch(error){
        console.log(error);
    }
}

const Delete=async (data)=> {//para encontrar uno solo
    try{
        const response= await Estudiantes_Cursos.destroy({ //destroy: para borrar definitivo
            where: data
        })
        return response //es como un booleano que indica si se elimino o no el registro

    }catch(error){
        console.log(error);
    }
}

module.exports= {
    getAll,
    getOneByCurso,
    getOneByEstudiante,
    Delete,
    create,
}