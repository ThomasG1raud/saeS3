const { Sequelize } =require('sequelize');

require('dotenv').config()

const sequelize = new Sequelize(process.env.DATABASE, process.env.LOGIN, process.env.PASSWORD, {
    host: process.env.HOST,
    dialect: process.env.DIALECT
});

const db = {}

db.Sequelize = Sequelize;
db.sequelize = sequelize;


db.billet = require("./billet")(sequelize,Sequelize);
db.caracteristique = require("./caracteristique")(sequelize,Sequelize);
db.categorieBillet = require("./categorieBillet")(sequelize,Sequelize);
db.categorieCompte = require("./categorieCompte")(sequelize,Sequelize);
db.categoriePrestation = require("./categoriePrestation")(sequelize,Sequelize);
db.emplacement = require("./emplacement")(sequelize,Sequelize);
db.entreprise = require("./entreprise")(sequelize,Sequelize);
db.localisation = require("./localisation")(sequelize,Sequelize);
db.prestataire = require("./prestataire")(sequelize,Sequelize);
db.service = require("./service")(sequelize,Sequelize);
db.statistique = require("./statistique")(sequelize,Sequelize);
db.utilisateur = require("./utilisateur")(sequelize,Sequelize);



module.exports = db;

console.log("All models were synchronized successfully.");

