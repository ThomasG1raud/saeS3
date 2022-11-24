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








// billet 1,1 -> categorieBillet
db.billet.hasOne(db.categorieBillet, {foreignKey: "fk_idCategorieBillet"});
// categorieBillet -> O,n billet
db.categorieBillet.hasMany(db.billet, { foreignKey: "fk_idBillet" })


// billet 1,1 -> utilisateur
db.billet.hasOne(db.utilisateur, { foreignKey: "fk_idUtilisateur" })
// utilisateur -> O,n billet
db.utilisateur.hasMany(db.billet, {foreignKey: "fk_idBillet"});


// utilisateur 1,1 -> categorieCompte
db.utilisateur.hasOne(db.categorieCompte, { foreignKey: "fk_typeCompte" })
// categorieCompte -> O,n utilisateur
db.categorieCompte.hasMany(db.utilisateur, { foreignKey: "fk_idUtilisateur" })


// prestataire 1,1 -> entreprise
db.prestataire.hasOne(db.entreprise, { foreignKey: "fk_siren" })
// entreprise -> 1,n prestataire
db.entreprise.hasMany(db.prestataire, { foreignKey: "fk_idPrestataire" })


//  prestataire -> 1,1 categoriePrestation
db.prestataire.hasOne(db.categoriePrestation, { foreignKey: "fk_idCategorie" })
// categoriePrestation -> O,n prestataire
db.categoriePrestation.hasMany(db.prestataire, { foreignKey: "fk_idPrestataire" })


// prestataire -> 1,n service
db.prestataire.hasMany(db.service, { foreignKey: "fk_idService" })
// service -> O,n prestataire
db.service.hasMany(db.prestataire, { foreignKey: "fk_idPrestataire" })


// service -> O,n statistique
db.service.hasMany(db.statistique, { foreignKey: "fk_idStatistique" })
// statistique -> 1,n service
db.statistique.hasMany(db.service, { foreignKey: "fk_idService" })


// prestataire -> O,n caracteristique
db.prestataire.hasMany(db.caracteristique, { foreignKey: "fk_idCaracteristique" })
// caracteristique -> 1,n prestataire
db.caracteristique.hasMany(db.prestataire, { foreignKey: "fk_idPrestataire" })


// caracteristique -> 1,n emplacement
db.caracteristique.hasMany(db.emplacement, { foreignKey: "fk_idEmplacement" })
// emplacement -> 1,n caracteristique
db.emplacement.hasMany(db.caracteristique, { foreignKey: "fk_idCaracteristique" })


// emplacement -> 1,1 localisation
db.emplacement.hasOne(db.localisation, { foreignKey: "fk_idLocalisation" })
// localisation -> 1,n emplacement
db.localisation.hasMany(db.emplacement, { foreignKey: "fk_idEmplacement" })

// table situe
db.utilisateur.belongsToMany(db.prestataire, {through: "situe", foreignKey: "fk_idUtilisateur"});
db.prestataire.belongsToMany(db.utilisateur, {through: "situe", foreignKey:"fk_idPrestataire"});


// table modifie
db.prestataire.belongsToMany(db.emplacement, {through: "modifie", foreignKey: "fk_idPrestataire"});
db.emplacement.belongsToMany(db.prestataire, {through: "modifie", foreignKey:"fk_idEmplacement"});













module.exports = db;

console.log("All models were synchronized successfully.");

