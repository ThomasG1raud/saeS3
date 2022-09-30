const mysql = require("mysql");
const db = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    dataBase : process.env.DATABASE
})

module.exports = db