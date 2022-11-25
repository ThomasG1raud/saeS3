DROP TABLE IF EXISTS reponds;
DROP TABLE IF EXISTS comportes;
DROP TABLE IF EXISTS accedes;
DROP TABLE IF EXISTS situes;
DROP TABLE IF EXISTS modifies;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS billets;
DROP TABLE IF EXISTS utilisateurs;
DROP TABLE IF EXISTS emplacements;
DROP TABLE IF EXISTS prestataires;
DROP TABLE IF EXISTS categorieComptes;
DROP TABLE IF EXISTS entreprises;
DROP TABLE IF EXISTS categorieBillets;
DROP TABLE IF EXISTS caracteristiques;
DROP TABLE IF EXISTS statistiques;
DROP TABLE IF EXISTS services;
DROP TABLE IF EXISTS categoriePrestations;
DROP TABLE IF EXISTS localisations;

CREATE TABLE localisations
(
    idLocalisation      SERIAL,
    libelleLocalisation VARCHAR(255),
    PRIMARY KEY (idLocalisation)
);

CREATE TABLE categoriePrestations
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE services
(
    idService      SERIAL,
    libelleService VARCHAR(255),
    PRIMARY KEY (idService)
);

CREATE TABLE statistiques
(
    idStatistique      SERIAL,
    libelleStatistique VARCHAR(255),
    valeur             DECIMAL(15, 2),
    PRIMARY KEY (idStatistique)
);

CREATE TABLE caracteristiques
(
    idCaracteristique      SERIAL,
    libelleCaracteristique VARCHAR(255),
    PRIMARY KEY (idCaracteristique)
);

CREATE TABLE categorieBillets
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE entreprises
(
    siren         SERIAL,
    nomEntreprise VARCHAR(255),
    PRIMARY KEY (siren)
);

CREATE TABLE categorieComptes
(
    typeCompte    SERIAL,
    libelleCompte VARCHAR(58),
    PRIMARY KEY (typeCompte)
);

CREATE TABLE prestataires
(
    idPrestataire    SERIAL,
    nom              VARCHAR(255),
    presenceHoraire  TIMESTAMP,
    textePrestataire TEXT,
    imagePrestataire VARCHAR(255),
    siren            INT NOT NULL,
    idCategorie      INT NOT NULL,
    PRIMARY KEY (idPrestataire),
    FOREIGN KEY (siren) REFERENCES entreprises (siren),
    FOREIGN KEY (idCategorie) REFERENCES categoriePrestations (idCategorie)
);

CREATE TABLE emplacements
(
    idEmplacement      SERIAL,
    libelleEmplacement VARCHAR(255),
    idLocalisation     INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idLocalisation) REFERENCES localisations (idLocalisation)
);

CREATE TABLE utilisateurs
(
    idUtilisateur SERIAL,
    mdp           VARCHAR(255),
    login         VARCHAR(255),
    age           INT,
    nom           VARCHAR(255),
    typeCompte    INT NOT NULL,
    PRIMARY KEY (idUtilisateur),
    FOREIGN KEY (typeCompte) REFERENCES categorieComptes (typeCompte)
);

CREATE TABLE billets
(
    idBillet      SERIAL,
    prix          DECIMAL(15, 2),
    idUtilisateur INT NOT NULL,
    idCategorie   INT NOT NULL,
    PRIMARY KEY (idBillet),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur),
    FOREIGN KEY (idCategorie) REFERENCES categorieBillets (idCategorie)
);

CREATE TABLE produits
(
    idService     INT,
    idStatistique INT,
    PRIMARY KEY (idService, idStatistique),
    FOREIGN KEY (idService) REFERENCES services (idService),
    FOREIGN KEY (idStatistique) REFERENCES statistiques (idStatistique)
);

CREATE TABLE modifys
(
    idPrestataire INT,
    idUtilisateur INT,
    heureVisite   TIMESTAMP,
    PRIMARY KEY (idPrestataire, idUtilisateur),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur)
);

CREATE TABLE situes
(
    idEmplacement INT,
    horaireDebut  TIMESTAMP,
    horaireFin    TIMESTAMP,
    idPrestataire INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idEmplacement) REFERENCES emplacements (idEmplacement),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire)
);

CREATE TABLE accedes
(
    idPrestataire INT,
    idService     INT,
    PRIMARY KEY (idPrestataire, idService),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idService) REFERENCES services (idService)
);

CREATE TABLE comportes
(
    idEmplacement     INT,
    idCaracteristique INT,
    PRIMARY KEY (idEmplacement, idCaracteristique),
    FOREIGN KEY (idEmplacement) REFERENCES emplacements (idEmplacement),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique)
);

CREATE TABLE repond
(
    idPrestataire     INT,
    idCaracteristique INT,
    PRIMARY KEY (idPrestataire, idCaracteristique),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique)
);


-- LOAD DATA LOCAL INFILE './BDD/admin.csv' INTO TABLE admin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/client.csv' INTO TABLE client CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/categorie.csv' INTO TABLE categoriePrestation CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/service.csv' INTO TABLE service CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/statistique.csv' INTO TABLE statistique CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/besoin.csv' INTO TABLE besoin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/caracteristique.csv' INTO TABLE caracteristique CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/categorieBillet.csv' INTO TABLE categorieBillet CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/utilisateur.csv' INTO TABLE utilisateur CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/prestataire.csv' INTO TABLE prestataire CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/emplacement.csv' INTO TABLE emplacement CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/billet.csv' INTO TABLE billet CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/produit.csv' INTO TABLE produit CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/possede.csv' INTO TABLE possede CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/modify.csv' INTO TABLE modify CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/situe.csv' INTO TABLE situe CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/accede.csv' INTO TABLE accede CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/gere.csv' INTO TABLE gere CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/visionne.csv' INTO TABLE visionne CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/repond.csv' INTO TABLE repond CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_prestataire.csv' INTO TABLE est_prestataire CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_admin.csv' INTO TABLE est_admin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_client.csv' INTO TABLE est_client CHARACTER SET utf8 FIELDS TERMINATED BY ',';



