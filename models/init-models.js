const Datatypes = require("sequelize").DataTypes;

const _Estudiantes = require('./estudiantesModel');
const _Profesores = require('./profesoresModel');
const _Cursos = require('./cursosModel');
const _EstudiantesCursos = require('./estudiantes_cursosModel');
const _Usuarios = require('./usuarioModel');

function initModels(sequelize){
    const Estudiantes = _Estudiantes(sequelize, Datatypes);
    const Profesores = _Profesores(sequelize, Datatypes);
    const Cursos = _Cursos(sequelize, Datatypes);
    const EstudiantesCursos = _EstudiantesCursos(sequelize, Datatypes);
    const Usuarios = _Usuarios(sequelize, Datatypes);
    
//primero los nombre y ahora le indico sus relaciones, lo que hace

    Estudiantes.belongsToMany(Cursos, { through: EstudiantesCursos, foreignKey: "id_estudiante" }) 
    //estudiantes pertenece a muchos cursos a traves de la tabla estudiantes cursos

    Cursos.belongsToMany(Estudiantes, { through: EstudiantesCursos, foreignKey: "id_curso" })
    //cursos pertenece a muchos estudiantes a traves de la tabla estudiantes cursos
   
    return {
        Estudiantes,
        Profesores,
        Cursos,
        EstudiantesCursos,
        Usuarios
    };
}

module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;