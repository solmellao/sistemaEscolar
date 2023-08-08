const Database = require("../db");

const initModel = require ("../models/init-models");

const Models =initModel (Database);

const Estudiantes = Models.Estudiantes;

//sirve para señalar las funciones que se aplican en el model

const getAll=async ()=> { //para mostrar todos los registros de la tabla
    try{
        const estudiantes= await Estudiantes.findAll({//findAll: todo la info que tiene la tabla la trae 
            include: [
                "cursos"
            ]
        });
        return estudiantes
    }catch(error){
        console.log(error);
    }
}

const getOne =async (id)=> {//para encontrar uno solo= es igual al getbyID
    try{
        const estudiantes= await Estudiantes.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where:{
                id:id
                },
            include:[
                'cursos'
            ]
        });
        return estudiantes
    }catch(error){
        console.log(error);
    }
}

const update =async (id,estudiantesnew)=> {//para encontrar uno solo
    try{
        const estudiantes = await Estudiantes.update(estudiantesnew, {
            where: { id }
        });
        return estudiantes

    }catch(error){
        console.log(error);
    }
}

const create =async (estudiantesnew)=> {//para encontrar uno solo
    try{
        const estudiantes= await Estudiantes.build(estudiantesnew); //build: crear una nueva instancia del modelo
        await estudiantes.save(); //guardar la instancia creado
        return estudiantes

    }catch(error){
        console.log(error);
    }
}

const Delete=async (id)=> {//para encontrar uno solo
    try{
        const response= await Estudiantes.destroy({ //destroy: para borrar definitivo
            where:{
                id:id
            }
        })
        return response //es como un booleano que indica si se elimino o no el registro

    }catch(error){
        console.log(error);
    }
}

module.exports= {
    getAll,
    getOne,
    Delete,
    create,
    update,
}