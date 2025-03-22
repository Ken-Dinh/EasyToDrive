-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 22, 2025 at 04:20 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sae-402`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(6) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `login`, `password`) VALUES
(1, 'menthe_et_cristaux', '$2y$10$m.m/x0Lm6ZJ9uekJMJx2D.2GmoUZPsDDCV8Z.yHV7fwZZaeH7msQG');

-- --------------------------------------------------------

--
-- Table structure for table `autoecole`
--

CREATE TABLE `autoecole` (
  `autoecole_id` int(6) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `autoecole`
--

INSERT INTO `autoecole` (`autoecole_id`, `nom`, `password`) VALUES
(1, 'auto-école Coubertin', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(2, 'AutoEcoleLyonSud', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(3, 'ConduiteProParis', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(4, 'PermisFacileMarseille', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(5, 'EcoleConduiteNice', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(6, 'AutoEcoleBordeaux', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(7, 'ConduiteSureLille', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(8, 'PermisExpressToulouse', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(9, 'EcoleDuVolantNantes', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi'),
(10, 'AutoEcoleStrasbourg', '$2y$10$nSh.JdF/iptAJApjwWatk.v45HOcAE5J1hMw6P86gFIQkqdcbK3gi');

-- --------------------------------------------------------

--
-- Table structure for table `avis`
--

CREATE TABLE `avis` (
  `avis_id` int(6) NOT NULL,
  `eleve_id` int(6) NOT NULL,
  `contenu` varchar(2000) DEFAULT NULL,
  `date_publication` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `avis`
--

INSERT INTO `avis` (`avis_id`, `eleve_id`, `contenu`, `date_publication`) VALUES
(1, 1, 'c nul', '2025-03-11 10:39:41');

-- --------------------------------------------------------

--
-- Table structure for table `eleve`
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
-- Dumping data for table `eleve`
--

INSERT INTO `eleve` (`eleve_id`, `autoecole_id`, `login`, `password`, `naissance`, `rue`, `cp`, `ville`, `date_inscription`, `neph`, `note_etg`, `validation_etg`) VALUES
(1, 1, 'Prénom.NOM', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-01-12', '3 rue des rougets', 77580, 'crécy-la-chapelle', '2025-03-11 10:28:25', '18464', 'B', 0),
(2, 6, 'Esteban.DELVIGNE', '92a029fdbd90499a8958b2ec5c7126d884cba699006a4bb3406ccb6f6b9fc3ba', '2000-06-15', '27 rue des poiriers', 93800, 'quelque pars', '2025-03-22 14:56:30', '984134614511', 'A', 0),
(3, 5, 'Liam.cheurfa', '1397df2c13dd262445c188244dc314c59eb90fc6cc82f3164698144e2167489f', '2004-07-17', '30 avenue des sablier', 94300, 'val-de-Marne', '2025-03-22 14:56:30', '700224007914', 'B', 0),
(4, 5, 'Ken.dihn', '2ed2ec006e71591795d44e62a56e670da381eb519b6ec830537031e47a68994e', '2003-11-12', '718 Voie de la Chaussée-d\'Antin', 83970, 'Roinvilliole', '2025-03-22 14:56:30', '630465010753', 'A2', 0),
(5, 3, 'Timo.Muesly', '9261c84915fcd803ec1dc72d649a4ee52c0b77305ee097e3543a453a2c14adb3', '1989-10-07', '19 Rue Mouffetard', 34387, 'Alissat', '2025-03-22 15:04:42', '415293279421', 'A', 0),
(6, 5, 'Alice.Allie', '0e2ee76d09e185847f55d4105ccadac5d38731b5f7406ccdc331e3035a837635', '2004-03-09', '888 Avenue Zadkine', 54993, 'Léthun', '2025-03-22 15:04:42', '341170712492', 'B', 0),
(7, 1, 'Tristan.Triman', 'ea2c82f8d4fc6b2445eeead94dbf8792b1d2627ec4b2be6fae279739a510e9b1', '2002-04-08', '42 Allée d\'Assas', 24084, 'Paillemagna', '2025-03-22 15:04:42', '059852405269', 'A', 0),
(8, 3, 'Titouan.Kawden', '9eb058ae5dfe4ea77f3b3a75fb9a4a815ea1ea95fc0e5305dd6215c8827a497e', '1997-08-20', '6 Allée de Presbourg', 8159, 'La Tallud', '2025-03-22 15:07:49', '734423967029', 'B', 0),
(9, 4, 'Mathieu.Themimo', '85cba1a4d633d1a440dc8506ac209e45a36b3c55659bb842bd80f9a4025b47b5', '1995-01-14', '731 Rue Saint-Denis', 89966, 'Ménarthe', '2025-03-22 15:07:49', '007616919026', 'B', 0),
(10, 8, 'Mathias.Ectoganon', 'a414c67edbca92d1fffd2d20ec23d0c9b1bb5c8fc1fe2704de0186952c9bf204', '2004-03-20', '17 Rue du Chat-qui-Pêche', 17260, 'Meaux', '2025-03-22 15:17:45', '100059198617', 'B', 0),
(11, 9, 'Marjorie.Pili', '45a02687be5e86383ee271f93e4e5ee7a90ae1d38bc4d5247040523f0a570b38', '1989-12-28', '560 Place La Boétie', 99488, 'Zermes', '2025-03-22 15:17:45', '135163560921', 'B', 0),
(12, 7, 'Thylia.Justme_', '814d1962a48f464d53c884594a8d510e109e2a0fb97e69e8432089e0ccacb7fe', '2002-10-05', '04 Impasse de l\'Odéon', 44563, 'Chalvadou', '2025-03-22 15:17:45', '984134007914', 'A', 0),
(13, 10, 'Timothée.Carpentier', '6f6d973e9fa970d26af778b8307d56922f42e7569c90c384a83692a747a81529', '2005-09-11', '5 Boulevard de Tilsitt', 18873, 'Pailland', '2025-03-22 15:17:45', '984134010753', 'B', 0),
(14, 2, 'Ethan.B4rl00f', '94331107af298292e39b6ba5057d553f3b8024ba6794b38175ba7eb81dcf7f94', '2005-08-16', '5879 Passage de la Pompe', 84426, 'Pradinhac', '2025-03-22 15:17:45', '010753700224', 'B', 0);

-- --------------------------------------------------------

--
-- Table structure for table `eleve_examen`
--

CREATE TABLE `eleve_examen` (
  `eleve_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `note` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `eleve_examen`
--

INSERT INTO `eleve_examen` (`eleve_id`, `examen_id`, `note`) VALUES
(1, 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `examen`
--

CREATE TABLE `examen` (
  `examen_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `examen`
--

INSERT INTO `examen` (`examen_id`, `date`, `score`) VALUES
(1, '2025-03-13 12:10:05', 15);

-- --------------------------------------------------------

--
-- Table structure for table `simulation`
--

CREATE TABLE `simulation` (
  `simulation_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `validation` tinyint(1) NOT NULL,
  `examen_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `simulation`
--

INSERT INTO `simulation` (`simulation_id`, `date`, `validation`, `examen_id`) VALUES
(1, '2025-03-13 12:10:51', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `test`
--

CREATE TABLE `test` (
  `test_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `theme` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `test`
--

INSERT INTO `test` (`test_id`, `examen_id`, `theme`, `date`, `score`) VALUES
(1, 1, 'securité', '2025-03-13 12:10:37', 15);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `login` (`login`);

--
-- Indexes for table `autoecole`
--
ALTER TABLE `autoecole`
  ADD PRIMARY KEY (`autoecole_id`),
  ADD UNIQUE KEY `nom` (`nom`);

--
-- Indexes for table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`avis_id`),
  ADD KEY `eleve_id` (`eleve_id`);

--
-- Indexes for table `eleve`
--
ALTER TABLE `eleve`
  ADD PRIMARY KEY (`eleve_id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD KEY `autoecole_id` (`autoecole_id`);

--
-- Indexes for table `eleve_examen`
--
ALTER TABLE `eleve_examen`
  ADD PRIMARY KEY (`eleve_id`,`examen_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- Indexes for table `examen`
--
ALTER TABLE `examen`
  ADD PRIMARY KEY (`examen_id`);

--
-- Indexes for table `simulation`
--
ALTER TABLE `simulation`
  ADD PRIMARY KEY (`simulation_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- Indexes for table `test`
--
ALTER TABLE `test`
  ADD PRIMARY KEY (`test_id`),
  ADD KEY `examen_id` (`examen_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `autoecole`
--
ALTER TABLE `autoecole`
  MODIFY `autoecole_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `avis`
--
ALTER TABLE `avis`
  MODIFY `avis_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `eleve`
--
ALTER TABLE `eleve`
  MODIFY `eleve_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `examen`
--
ALTER TABLE `examen`
  MODIFY `examen_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `simulation`
--
ALTER TABLE `simulation`
  MODIFY `simulation_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `test`
--
ALTER TABLE `test`
  MODIFY `test_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`);

--
-- Constraints for table `eleve`
--
ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`autoecole_id`) REFERENCES `autoecole` (`autoecole_id`);

--
-- Constraints for table `eleve_examen`
--
ALTER TABLE `eleve_examen`
  ADD CONSTRAINT `eleve_examen_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`),
  ADD CONSTRAINT `eleve_examen_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

--
-- Constraints for table `simulation`
--
ALTER TABLE `simulation`
  ADD CONSTRAINT `simulation_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

--
-- Constraints for table `test`
--
ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
