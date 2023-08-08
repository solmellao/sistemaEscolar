const Database = require("../db");

const sequelize= require ("sequelize");

const initModel = require ("../models/init-models");

const Models =initModel (Database);

const Cursos = Models.Cursos;

//sirve para señalar las funciones que se aplican en el model

const getAll=async ()=> { //para mostrar todos los registros de la tabla
    try{
        const cursos= await Cursos.findAll({
            include: [
                "estudiantes"
        ]}
        );//findAll: todo la info que tiene la tabla la trae
        return cursos

    }catch(error){
        console.log(error);
    }
}


const getOne =async (id)=> {//para encontrar uno solo= es igual al getbyID
    try{
        const curso= await Cursos.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where:{
                id:id
                },
            include: [
                "estudiantes"
            ]
        });
        return curso

    }catch(error){
        console.log(error);
    }
}

const update =async (id,cursonew)=> {//para encontrar uno solo
    try{
        const curso= await Cursos.update(cursonew, {
            where: { id }
        });
        return curso

    }catch(error){
        console.log(error);
    }
}

const create =async (cursonew)=> {//para encontrar uno solo
    try{
        const curso= await Cursos.build(cursonew); //build: crear una nueva instancia del modelo
        await curso.save(); //guardar la instancia creada   
        return curso

    }catch(error){
        console.log(error);
    }
}

const Delete=async (id)=> {//para encontrar uno solo
    try{
        const response= await Cursos.destroy({ //destroy: para borrar definitivo
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