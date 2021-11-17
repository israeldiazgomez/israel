const Sequelize = require('sequelize');

const DB_NAME = 'db_p';
const DB_USER = 'israel';
const DB_PASS = 'israelDiaz25.'

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host:'localhost',
        dialect:'mysql',
        port: 3306
    }
)

database.sync({force:true})
    .then(function(){
        console.log("------------------------ BASE DE DATOS CREADA ------------------------")
    })
