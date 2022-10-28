const mysql = require("mysql");
const db = mysql.createConnection({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PASSWORD,
    dataBase : process.env.DATABASE
})

module.exports = db

const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('TABLE', 'USERNAME', 'PASSWORD',{
  dialect: 'mysql',
  host: 'bdd2.adkynet.com',
  port: '3306',
});
async function def(){
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
  const users = await sequelize.query("SELECT * FROM Cards");
  console.log(users)
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

def()