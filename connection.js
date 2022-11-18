const { Sequelize } =require('sequelize');
const postgres = require("postgres");



const sequelize = new Sequelize('bdd_sae_s3', 'sae_s3', 'bdds3', {
  host: 'localhost',
  dialect: 'postgres'
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
  postgres:postgres,
  sequelize:sequelize
}