const Database = require("../db");

const initModel = require ("../models/init-models");

const Models =initModel (Database);

const Profesores = Models.Profesores;

//sirve para señalar las funciones que se aplican en el model

const getAll=async ()=> { //para mostrar todos los registros de la tabla
    try{
        const profesores= await Profesores.findAll();//findAll: todo la info que tiene la tabla la trae
        return profesores

    }catch(error){
        console.log(error);
    }
}

const getOne =async (id)=> {//para encontrar uno solo= es igual al getbyID
    try{
        const profesores= await Profesores.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where:{
                id:id
                },
        });
        return profesores

    }catch(error){
        console.log(error);
    }
}

const update =async (id,profesoresnew)=> {//para encontrar uno solo
    try{
        const profesores= await Profesores.update(profesoresnew, {
            where: { id }
        });
        return profesores

    }catch(error){
        console.log(error);
    }
}

const create =async (profesornew)=> {//para encontrar uno solo
    try{
        const profesor= await Profesores.build(profesornew); //build: crear una nueva instancia del modelo
        await profesor.save(); //guardar la instancia creado

        return profesor

    }catch(error){
        console.log(error);
    }
}

const Delete=async (id)=> {//para encontrar uno solo
    try{
        const response= await Profesores.destroy({ //destroy: para borrar definitivo
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