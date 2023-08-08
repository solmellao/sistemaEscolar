const sequelize = require("sequelize");
//es para definir el modelo
module.exports = function(sequelize,Datatypes){
    return sequelize.define ("cursos", {
        id : {
            type: Datatypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Datatypes.STRING(50),
            allowNull: false  //me permite poder señalar si puede ser nulo , una forma de validacion
        },
        descripcion: {
            type: Datatypes.TEXT('long'), //para guardar texto largo
            allowNull: false            
        }
    }, {
        sequelize,
        tableName: "cursos",
        timestamps: false,   //crea dos campos por defecto created_at y updated_at
        indexes: [ // configura los indices de la tabla usuarios, (si tiene clave primaria,foranea,etc)
            {
                name: "PRIMARY",
                unique: true,
                using: "BTREE",
                fields: [
                    { name: "id" 
                    }
                ]
            }            

        ]
    }
    )
}