DROP TABLE IF EXISTS reponds;
DROP TABLE IF EXISTS comportes;
DROP TABLE IF EXISTS accedes;
DROP TABLE IF EXISTS situes;
DROP TABLE IF EXISTS modifys;
DROP TABLE IF EXISTS produits;
DROP TABLE IF EXISTS billets;
DROP TABLE IF EXISTS panier;
DROP TABLE IF EXISTS goodies;
DROP TABLE IF EXISTS livreDOr;
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

CREATE TABLE IF NOT EXISTS localisations
(
    idLocalisation      SERIAL,
    libelleLocalisation VARCHAR(255),
    PRIMARY KEY (idLocalisation)
);

CREATE TABLE IF NOT EXISTS  categoriePrestations
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS  services
(
    idService      SERIAL,
    libelleService VARCHAR(255),
    PRIMARY KEY (idService)
);

CREATE TABLE IF NOT EXISTS  statistiques
(
    idStatistique      SERIAL,
    libelleStatistique VARCHAR(255),
    valeur             DECIMAL(15, 2),
    PRIMARY KEY (idStatistique)
);

CREATE TABLE IF NOT EXISTS  caracteristiques
(
    idCaracteristique      SERIAL,
    libelleCaracteristique VARCHAR(255),
    PRIMARY KEY (idCaracteristique)
);

CREATE TABLE IF NOT EXISTS  categorieBillets
(
    idCategorie      SERIAL,
    libelleCategorie VARCHAR(255),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS  entreprises
(
    siren         SERIAL,
    nomEntreprise VARCHAR(255),
    PRIMARY KEY (siren)
);

CREATE TABLE IF NOT EXISTS  categorieComptes
(
    typeCompte    SERIAL,
    libelleCompte VARCHAR(58),
    PRIMARY KEY (typeCompte)
);

CREATE TABLE IF NOT EXISTS  prestataires
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

CREATE TABLE IF NOT EXISTS  emplacements
(
    idEmplacement      SERIAL,
    libelleEmplacement VARCHAR(255),
    idLocalisation     INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idLocalisation) REFERENCES localisations (idLocalisation)
);

CREATE TABLE IF NOT EXISTS  utilisateurs
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

CREATE TABLE IF NOT EXISTS  billets
(
    idBillet      SERIAL,
    prix          DECIMAL(15, 2),
    idUtilisateur INT NOT NULL,
    idCategorie   INT NOT NULL,
    PRIMARY KEY (idBillet),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur),
    FOREIGN KEY (idCategorie) REFERENCES categorieBillets (idCategorie)
);

CREATE TABLE IF NOT EXISTS  produits
(
    idService     INT,
    idStatistique INT,
    PRIMARY KEY (idService, idStatistique),
    FOREIGN KEY (idService) REFERENCES services (idService),
    FOREIGN KEY (idStatistique) REFERENCES statistiques (idStatistique)
);

CREATE TABLE IF NOT EXISTS  modifys
(
    idPrestataire INT,
    idUtilisateur INT,
    heureVisite   TIMESTAMP,
    PRIMARY KEY (idPrestataire, idUtilisateur),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs (idUtilisateur)
);

CREATE TABLE  IF NOT EXISTS situes
(
    idEmplacement INT,
    horaireDebut  TIMESTAMP,
    horaireFin    TIMESTAMP,
    idPrestataire INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idEmplacement) REFERENCES emplacements (idEmplacement),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire)
);

CREATE TABLE  IF NOT EXISTS accedes
(
    idPrestataire INT,
    idService     INT,
    PRIMARY KEY (idPrestataire, idService),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idService) REFERENCES services (idService)
);

CREATE TABLE  IF NOT EXISTS comportes
(
    idEmplacement     INT,
    idCaracteristique INT,
    PRIMARY KEY (idEmplacement, idCaracteristique),
    FOREIGN KEY (idEmplacement) REFERENCES emplacements (idEmplacement),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique)
);

CREATE TABLE  IF NOT EXISTS reponds
(
    idPrestataire     INT,
    idCaracteristique INT,
    PRIMARY KEY (idPrestataire, idCaracteristique),
    FOREIGN KEY (idPrestataire) REFERENCES prestataires (idPrestataire),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristiques (idCaracteristique)
);

CREATE TABLE IF NOT EXISTS livreDOr(
    idCommentaire SERIAL PRIMARY KEY ,
    commentaire VARCHAR,
    idUtilisateur INT,
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs(idUtilisateur)
);

CREATE TABLE IF NOT EXISTS goodies(
    idGoodies SERIAL PRIMARY KEY ,
    libelleGoodies VARCHAR,
    prixGoodies FLOAT,
    imageGoodies VARCHAR,
    stock INT,
    idPrestataire INT,
    FOREIGN KEY (idPrestataire) REFERENCES prestataires(idPrestataire)
);

CREATE TABLE IF NOT EXISTS panier(
    idGoodies INT,
    idUtilisateur INT,
    quantite INT,
    PRIMARY KEY (idGoodies, idUtilisateur),
    FOREIGN KEY (idGoodies) REFERENCES goodies(idGoodies),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateurs(idUtilisateur)
);

insert into localisations(libelleLocalisation)
values ('localisation 1');
insert into localisations(libelleLocalisation)
values ('localisation 2');
insert into localisations(libelleLocalisation)
values ('localisation 3');

insert into categoriePrestations(libelleCategorie)
values ('categorie 1');
insert into categoriePrestations(libelleCategorie)
values ('categorie 2');
insert into categoriePrestations(libelleCategorie)
values ('categorie 3');

insert into services(libelleService)
values ('service 1');
insert into services(libelleService)
values ('service 2');
insert into services(libelleService)
values ('service 3');

insert into statistiques(libelleStatistique, valeur)
values ('statistique 1', 1);
insert into statistiques(libelleStatistique, valeur)
values ('statistique 2', 2);
insert into statistiques(libelleStatistique, valeur)
values ('statistique 3', 3);

insert into caracteristiques(libelleCaracteristique)
values ('electricite');
insert into caracteristiques(libelleCaracteristique)
values ('eau');
insert into caracteristiques(libelleCaracteristique)
values ('espace');

insert into categorieBillets(libelleCategorie)
values ('enfant');
insert into categorieBillets(libelleCategorie)
values ('groupe');
insert into categorieBillets(libelleCategorie)
values ('adulte');

insert into entreprises(siren, nomEntreprise)
values (1, 'entreprise 1');
insert into entreprises(siren, nomEntreprise)
values (2, 'entreprise 2');
insert into entreprises(siren, nomEntreprise)
values (3, 'entreprise 3');

insert into categorieComptes(libelleCompte)
values ('categorieComptes 1');
insert into categorieComptes(libelleCompte)
values ('categorieComptes 3');
insert into categorieComptes(libelleCompte)
values ('categorieComptes 2');

insert into prestataires(nom, presenceHoraire, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 1', '21/12/2001', 'texte 1', 'image 1', 1, '1');
insert into prestataires(nom, presenceHoraire, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 2', '21/12/2002', 'texte 2', 'image 1', 2, '2');
insert into prestataires(nom, presenceHoraire, textePrestataire, imagePrestataire, siren, idCategorie)
values ('prestataires 3', '21/12/2003', 'texte 3', 'image 1', 3, '3');

insert into emplacements(libelleEmplacement, idLocalisation)
values ('emplacements 1', 1);
insert into emplacements(libelleEmplacement, idLocalisation)
values ('emplacements 2', 2);
insert into emplacements(libelleEmplacement, idLocalisation)
values ('emplacements 3', 3);

insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 1', 'login 1', 1, 'nom 1', '1');
insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 2', 'login 2', 2, 'nom 2', '2');
insert into utilisateurs(mdp, login, age, nom, typeCompte)
values ('mdp 3', 'login 3', 3, 'nom 3', '3');

insert into billets(prix, idUtilisateur, idCategorie)
values (32, 1, 1);
insert into billets(prix, idUtilisateur, idCategorie)
values (64, 2, 2);
insert into billets(prix, idUtilisateur, idCategorie)
values (128, 3, 3);

insert into produits(idService, idStatistique)
values (1, 1);
insert into produits(idService, idStatistique)
values (2, 2);
insert into produits(idService, idStatistique)
values (3, 3);

insert into modifys(idPrestataire, idUtilisateur, heureVisite)
values (1, 1, '23/12/01');
insert into modifys(idPrestataire, idUtilisateur, heureVisite)
values (2, 2, '23/12/02');
insert into modifys(idPrestataire, idUtilisateur, heureVisite)
values (3, 3, '23/12/03');

insert into situes(idEmplacement, horaireDebut, horaireFin, idPrestataire)
values (1, '15/01/2001', '16/12/2001', 1);
insert into situes(idEmplacement, horaireDebut, horaireFin, idPrestataire)
values (2, '15/01/2002', '16/12/2002', 2);
insert into situes(idEmplacement, horaireDebut, horaireFin, idPrestataire)
values (3, '15/01/2003', '16/12/2003', 3);


insert into accedes(idPrestataire, idService)
values (1, 1);
insert into accedes(idPrestataire, idService)
values (2, 2);
insert into accedes(idPrestataire, idService)
values (3, 3);

insert into comportes(idEmplacement, idCaracteristique)
values (1, 1);
insert into comportes(idEmplacement, idCaracteristique)
values (2, 2);
insert into comportes(idEmplacement, idCaracteristique)
values (3, 3);

insert into reponds(idPrestataire, idCaracteristique)
values (1, 1);
insert into reponds(idPrestataire, idCaracteristique)
values (2, 2);
insert into reponds(idPrestataire, idCaracteristique)
values (3, 3);

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



