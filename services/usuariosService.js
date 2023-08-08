const Database = require("../db");

const initModel = require("../models/init-models");

const Models = initModel(Database);

const Usuario = Models.Usuarios;

const Bcrypt = require("bcryptjs");

const Jwt =require ("jsonwebtoken");

//sirve para señalar las funciones que se aplican en el model

const getOne = async (id) => {//para encontrar uno solo= es igual al getbyID
    try {
        const usuario = await Usuario.findOne({ //findOne: todo la info que tiene la tabla, la trae
            where: {
                id: id
            },
        });
        return usuario

    } catch (error) {
        console.log(error);
    }
}
const signup = async (usuarionew) => {//para encontrar uno solo
    try {
        const hash = await Bcrypt.hash(usuarionew.password, 10); //se crea un hash sobre el password. crear la encriptacion de la clave
        const usuario = await Usuario.build({
            username: usuarionew.username,
            password: hash
        }); //build: crear una nueva instancia del modelo
        await usuario.save(); //guardar la instancia creada
        return usuario

    } catch (error) {
        console.log(error);
    }
}

const login = async (credencial) => {
    try { //retornar el usuario que busco por el username
        const usuario = await Usuario.findOne(
            {
                where: {
                    username: credencial.username
                }
            }
        )
        // validar la existencia del usuario 
        if (usuario) {
            //llamo al bcrypt para comparar la clave del req contra la que esta en la bd
            const resultado = await Bcrypt.compare(credencial.password, usuario.password);
            if (resultado) {//de aca para abajo lo que hace es retornar el token del login
                return Jwt.sign({ //lo que crea aca es una clave tipo token similar a una tarjet de identificacion
                    userId: usuario.id 
                }, "secret", { // es la clave que necesita el token para desencriptarse 
                    expiresIn: "1h", //el login dura 1 hora
                })
            }
            else {
                throw new Error("Contraseña incorrecta")//si no coincide retorna error
            }
        }
         else{
            throw new Error('Usuario inexistente')
        }
    } catch (error) {
        console.log(error)
    }
}

module.exports= {
    getOne,
    signup,
    login
}


//en primera instancia se inicia sesion con signup y luego se ingresa la sesion en login para obtener el token que 
//permite utilizar las funcionalidades de update,delete,create