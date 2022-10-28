const { Sequelize } = require('sequelize');
const mysql = require("mysql2");

mysql.createConnection({
  host : process.env.HOST,
  user : process.env.NAME,
  password : process.env.PASSWORD,
  dataBase : process.env.DATABASE
})


const sequelize = new Sequelize('database', 'username', 'password',{
  host: 'http://localhost:3000/',
  dialect: 'mysql',
  port: '3000',
});
// async function def(){
// try {
//   sequelize.authenticate();
//   console.log('Connection has been established successfully.');
//   const users = await sequelize.query("SELECT * FROM Cards");
//   console.log(users)
// } catch (error) {
//   console.error('Unable to connect to the database:', error);
// }}
//
// def()

module.exports = {
  mysql:mysql,
  sequelize:sequelize
}