CREATE DATABASE IF NOT EXISTS easytodrive;
USE easytodrive;

CREATE TABLE IF NOT EXISTS `admin` (
  `admin_id` int(6) NOT NULL,
  `login` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `admin` (`admin_id`, `login`, `password`) VALUES
(1, 'menthe_et_cristaux', '$2y$10$m.m/x0Lm6ZJ9uekJMJx2D.2GmoUZPsDDCV8Z.yHV7fwZZaeH7msQG');

CREATE TABLE IF NOT EXISTS `autoecole` (
  `autoecole_id` int(6) NOT NULL,
  `nom` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

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

CREATE TABLE IF NOT EXISTS `avis` (
  `avis_id` int(6) NOT NULL,
  `eleve_id` int(6) NOT NULL,
  `contenu` varchar(2000) DEFAULT NULL,
  `date_publication` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `avis` (`avis_id`, `eleve_id`, `contenu`, `date_publication`) VALUES
(1, 1, 'c nul', '2025-03-11 10:39:41');

CREATE TABLE IF NOT EXISTS `eleve` (
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

INSERT INTO `eleve` (`eleve_id`, `autoecole_id`, `login`, `password`, `naissance`, `rue`, `cp`, `ville`, `date_inscription`, `neph`, `note_etg`, `validation_etg`) VALUES
(1, 1, 'Prénom.NOM', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-01-12', '3 rue des rougets', 77580, 'crécy-la-chapelle', '2025-03-11 10:28:25', '18464', 'B', 0),
(2, 6, 'Esteban.DELVIGNE', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2000-06-15', '27 rue des poiriers', 93800, 'quelque pars', '2025-03-22 14:56:30', '984134614511', 'A', 0),
(3, 5, 'Liam.cheurfa', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2004-07-17', '30 avenue des sablier', 94300, 'val-de-Marne', '2025-03-22 14:56:30', '700224007914', 'B', 0),
(4, 5, 'Ken.dihn', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2003-11-12', '718 Voie de la Chaussée-d\'Antin', 83970, 'Roinvilliole', '2025-03-22 14:56:30', '630465010753', 'A2', 0),
(5, 3, 'Timo.Muesly', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '1989-10-07', '19 Rue Mouffetard', 34387, 'Alissat', '2025-03-22 15:04:42', '415293279421', 'A', 0),
(6, 5, 'Alice.Allie', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2004-03-09', '888 Avenue Zadkine', 54993, 'Léthun', '2025-03-22 15:04:42', '341170712492', 'B', 0),
(7, 1, 'Tristan.Triman', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2002-04-08', '42 Allée d\'Assas', 24084, 'Paillemagna', '2025-03-22 15:04:42', '059852405269', 'A', 0),
(8, 3, 'Titouan.Kawden', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '1997-08-20', '6 Allée de Presbourg', 8159, 'La Tallud', '2025-03-22 15:07:49', '734423967029', 'B', 0),
(9, 4, 'Mathieu.Themimo', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '1995-01-14', '731 Rue Saint-Denis', 89966, 'Ménarthe', '2025-03-22 15:07:49', '007616919026', 'B', 0),
(10, 8, 'Mathias.Ectoganon', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2004-03-20', '17 Rue du Chat-qui-Pêche', 17260, 'Meaux', '2025-03-22 15:17:45', '100059198617', 'B', 0),
(11, 9, 'Marjorie.Pili', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '1989-12-28', '560 Place La Boétie', 99488, 'Zermes', '2025-03-22 15:17:45', '135163560921', 'B', 0),
(12, 7, 'Thylia.Justme_', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2002-10-05', '04 Impasse de l\'Odéon', 44563, 'Chalvadou', '2025-03-22 15:17:45', '984134007914', 'A', 0),
(13, 10, 'Timothée.Carpentier', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-09-11', '5 Boulevard de Tilsitt', 18873, 'Pailland', '2025-03-22 15:17:45', '984134010753', 'B', 0),
(14, 2, 'Ethan.B4rl00f', '$2y$10$nsMh3qqZNW.QsME0zLSl.Ov6z9eucRQjOzBdhFegOXRLOawmMfS06', '2005-08-16', '5879 Passage de la Pompe', 84426, 'Pradinhac', '2025-03-22 15:17:45', '010753700224', 'B', 0);

CREATE TABLE IF NOT EXISTS `eleve_examen` (
  `eleve_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `note` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `eleve_examen` (`eleve_id`, `examen_id`, `note`) VALUES
(1, 1, 0);

CREATE TABLE IF NOT EXISTS `examen` (
  `examen_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `examen` (`examen_id`, `date`, `score`) VALUES
(1, '2025-03-13 12:10:05', 15);

CREATE TABLE IF NOT EXISTS `simulation` (
  `simulation_id` int(6) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `validation` tinyint(1) NOT NULL,
  `examen_id` int(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `simulation` (`simulation_id`, `date`, `validation`, `examen_id`) VALUES
(1, '2025-03-13 12:10:51', 1, 1);

CREATE TABLE IF NOT EXISTS `test` (
  `test_id` int(6) NOT NULL,
  `examen_id` int(6) NOT NULL,
  `theme` varchar(100) NOT NULL,
  `date` timestamp NOT NULL DEFAULT current_timestamp(),
  `score` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `test` (`test_id`, `examen_id`, `theme`, `date`, `score`) VALUES
(1, 1, 'securité', '2025-03-13 12:10:37', 15);

ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`),
  ADD UNIQUE KEY `login` (`login`);

ALTER TABLE `autoecole`
  ADD PRIMARY KEY (`autoecole_id`),
  ADD UNIQUE KEY `nom` (`nom`);

ALTER TABLE `avis`
  ADD PRIMARY KEY (`avis_id`),
  ADD KEY `eleve_id` (`eleve_id`);

ALTER TABLE `eleve`
  ADD PRIMARY KEY (`eleve_id`),
  ADD UNIQUE KEY `login` (`login`),
  ADD KEY `autoecole_id` (`autoecole_id`);

ALTER TABLE `eleve_examen`
  ADD PRIMARY KEY (`eleve_id`,`examen_id`),
  ADD KEY `examen_id` (`examen_id`);

ALTER TABLE `examen`
  ADD PRIMARY KEY (`examen_id`);

ALTER TABLE `simulation`
  ADD PRIMARY KEY (`simulation_id`),
  ADD KEY `examen_id` (`examen_id`);

ALTER TABLE `test`
  ADD PRIMARY KEY (`test_id`),
  ADD KEY `examen_id` (`examen_id`);

ALTER TABLE `admin`
  MODIFY `admin_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `autoecole`
  MODIFY `autoecole_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `avis`
  MODIFY `avis_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `eleve`
  MODIFY `eleve_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

ALTER TABLE `examen`
  MODIFY `examen_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `simulation`
  MODIFY `simulation_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `test`
  MODIFY `test_id` int(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

ALTER TABLE `avis`
  ADD CONSTRAINT `avis_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`);

ALTER TABLE `eleve`
  ADD CONSTRAINT `eleve_ibfk_1` FOREIGN KEY (`autoecole_id`) REFERENCES `autoecole` (`autoecole_id`);

ALTER TABLE `eleve_examen`
  ADD CONSTRAINT `eleve_examen_ibfk_1` FOREIGN KEY (`eleve_id`) REFERENCES `eleve` (`eleve_id`),
  ADD CONSTRAINT `eleve_examen_ibfk_2` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

ALTER TABLE `simulation`
  ADD CONSTRAINT `simulation_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

ALTER TABLE `test`
  ADD CONSTRAINT `test_ibfk_1` FOREIGN KEY (`examen_id`) REFERENCES `examen` (`examen_id`);

COMMIT;