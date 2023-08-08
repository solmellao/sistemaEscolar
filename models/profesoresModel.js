const sequelize = require("sequelize");
//es para definir el modelo
module.exports = function(sequelize,Datatypes){
    return sequelize.define ("profesores", {
        id : {
            type: Datatypes.INTEGER(),
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Datatypes.STRING(50),
            allowNull: false  //me permite poder señalar si puede ser nulo , una forma de validacion
        },
        especialidad: {
            type: Datatypes.TEXT('long'), //para guardar texto largo
            allowNull: false            
        },
        email: {
            type: Datatypes.TEXT('long'), //para guardar texto largo
            allowNull: false            
        }
    }, {
        sequelize,
        tableName: "profesores",
        timestamps: false,   //crea dos campos por defecto created_at y updated_at
        indexes: [ // configura los indices de la tabla profesores, (si tiene clave primaria,foranea,etc)
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