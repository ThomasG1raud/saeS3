-- MariaDB dump 10.19  Distrib 10.6.10-MariaDB, for debian-linux-gnu (x86_64)
--
-- Host: 127.0.0.1    Database: BDD_saeS3
-- ------------------------------------------------------
-- Server version	10.6.10-MariaDB-1+b1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `accede`
--

DROP TABLE IF EXISTS `accede`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accede` (
  `idPrestataire` int(11) NOT NULL AUTO_INCREMENT,
  `idService` int(11) NOT NULL,
  PRIMARY KEY (`idPrestataire`,`idService`),
  KEY `idService` (`idService`),
  CONSTRAINT `accede_ibfk_1` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`),
  CONSTRAINT `accede_ibfk_2` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accede`
--

LOCK TABLES `accede` WRITE;
/*!40000 ALTER TABLE `accede` DISABLE KEYS */;
INSERT INTO `accede` VALUES (1,1),(2,1),(3,1),(4,2),(5,3),(6,3),(7,4);
/*!40000 ALTER TABLE `accede` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `texteAccueil` text DEFAULT NULL,
  `imageAccueil` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'blablablabla','image d’accueil\r');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `besoin`
--

DROP TABLE IF EXISTS `besoin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `besoin` (
  `idBesoin` int(11) NOT NULL AUTO_INCREMENT,
  `libelleBesoin` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idBesoin`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `besoin`
--

LOCK TABLES `besoin` WRITE;
/*!40000 ALTER TABLE `besoin` DISABLE KEYS */;
INSERT INTO `besoin` VALUES (1,'eau\r'),(2,'electricite\r'),(3,'espace\r'),(4,'infrastructure\r'),(5,'espace\r'),(6,'grand espace\r');
/*!40000 ALTER TABLE `besoin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `billet`
--

DROP TABLE IF EXISTS `billet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `billet` (
  `idBillet` int(11) NOT NULL AUTO_INCREMENT,
  `prix` decimal(15,2) DEFAULT NULL,
  `idClient` int(11) NOT NULL,
  `idCategorie` int(11) NOT NULL,
  PRIMARY KEY (`idBillet`),
  KEY `idClient` (`idClient`),
  KEY `idCategorie` (`idCategorie`),
  CONSTRAINT `billet_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`),
  CONSTRAINT `billet_ibfk_2` FOREIGN KEY (`idCategorie`) REFERENCES `categorieBillet` (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `billet`
--

LOCK TABLES `billet` WRITE;
/*!40000 ALTER TABLE `billet` DISABLE KEYS */;
INSERT INTO `billet` VALUES (1,12.50,6,1),(2,15.00,7,2),(3,22.00,8,3),(4,13.00,9,4),(5,13.50,10,5);
/*!40000 ALTER TABLE `billet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `caracteristique`
--

DROP TABLE IF EXISTS `caracteristique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `caracteristique` (
  `idCaracteristique` int(11) NOT NULL AUTO_INCREMENT,
  `libelleCaracteristique` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCaracteristique`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `caracteristique`
--

LOCK TABLES `caracteristique` WRITE;
/*!40000 ALTER TABLE `caracteristique` DISABLE KEYS */;
INSERT INTO `caracteristique` VALUES (1,'eau\r'),(2,'electricite\r'),(3,'espace\r'),(4,'infrastructure\r'),(5,'grand espace\r');
/*!40000 ALTER TABLE `caracteristique` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorieBillet`
--

DROP TABLE IF EXISTS `categorieBillet`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorieBillet` (
  `idCategorie` int(11) NOT NULL AUTO_INCREMENT,
  `libelleCategorie` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorieBillet`
--

LOCK TABLES `categorieBillet` WRITE;
/*!40000 ALTER TABLE `categorieBillet` DISABLE KEYS */;
INSERT INTO `categorieBillet` VALUES (1,'moins de 10ans\r'),(2,'famille nombreuse\r'),(3,'adulte\r'),(4,'handicape\r'),(5,'etudiant\r'),(6,'retraite\r');
/*!40000 ALTER TABLE `categorieBillet` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categoriePrestation`
--

DROP TABLE IF EXISTS `categoriePrestation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categoriePrestation` (
  `idCategorie` int(11) NOT NULL AUTO_INCREMENT,
  `libelleCategorie` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categoriePrestation`
--

LOCK TABLES `categoriePrestation` WRITE;
/*!40000 ALTER TABLE `categoriePrestation` DISABLE KEYS */;
INSERT INTO `categoriePrestation` VALUES (1,'demonstration\r'),(2,'spectacle\r'),(3,'activite interactive\r'),(4,'vente\r');
/*!40000 ALTER TABLE `categoriePrestation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client`
--

DROP TABLE IF EXISTS `client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client` (
  `idClient` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  PRIMARY KEY (`idClient`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client`
--

LOCK TABLES `client` WRITE;
/*!40000 ALTER TABLE `client` DISABLE KEYS */;
INSERT INTO `client` VALUES (1,'client1',12),(2,'client2',16),(3,'client3',22),(4,'client4',48),(5,'client5',77),(6,'client6',56),(7,'client7',62),(8,'client8',14),(9,'client9',18),(10,'client10',33);
/*!40000 ALTER TABLE `client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `emplacement`
--

DROP TABLE IF EXISTS `emplacement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `emplacement` (
  `idEmplacement` int(11) NOT NULL AUTO_INCREMENT,
  `libelleEmplacement` varchar(50) DEFAULT NULL,
  `idCaracteristique` int(11) NOT NULL,
  `idLocalisation` int(11) NOT NULL,
  PRIMARY KEY (`idEmplacement`),
  KEY `idCaracteristique` (`idCaracteristique`),
  KEY `idLocalisation` (`idLocalisation`),
  CONSTRAINT `emplacement_ibfk_1` FOREIGN KEY (`idCaracteristique`) REFERENCES `caracteristique` (`idCaracteristique`),
  CONSTRAINT `emplacement_ibfk_2` FOREIGN KEY (`idLocalisation`) REFERENCES `localisation` (`idLocalisation`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `emplacement`
--

LOCK TABLES `emplacement` WRITE;
/*!40000 ALTER TABLE `emplacement` DISABLE KEYS */;
INSERT INTO `emplacement` VALUES (1,'Chateau',1,1),(2,'Cour',2,1),(3,'Ferme',3,1),(4,'Rempart',4,1),(5,'Donjon',5,1);
/*!40000 ALTER TABLE `emplacement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `est_admin`
--

DROP TABLE IF EXISTS `est_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `est_admin` (
  `idAdmin` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  PRIMARY KEY (`idAdmin`,`idUtilisateur`),
  KEY `idUtilisateur` (`idUtilisateur`),
  CONSTRAINT `est_admin_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admin` (`idAdmin`),
  CONSTRAINT `est_admin_ibfk_2` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `est_admin`
--

LOCK TABLES `est_admin` WRITE;
/*!40000 ALTER TABLE `est_admin` DISABLE KEYS */;
/*!40000 ALTER TABLE `est_admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `est_client`
--

DROP TABLE IF EXISTS `est_client`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `est_client` (
  `idClient` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  PRIMARY KEY (`idClient`,`idUtilisateur`),
  KEY `idUtilisateur` (`idUtilisateur`),
  CONSTRAINT `est_client_ibfk_1` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`),
  CONSTRAINT `est_client_ibfk_2` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `est_client`
--

LOCK TABLES `est_client` WRITE;
/*!40000 ALTER TABLE `est_client` DISABLE KEYS */;
INSERT INTO `est_client` VALUES (1,3);
/*!40000 ALTER TABLE `est_client` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `est_prestataire`
--

DROP TABLE IF EXISTS `est_prestataire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `est_prestataire` (
  `idPrestataire` int(11) NOT NULL,
  `idUtilisateur` int(11) NOT NULL,
  PRIMARY KEY (`idPrestataire`,`idUtilisateur`),
  KEY `idUtilisateur` (`idUtilisateur`),
  CONSTRAINT `est_prestataire_ibfk_1` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`),
  CONSTRAINT `est_prestataire_ibfk_2` FOREIGN KEY (`idUtilisateur`) REFERENCES `utilisateur` (`idUtilisateur`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `est_prestataire`
--

LOCK TABLES `est_prestataire` WRITE;
/*!40000 ALTER TABLE `est_prestataire` DISABLE KEYS */;
INSERT INTO `est_prestataire` VALUES (1,2);
/*!40000 ALTER TABLE `est_prestataire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gere`
--

DROP TABLE IF EXISTS `gere`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gere` (
  `idPrestataire` int(11) NOT NULL AUTO_INCREMENT,
  `idAdmin` int(11) NOT NULL,
  PRIMARY KEY (`idPrestataire`,`idAdmin`),
  KEY `idAdmin` (`idAdmin`),
  CONSTRAINT `gere_ibfk_1` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`),
  CONSTRAINT `gere_ibfk_2` FOREIGN KEY (`idAdmin`) REFERENCES `admin` (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gere`
--

LOCK TABLES `gere` WRITE;
/*!40000 ALTER TABLE `gere` DISABLE KEYS */;
INSERT INTO `gere` VALUES (1,1),(2,1),(3,1),(4,1),(5,1);
/*!40000 ALTER TABLE `gere` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `localisation`
--

DROP TABLE IF EXISTS `localisation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `localisation` (
  `idLocalisation` int(11) NOT NULL AUTO_INCREMENT,
  `libelleLocalisation` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idLocalisation`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `localisation`
--

LOCK TABLES `localisation` WRITE;
/*!40000 ALTER TABLE `localisation` DISABLE KEYS */;
INSERT INTO `localisation` VALUES (1,'zinzin');
/*!40000 ALTER TABLE `localisation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modify`
--

DROP TABLE IF EXISTS `modify`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modify` (
  `idPrestataire` int(11) NOT NULL,
  `idClient` int(11) NOT NULL,
  `heureVisite` time DEFAULT NULL,
  PRIMARY KEY (`idPrestataire`,`idClient`),
  KEY `idClient` (`idClient`),
  CONSTRAINT `modify_ibfk_1` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`),
  CONSTRAINT `modify_ibfk_2` FOREIGN KEY (`idClient`) REFERENCES `client` (`idClient`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modify`
--

LOCK TABLES `modify` WRITE;
/*!40000 ALTER TABLE `modify` DISABLE KEYS */;
INSERT INTO `modify` VALUES (1,1,'17:00:00'),(2,2,'18:00:00'),(3,3,'10:00:00'),(4,4,'18:00:00'),(5,5,'21:00:00'),(6,6,'14:00:00');
/*!40000 ALTER TABLE `modify` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `possede`
--

DROP TABLE IF EXISTS `possede`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `possede` (
  `idPrestataire` int(11) NOT NULL,
  `idBesoin` int(11) NOT NULL,
  PRIMARY KEY (`idPrestataire`,`idBesoin`),
  KEY `idBesoin` (`idBesoin`),
  CONSTRAINT `possede_ibfk_1` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`),
  CONSTRAINT `possede_ibfk_2` FOREIGN KEY (`idBesoin`) REFERENCES `besoin` (`idBesoin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `possede`
--

LOCK TABLES `possede` WRITE;
/*!40000 ALTER TABLE `possede` DISABLE KEYS */;
INSERT INTO `possede` VALUES (1,1),(1,2),(1,3),(2,1),(3,1),(3,4);
/*!40000 ALTER TABLE `possede` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prestataire`
--

DROP TABLE IF EXISTS `prestataire`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `prestataire` (
  `idPrestataire` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) DEFAULT NULL,
  `presenceHoraire` varchar(50) DEFAULT NULL,
  `textePrestataire` text DEFAULT NULL,
  `imagePrestataire` varchar(50) DEFAULT NULL,
  `idCategorie` int(11) NOT NULL,
  PRIMARY KEY (`idPrestataire`),
  KEY `idCategorie` (`idCategorie`),
  CONSTRAINT `prestataire_ibfk_1` FOREIGN KEY (`idCategorie`) REFERENCES `categoriePrestation` (`idCategorie`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prestataire`
--

LOCK TABLES `prestataire` WRITE;
/*!40000 ALTER TABLE `prestataire` DISABLE KEYS */;
INSERT INTO `prestataire` VALUES (1,'forge','abc','forge','blablablablabla',3),(2,'calligraphie','efg','calligraphie','blablablablabla',3),(3,'combat de chevalier','hij','combat','blablablablabla',2),(4,'tir à l’arc','klm','arc','blablablablabla',1),(5,'fauconnerie','nop','fauconnerie','blablablablabla',2),(6,'joute','qrs','joute','blablablablabla',2),(7,'vie des gens de l’époque','tuv','gens','blablablablabla',1),(8,'musique ancienne','wxy','musique','blablablablabla',2),(9,'théâtre','zab','théâtre','blablablablabla',2),(10,'sculpture','cde','sculpture','blablablablabla',3),(11,'ferme','fgh','ferme','blablablablabla',3),(12,'boutique de vétêment médiévaux','ijk','vetêment','blablablablabla',4),(13,'cuisine ancienne','lmn','cuisine','blablablablabla',4);
/*!40000 ALTER TABLE `prestataire` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `produit`
--

DROP TABLE IF EXISTS `produit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `produit` (
  `idService` int(11) NOT NULL,
  `idStatistique` int(11) NOT NULL,
  PRIMARY KEY (`idService`,`idStatistique`),
  KEY `idStatistique` (`idStatistique`),
  CONSTRAINT `produit_ibfk_1` FOREIGN KEY (`idService`) REFERENCES `service` (`idService`),
  CONSTRAINT `produit_ibfk_2` FOREIGN KEY (`idStatistique`) REFERENCES `statistique` (`idStatistique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produit`
--

LOCK TABLES `produit` WRITE;
/*!40000 ALTER TABLE `produit` DISABLE KEYS */;
INSERT INTO `produit` VALUES (1,1),(2,2),(3,3),(4,4),(5,5);
/*!40000 ALTER TABLE `produit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `repond`
--

DROP TABLE IF EXISTS `repond`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `repond` (
  `idBesoin` int(11) NOT NULL,
  `idCaracteristique` int(11) NOT NULL,
  PRIMARY KEY (`idBesoin`,`idCaracteristique`),
  KEY `idCaracteristique` (`idCaracteristique`),
  CONSTRAINT `repond_ibfk_1` FOREIGN KEY (`idBesoin`) REFERENCES `besoin` (`idBesoin`),
  CONSTRAINT `repond_ibfk_2` FOREIGN KEY (`idCaracteristique`) REFERENCES `caracteristique` (`idCaracteristique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `repond`
--

LOCK TABLES `repond` WRITE;
/*!40000 ALTER TABLE `repond` DISABLE KEYS */;
INSERT INTO `repond` VALUES (1,1),(2,2),(3,3),(4,4),(5,5);
/*!40000 ALTER TABLE `repond` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `service`
--

DROP TABLE IF EXISTS `service`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `service` (
  `idService` int(11) NOT NULL AUTO_INCREMENT,
  `libelleService` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idService`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `service`
--

LOCK TABLES `service` WRITE;
/*!40000 ALTER TABLE `service` DISABLE KEYS */;
INSERT INTO `service` VALUES (1,'vente merchandising \r'),(2,'réservation de place\r'),(3,'demande de renseignement via mail\r'),(4,'formulaire de satisfaction\r'),(5,'comptage visiteurs\r'),(6,'visualisation graphique de l’affluence\r');
/*!40000 ALTER TABLE `service` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `situe`
--

DROP TABLE IF EXISTS `situe`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `situe` (
  `idEmplacement` int(11) NOT NULL,
  `horaireDebut` time NOT NULL,
  `horaireFin` time DEFAULT NULL,
  `idPrestataire` int(11) NOT NULL,
  PRIMARY KEY (`idEmplacement`,`idPrestataire`,`horaireDebut`),
  KEY `idPrestataire` (`idPrestataire`),
  CONSTRAINT `situe_ibfk_1` FOREIGN KEY (`idEmplacement`) REFERENCES `emplacement` (`idEmplacement`),
  CONSTRAINT `situe_ibfk_2` FOREIGN KEY (`idPrestataire`) REFERENCES `prestataire` (`idPrestataire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `situe`
--

LOCK TABLES `situe` WRITE;
/*!40000 ALTER TABLE `situe` DISABLE KEYS */;
INSERT INTO `situe` VALUES (1,'14:00:00','15:00:00',1),(1,'17:00:00','18:00:00',4),(2,'08:00:37','09:55:00',1),(2,'15:05:00','16:00:00',2),(2,'10:00:00','12:00:00',5),(3,'17:30:20','19:00:00',1),(3,'15:00:05','17:00:00',3),(3,'14:00:00','15:00:00',4),(3,'08:00:10','12:17:00',5),(4,'08:00:00','12:00:00',6),(4,'14:00:00','18:00:00',6);
/*!40000 ALTER TABLE `situe` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statistique`
--

DROP TABLE IF EXISTS `statistique`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `statistique` (
  `idStatistique` int(11) NOT NULL AUTO_INCREMENT,
  `libelleStatistique` varchar(50) DEFAULT NULL,
  `valeur` decimal(15,2) DEFAULT NULL,
  PRIMARY KEY (`idStatistique`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statistique`
--

LOCK TABLES `statistique` WRITE;
/*!40000 ALTER TABLE `statistique` DISABLE KEYS */;
INSERT INTO `statistique` VALUES (1,'affluence\r',NULL),(2,'nombre de personne dans le parc\r',NULL),(3,'age moyen\r',NULL),(4,'nombre de personne à un spectacle donné\r',NULL),(5,'nombre de personne à une activité donné\r',NULL);
/*!40000 ALTER TABLE `statistique` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `utilisateur`
--

DROP TABLE IF EXISTS `utilisateur`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `utilisateur` (
  `idUtilisateur` int(11) NOT NULL AUTO_INCREMENT,
  `typeCompte` int(11) DEFAULT NULL,
  `mdp` varchar(50) DEFAULT NULL,
  `login` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`idUtilisateur`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `utilisateur`
--

LOCK TABLES `utilisateur` WRITE;
/*!40000 ALTER TABLE `utilisateur` DISABLE KEYS */;
INSERT INTO `utilisateur` VALUES (1,1,'123','user1\r'),(2,2,'345','user2\r'),(3,3,'678','user3\r');
/*!40000 ALTER TABLE `utilisateur` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `visionne`
--

DROP TABLE IF EXISTS `visionne`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `visionne` (
  `idAdmin` int(11) NOT NULL,
  `idStatistique` int(11) NOT NULL,
  PRIMARY KEY (`idAdmin`,`idStatistique`),
  KEY `idStatistique` (`idStatistique`),
  CONSTRAINT `visionne_ibfk_1` FOREIGN KEY (`idAdmin`) REFERENCES `admin` (`idAdmin`),
  CONSTRAINT `visionne_ibfk_2` FOREIGN KEY (`idStatistique`) REFERENCES `statistique` (`idStatistique`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `visionne`
--

LOCK TABLES `visionne` WRITE;
/*!40000 ALTER TABLE `visionne` DISABLE KEYS */;
INSERT INTO `visionne` VALUES (1,1),(1,2),(1,3),(1,4),(1,5);
/*!40000 ALTER TABLE `visionne` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-10 15:37:01
