const mysql2 =require ("mysql2");

const sequelize= require ("sequelize");

/**const Database = new sequelize (
    process.env.DB_NAME,
    process.env.DB_USER, 
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect:'mysql',
        port: process.env.PORT,
    }
)*/

const Database = new sequelize (
    "sistema de gestion escolaR",
    "root", 
    "",
    {
        host: "localhost",
        dialect:'mysql',
        port: 3306,
    }
)

module.exports= Database