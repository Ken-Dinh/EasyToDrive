-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : mer. 19 mars 2025 à 14:41
-- Version du serveur : 10.4.28-MariaDB
-- Version de PHP : 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `easytodrive`
--

-- --------------------------------------------------------

--
-- Structure de la table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(6) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `admin`
--

INSERT INTO `admin` (`admin_id`, `login`, `password`) VALUES
(1, 'menthe_et_cristaux', 'a9b05c98c5594ab1c15fe824008ca1b224404580bbc27caaedb1804a1427e1dd');

-- --------------------------------------------------------

--
-- Structure de la table `autoecole`
--

CREATE TABLE `autoecole` (
  `autoecole_id` int(6) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `autoecole`
--

INSERT INTO `autoecole` (`autoecole_id`, `nom`, `password`) VALUES
(1, 'auto-école Coubertin', '17b6f67f42c9c2295eef9ef4da41187eb6692f6b4a715bf0509ed69447ea591f'),
(2, 'AutoEcoleLyonSud', 'pass123'),
(3, 'ConduiteProParis', 'pass123'),
(4, 'PermisFacileMarseille', 'pass123'),
(5, 'EcoleConduiteNice', 'pass123'),
(6, 'AutoEcoleBordeaux', 'pass123'),
(7, 'ConduiteSureLille', 'pass123'),
(8, 'PermisExpressToulouse', 'pass123'),
(9, 'EcoleDuVolantNantes', 'pass123'),
(10, 'AutoEcoleStrasbourg', 'pass123');

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `avis_id` int(6) NOT NULL,
  `eleve_id` int(6) NOT NULL,
  `contenu` varchar(2000) DEFAULT NULL,
  `date_publication` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`avis_id`, `eleve_id`, `contenu`, `date_publication`) VALUES
(1, 1, 'c nul', '2025-03-11 10:39:41');

-- --------------------------------------------------------

--
-- Structure de la table `eleve`
--

CREATE TABLE `eleve` (
  `eleve_id` int(6) NOT NULL,
  `autoecole_id` int(6) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `naissance` date NOT NULL,
  `rue` varchar(255) NOT NULL,
  `cp` int(5) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `date_inscription` timestamp NOT NULL DEFAULT current_timestamp(),
  `neph` varchar(50) NOT NULL,
  `note_etg` char(5) NOT NULL,
  `validation_etg` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `eleve`
--

INSERT INTO `eleve` (`eleve_id`, `autoecole_id`, `login`, `password`, `naissance`, `rue`, `cp`, `ville`, `date_inscription`, `neph`, `note_etg`, `validation_etg`) VALUES
(1, 1, 'Prénom.NOM', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-01-12', '3 rue des rougets', 77580, 'crécy-la-chapelle', '2025-03-11 10:28:25', '18464', 'B', 0);

-- --------------------------------------------------------

--
-- Structure de la table `eleve_examen`
--

CREATE TABLE `eleve_examen` (
  `eleve_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `note` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `eleve_examen`
--

INSERT INTO `eleve_examen` (`eleve_id`, `examen_id`, `note`) VALUES
(1, 1, 0);

-- --------------------------------------------------------

--
-- Structure de la table `examen`
--

CREATE TABLE `examen` (
  `examen_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `examen`
--

INSERT INTO `examen` (`examen_id`, `date`, `score`) VALUES
(1, '2025-03-13 12:10:05', 15);

-- --------------------------------------------------------

--
-- Structure de la table `simulation`
--

CREATE TABLE `simulation` (
  `simulation_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `validation` tinyint(1) NOT NULL,
  `examen_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `simulation`
--

INSERT INTO `simulation` (`simulation_id`, `date`, `validation`, `examen_id`) VALUES
(1, '2025-03-13 12:10:51', 1, 1);

-- --------------------------------------------------------

--
-- Structure de la table `test`
--

CREATE TABLE `test` (
  `test_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `theme` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `test`
--

INSERT INTO `test` (`test_id`, `examen_id`, `theme`, `date`, `score`) VALUES
(1, 1, 'securité', '2025-03-13 12:10:37', 15);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Index pour la table `autoecole`
--
ALTER TABLE `autoecole`
  ADD PRIMARY KEY (`autoecole_id`),
  ADD UNIQUE KEY `nom` (`nom`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`avis_id`),
  ADD KEY `eleve_id` (`eleve_id`);

--
-- Index pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`eleve_id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD KEY `autoecole_id` (`autoecole_id`);

--
-- Index pour la table `eleve_examen`
--
ALTER TABLE `eleve_examen`
  ADD PRIMARY KEY (`eleve_id`,`examen_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- Index pour la table `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`examen_id`);

--
-- Index pour la table `simulation`
--
ALTER TABLE `simulation`
  ADD PRIMARY KEY (`simulation_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- Index pour la table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`test_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `autoecole`
--
ALTER TABLE `autoecole`
  MODIFY `autoecole_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `avis_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `eleve_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `examen`
--
ALTER TABLE `examen`
  MODIFY `examen_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `simulation`
--
ALTER TABLE `simulation`
  MODIFY `simulation_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT pour la table `test`
--
ALTER TABLE `test`
  MODIFY `test_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`);

--
-- Contraintes pour la table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`autoecole_id`) REFERENCES `autoecole` (`autoecole_id`);

--
-- Contraintes pour la table `eleve_examen`
--
ALTER TABLE `eleve_examen`
  ADD CONSTRAINT `eleve_examen_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`),
  ADD CONSTRAINT `eleve_examen_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

--
-- Contraintes pour la table `simulation`
--
ALTER TABLE `simulation`
  ADD CONSTRAINT `simulation_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

--
-- Contraintes pour la table `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
