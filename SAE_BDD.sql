CREATE TABLE localisation
(
    idLocalisation      SERIAL,
    libelleLocalisation VARCHAR(255),
    PRIMARY KEY (idLocalisation)
);

CREATE TABLE categoriePrestation
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE service
(
    idService      SERIAL,
    libelleService VARCHAR(255),
    PRIMARY KEY (idService)
);

CREATE TABLE statistique
(
    idStatistique      SERIAL,
    libelleStatistique VARCHAR(255),
    valeur             DECIMAL(15, 2),
    PRIMARY KEY (idStatistique)
);

CREATE TABLE caracteristique
(
    idCaracteristique      SERIAL,
    libelleCaracteristique VARCHAR(255),
    PRIMARY KEY (idCaracteristique)
);

CREATE TABLE categorieBillet
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE entreprise
(
    siren         SERIAL,
    nomEntreprise VARCHAR(255),
    PRIMARY KEY (siren)
);

CREATE TABLE categorieCompte
(
    typeCompte    SERIAL,
    libelleCompte VARCHAR(58),
    PRIMARY KEY (typeCompte)
);

CREATE TABLE prestataire
(
    idPrestataire    SERIAL,
    nom              VARCHAR(255),
    presenceHoraire  TIMESTAMP,
    textePrestataire TEXT,
    imagePrestataire VARCHAR(255),
    siren            INT NOT NULL,
    idCategorie      INT NOT NULL,
    PRIMARY KEY (idPrestataire),
    FOREIGN KEY (siren) REFERENCES entreprise (siren),
    FOREIGN KEY (idCategorie) REFERENCES categoriePrestation (idCategorie)
);

CREATE TABLE emplacement
(
    idEmplacement      SERIAL,
    libelleEmplacement VARCHAR(255),
    idLocalisation     INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idLocalisation) REFERENCES localisation (idLocalisation)
);

CREATE TABLE utilisateur
(
    idUtilisateur SERIAL,
    mdp           VARCHAR(255),
    login         VARCHAR(255),
    age           INT,
    nom           VARCHAR(255),
    typeCompte    INT NOT NULL,
    PRIMARY KEY (idUtilisateur),
    FOREIGN KEY (typeCompte) REFERENCES categorieCompte (typeCompte)
);

CREATE TABLE billet
(
    idBillet      SERIAL,
    prix          DECIMAL(15, 2),
    idUtilisateur INT NOT NULL,
    idCategorie   INT NOT NULL,
    PRIMARY KEY (idBillet),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur),
    FOREIGN KEY (idCategorie) REFERENCES categorieBillet (idCategorie)
);

CREATE TABLE produit
(
    idService     INT,
    idStatistique INT,
    PRIMARY KEY (idService, idStatistique),
    FOREIGN KEY (idService) REFERENCES service (idService),
    FOREIGN KEY (idStatistique) REFERENCES statistique (idStatistique)
);

CREATE TABLE modifie
(
    idPrestataire INT,
    idUtilisateur INT,
    heureVisite   TIMESTAMP,
    PRIMARY KEY (idPrestataire, idUtilisateur),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
);

CREATE TABLE situe
(
    idEmplacement INT,
    horaireDebut  TIMESTAMP,
    horaireFin    TIMESTAMP,
    idPrestataire INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idEmplacement) REFERENCES emplacement (idEmplacement),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire)
);

CREATE TABLE accede
(
    idPrestataire INT,
    idService     INT,
    PRIMARY KEY (idPrestataire, idService),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idService) REFERENCES service (idService)
);

CREATE TABLE comporte
(
    idEmplacement     INT,
    idCaracteristique INT,
    PRIMARY KEY (idEmplacement, idCaracteristique),
    FOREIGN KEY (idEmplacement) REFERENCES emplacement (idEmplacement),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristique (idCaracteristique)
);

CREATE TABLE repond
(
    idPrestataire     INT,
    idCaracteristique INT,
    PRIMARY KEY (idPrestataire, idCaracteristique),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristique (idCaracteristique)
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
-- LOAD DATA LOCAL INFILE './BDD/modifie.csv' INTO TABLE modifie CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/situe.csv' INTO TABLE situe CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/accede.csv' INTO TABLE accede CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/gere.csv' INTO TABLE gere CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/visionne.csv' INTO TABLE visionne CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/repond.csv' INTO TABLE repond CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_prestataire.csv' INTO TABLE est_prestataire CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_admin.csv' INTO TABLE est_admin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
-- LOAD DATA LOCAL INFILE './BDD/est_client.csv' INTO TABLE est_client CHARACTER SET utf8 FIELDS TERMINATED BY ',';








