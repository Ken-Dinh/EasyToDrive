-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2025 at 06:48 PM
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
-- Database: `easytodrive`
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
(1, 1, 'Prénom.NOM', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-01-12', '3 rue des rougets', 77580, 'crécy-la-chapelle', '2025-03-11 10:28:25', '18464', 'B', 0);

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
  MODIFY `eleve_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

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
