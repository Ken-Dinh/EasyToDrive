INSERT INTO `admin` (`admin_id`, `login`, `password`) VALUES
(1, 'menthe_et_cristaux', 'a9b05c98c5594ab1c15fe824008ca1b224404580bbc27caaedb1804a1427e1dd');

INSERT INTO `autoecole` (`autoecole_id`, `nom`, `password`) VALUES
(1, 'auto-école Coubertin', '17b6f67f42c9c2295eef9ef4da41187eb6692f6b4a715bf0509ed69447ea591f');

INSERT INTO `eleve` (`eleve_id`, `autoecole_id`, `login`, `password`, `naissance`, `rue`, `cp`, `ville`, `date_inscription`, `neph`, `note_etg`, `validation_etg`) VALUES
(1, 1, 'Prénom.NOM', '123456789', '2005-01-12', '3 rue des rougets', 77580, 'crécy-la-chapelle', '2025-03-11 11:28:25', '18464', 'B', 0);

INSERT INTO `examen` (`examen_id`, `date`, `score`) VALUES
(1, '2025-03-13 13:10:05', 15);

INSERT INTO `avis` (`avis_id`, `eleve_id`, `contenu`, `date_publication`) VALUES
(1, 1, 'c nul', '2025-03-11 11:39:41');

INSERT INTO `eleve_examen` (`eleve_id`, `examen_id`) VALUES
(1, 1);

INSERT INTO `simulation` (`simulation_id`, `date`, `validation`, `examen_id`) VALUES
(1, '2025-03-13 13:10:51', 1, 1);

INSERT INTO `test` (`test_id`, `examen_id`, `theme`, `date`, `score`) VALUES
(1, 1, 'securité', '2025-03-13 13:10:37', 15);