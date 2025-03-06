CREATE TABLE `admin` (
  `admin_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
);

CREATE TABLE `eleve` (
  `eleve_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `autoecole_id` int(6) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `naissance` date NOT NULL,
  `rue` varchar(255) NOT NULL,
  `cp` int(5) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `date_inscription` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `npeh` varchar(50) NOT NULL,
  `note_etg` char(5) NOT NULL,
  `validation_etg` boolean NOT NULL
);

CREATE TABLE `autoecole` (
  `autoecole_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) NOT NULL
);

CREATE TABLE `avis` (
  `avis_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `eleve_id` int(6) NOT NULL,
  `contenu` varchar(2000),
  `date_publication` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL
);

CREATE TABLE `examen` (
  `examen_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `score` float(20) NOT NULL
);

CREATE TABLE `eleve_examen` (
  `eleve_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  PRIMARY KEY (`eleve_id`, `examen_id`)
);

CREATE TABLE `test` (
  `test_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `examen_id` int(6) NOT NULL,
  `theme` varchar(100) NOT NULL,
  `date` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `score` float(20) NOT NULL
);

CREATE TABLE `simulation` (
  `simulation_id` int(6) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `date` timestamp DEFAULT CURRENT_TIMESTAMP NOT NULL,
  `validation` boolean NOT NULL,
  `examen_id` int(6) NOT NULL
);

ALTER TABLE `eleve_examen` ADD FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`);

ALTER TABLE `eleve_examen` ADD FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

ALTER TABLE `test` ADD FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

ALTER TABLE `avis` ADD FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`);

ALTER TABLE `eleve` ADD FOREIGN KEY (`autoecole_id`) REFERENCES `autoecole` (`autoecole_id`);

ALTER TABLE `simulation` ADD FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);
