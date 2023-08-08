const sequelize = require("sequelize");
//es para definir el modelo
module.exports = function (sequelize, Datatypes) {
    return sequelize.define("estudiantes_cursos", { //es una tabla que tiene informacion unica de mucho a muchos
        id_curso: {
            type: Datatypes.INTEGER,
            references: {
                model: "cursos",  //nombre del modelo a referenciar
                key: 'id'
            }
        },
        id_estudiante: {
            type: Datatypes.INTEGER,
            references: {
                model: "estudiantes",    //nombre del modelo al que hace referencia
                key: 'id'
            }
        }
    }, {
        sequelize, 
        tableName: "estudiantes_cursos",
        timestamps: false,   //crea dos campos por defecto created_at y updated_at
        indexes: [ // configura los indices de la tabla usuarios, (si tiene clave primaria,foranea,etc)
            {//que no se cree la misma relacion entre estudiante y curso dos veces.(id)
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    {
                        name: "id_curso"
                    },
                    {
                        name: "id_estudiante"
                    }
                ]
            }
        ]
    }
    )
}