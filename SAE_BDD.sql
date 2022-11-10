DROP TABLE IF EXISTS est_client; -- ok
DROP TABLE IF EXISTS est_admin; -- ok
DROP TABLE IF EXISTS est_prestataire; -- ok
DROP TABLE IF EXISTS repond; -- ok
DROP TABLE IF EXISTS visionne; -- ok
DROP TABLE IF EXISTS gere; -- ok
DROP TABLE IF EXISTS accede; -- ok
DROP TABLE IF EXISTS situe; -- ok
DROP TABLE IF EXISTS modifie; -- ok
DROP TABLE IF EXISTS possede; -- ok
DROP TABLE IF EXISTS produit; -- ok
DROP TABLE IF EXISTS billet; -- ok
DROP TABLE IF EXISTS emplacement; -- ok
DROP TABLE IF EXISTS prestataire; -- ok
DROP TABLE IF EXISTS categorieBillet; -- ok
DROP TABLE IF EXISTS utilisateur; -- ok
DROP TABLE IF EXISTS caracteristique; -- ok
DROP TABLE IF EXISTS besoin; -- ok
DROP TABLE IF EXISTS statistique; -- ok
DROP TABLE IF EXISTS service; -- ok
DROP TABLE IF EXISTS categoriePrestation; -- ok
DROP TABLE IF EXISTS client; -- ok
DROP TABLE IF EXISTS admin; -- ok
DROP TABLE IF EXISTS localisation; -- ok


CREATE TABLE IF NOT EXISTS localisation
(
    idLocalisation      INT AUTO_INCREMENT,
    libelleLocalisation VARCHAR(50),
    PRIMARY KEY (idLocalisation)
);

CREATE TABLE IF NOT EXISTS admin
(
    idAdmin      INT AUTO_INCREMENT,
    texteAccueil TEXT,
    imageAccueil VARCHAR(50),
    PRIMARY KEY (idAdmin)
);

CREATE TABLE IF NOT EXISTS client
(
    idClient INT AUTO_INCREMENT,
    nom      VARCHAR(50),
    age      INT,
    PRIMARY KEY (idClient)
);

CREATE TABLE IF NOT EXISTS categoriePrestation
(
    idCategorie      INT AUTO_INCREMENT,
    libelleCategorie VARCHAR(50),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS service
(
    idService      INT AUTO_INCREMENT,
    libelleService VARCHAR(50),
    PRIMARY KEY (idService)
);

CREATE TABLE IF NOT EXISTS statistique
(
    idStatistique      INT AUTO_INCREMENT,
    libelleStatistique VARCHAR(50),
    valeur             DECIMAL(15, 2),
    PRIMARY KEY (idStatistique)
);

CREATE TABLE IF NOT EXISTS besoin
(
    idBesoin      INT AUTO_INCREMENT,
    libelleBesoin VARCHAR(50),
    PRIMARY KEY (idBesoin)
);

CREATE TABLE IF NOT EXISTS caracteristique
(
    idCaracteristique      INT AUTO_INCREMENT,
    libelleCaracteristique VARCHAR(50),
    PRIMARY KEY (idCaracteristique)
);

CREATE TABLE IF NOT EXISTS categorieBillet
(
    idCategorie      INT AUTO_INCREMENT,
    libelleCategorie VARCHAR(50),
    PRIMARY KEY (idCategorie)
);

CREATE TABLE IF NOT EXISTS utilisateur
(
    idUtilisateur INT AUTO_INCREMENT,
    typeCompte    INT,
    mdp           VARCHAR(50),
    login         VARCHAR(50),
    PRIMARY KEY (idUtilisateur)
);

CREATE TABLE IF NOT EXISTS prestataire
(
    idPrestataire    INT AUTO_INCREMENT,
    nom              VARCHAR(50),
    presenceHoraire  VARCHAR(50),
    textePrestataire TEXT,
    imagePrestataire VARCHAR(50),
    idCategorie      INT NOT NULL,
    PRIMARY KEY (idPrestataire),
    CONSTRAINT fk_categorie_prestataire FOREIGN KEY (idCategorie) REFERENCES categoriePrestation (idCategorie)
);

CREATE TABLE IF NOT EXISTS emplacement
(
    idEmplacement      INT AUTO_INCREMENT,
    libelleEmplacement VARCHAR(50),
    idCaracteristique  INT NOT NULL,
    idLocalisation     INT NOT NULL,
    PRIMARY KEY (idEmplacement),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristique (idCaracteristique),
    FOREIGN KEY (idLocalisation) REFERENCES localisation (idLocalisation)
);

CREATE TABLE IF NOT EXISTS billet
(
    idBillet    INT AUTO_INCREMENT,
    prix        DECIMAL(15, 2),
    idClient    INT NOT NULL,
    idCategorie INT NOT NULL,
    PRIMARY KEY (idBillet),
    FOREIGN KEY (idClient) REFERENCES client (idClient),
    FOREIGN KEY (idCategorie) REFERENCES categorieBillet (idCategorie)
);

CREATE TABLE IF NOT EXISTS produit
(
    idService     INT,
    idStatistique INT,
    PRIMARY KEY (idService, idStatistique),
    FOREIGN KEY (idService) REFERENCES service (idService),
    FOREIGN KEY (idStatistique) REFERENCES statistique (idStatistique)
);

CREATE TABLE IF NOT EXISTS possede
(
    idPrestataire INT,
    idBesoin      INT,
    PRIMARY KEY (idPrestataire, idBesoin),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idBesoin) REFERENCES besoin (idBesoin)
);

CREATE TABLE IF NOT EXISTS modifie
(
    idPrestataire INT,
    idClient      INT,
    heureVisite   TIME,
    PRIMARY KEY (idPrestataire, idClient),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idClient) REFERENCES client (idClient)
);

CREATE TABLE IF NOT EXISTS situe
(
    idEmplacement INT,
    horaireDebut  TIME,
    horaireFin    TIME,
    idPrestataire INT NOT NULL,
    PRIMARY KEY (idEmplacement, idPrestataire, horaireDebut),
    FOREIGN KEY (idEmplacement) REFERENCES emplacement (idEmplacement),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire)
);

CREATE TABLE IF NOT EXISTS accede
(
    idPrestataire INT AUTO_INCREMENT,
    idService     INT,
    PRIMARY KEY (idPrestataire, idService),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idService) REFERENCES service (idService)
);

CREATE TABLE IF NOT EXISTS gere
(
    idPrestataire INT AUTO_INCREMENT,
    idAdmin       INT,
    PRIMARY KEY (idPrestataire, idAdmin),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idAdmin) REFERENCES admin (idAdmin)
);

CREATE TABLE IF NOT EXISTS visionne
(
    idAdmin       INT,
    idStatistique INT,
    PRIMARY KEY (idAdmin, idStatistique),
    FOREIGN KEY (idAdmin) REFERENCES admin (idAdmin),
    FOREIGN KEY (idStatistique) REFERENCES statistique (idStatistique)
);

CREATE TABLE IF NOT EXISTS repond
(
    idBesoin          INT,
    idCaracteristique INT,
    PRIMARY KEY (idBesoin, idCaracteristique),
    FOREIGN KEY (idBesoin) REFERENCES besoin (idBesoin),
    FOREIGN KEY (idCaracteristique) REFERENCES caracteristique (idCaracteristique)
);

CREATE TABLE IF NOT EXISTS est_prestataire
(
    idPrestataire INT,
    idUtilisateur INT,
    PRIMARY KEY (idPrestataire, idUtilisateur),
    FOREIGN KEY (idPrestataire) REFERENCES prestataire (idPrestataire),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
);

CREATE TABLE IF NOT EXISTS est_admin
(
    idAdmin       INT,
    idUtilisateur INT,
    PRIMARY KEY (idAdmin, idUtilisateur),
    FOREIGN KEY (idAdmin) REFERENCES admin (idAdmin),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
);

CREATE TABLE IF NOT EXISTS est_client
(
    idClient      INT,
    idUtilisateur INT,
    PRIMARY KEY (idClient, idUtilisateur),
    FOREIGN KEY (idClient) REFERENCES client (idClient),
    FOREIGN KEY (idUtilisateur) REFERENCES utilisateur (idUtilisateur)
);

INSERT INTO localisation
VALUES ('1', 'zinzin');

LOAD DATA LOCAL INFILE './BDD/admin.csv' INTO TABLE admin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/client.csv' INTO TABLE client CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/categorie.csv' INTO TABLE categoriePrestation CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/service.csv' INTO TABLE service CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/statistique.csv' INTO TABLE statistique CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/besoin.csv' INTO TABLE besoin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/caracteristique.csv' INTO TABLE caracteristique CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/categorieBillet.csv' INTO TABLE categorieBillet CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/utilisateur.csv' INTO TABLE utilisateur CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/prestataire.csv' INTO TABLE prestataire CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/emplacement.csv' INTO TABLE emplacement CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/billet.csv' INTO TABLE billet CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/produit.csv' INTO TABLE produit CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/possede.csv' INTO TABLE possede CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/modifie.csv' INTO TABLE modifie CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/situe.csv' INTO TABLE situe CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/accede.csv' INTO TABLE accede CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/gere.csv' INTO TABLE gere CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/visionne.csv' INTO TABLE visionne CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/repond.csv' INTO TABLE repond CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/est_prestataire.csv' INTO TABLE est_prestataire CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/est_admin.csv' INTO TABLE est_admin CHARACTER SET utf8 FIELDS TERMINATED BY ',';
LOAD DATA LOCAL INFILE './BDD/est_client.csv' INTO TABLE est_client CHARACTER SET utf8 FIELDS TERMINATED BY ',';

-- situe horaire début primary key

-- Afficher infos prestataire
SET @idPrestataire = 1;
SELECT *
FROM prestataire
WHERE idPrestataire = @idPrestataire;

-- Afficher infos admin
SET @idAdmin = 1;
SELECT *
FROM admin
WHERE idAdmin = @idAdmin;

-- Afficher infos prestataire sur la carte
SET @idEmplacement = 3;
SELECT p.nom, p.textePrestataire
FROM emplacement e
         INNER JOIN situe s on e.idEmplacement = s.idEmplacement
         INNER JOIN prestataire p on p.idPrestataire = s.idPrestataire
WHERE e.idEmplacement = @idEmplacement;

-- Changer le prestataire d'un emplacement
SET @idEmplacement = 3;
SET @idPrestataire = 4;
UPDATE situe
SET idPrestataire = @idPrestataire
WHERE idEmplacement = @idEmplacement;

-- Modifier un prestataire
SET @idPrestataire = 1;
SET @nomPrestataire = 'Zinzin';
SET @presenceHoraire = 'ok';
SET @textePrestataire = 'Zinzin le Fou';
SET @imagePrestataire = 'image';
SET @idCategorie = 1;

UPDATE prestataire
SET nom              = @nomPrestataire,
    presenceHoraire  = @presenceHoraire,
    textePrestataire = @presenceHoraire,
    imagePrestataire = @imagePrestataire,
    idCategorie      = @idCategorie
WHERE idPrestataire = @idPrestataire;

-- Ajouter un prestataire (souci id 16)

SET @nomPrestataire = 'Guillaume';
SET @presenceHoraire = 'feur';
SET @textePrestataire = 'Guillaume le animateur';
SET @imagePrestataire = 'image2Guillaume';
SET @idCategorie = 3;

INSERT INTO prestataire (nom,
                         presenceHoraire,
                         textePrestataire,
                         imagePrestataire,
                         idCategorie)
VALUES (@nomPrestataire,
        @presenceHoraire,
        @textePrestataire,
        @imagePrestataire,
        @idCategorie);

SELECT * FROM prestataire;
