# EasyToDrive

EasyToDrive est une plateforme en ligne dédiée à la gestion et à l'affichage des résultats et statistiques des élèves d'une auto-école. Ce système permet aux responsables des auto-écoles de consulter les résultats des élèves sur divers examens, simulations, et tests, tout en assurant une gestion centralisée des informations liées aux élèves et à leur progression.

Les moniteurs d'auto-école peuvent consulter les résultats des examens passés par les élèves, voir les tests qu'ils ont effectués et obtenir un aperçu de leurs performances. Ce projet est conçu pour améliorer l'efficacité de la gestion des données dans les auto-écoles et aider les élèves à suivre leurs performances en temps réel.
## Lien Figma
https://www.figma.com/design/91s6pGyuDzWGonWTL4Mm9U/EasyToDrive-Prototype?node
-id=151-472&t=ge82BfqJ4LLHHihB-1

## Table des matières



- [Dépendence](#dépendances)
- [Installation](#installation)
- [MCD](#mcd-modèle-conceptuel-de-données)
- [MPD](#mpd-modèle-physique-de-données)

## Dépendances

- [Node.js](https://nodejs.org/) (pour Angular)
- [NPM](https://www.npmjs.com/) (Node Package Manager, installé avec Node.js)
- [XAMPP](https://www.apachefriends.org/index.html) (pour PHP et MySQL)
- [Composer](https://getcomposer.org/) (gestion des dépendences PHP)

## Installation

1. Cloner le projet dans un dossier de développement local :
```
git clone https://github.com/Ken-Dinh/EasyToDrive.git
```

2. Accédez au répertoire racine du projet :
```bash
cd EasyToDrive
```
3. Installer les modules NPM nécessaires pour le projet Angular :
```bash
npm install
```

4. Installer les dépendances PHP pour l'API :
- Allez dans le répertoire de l'API :
    ```bash
    cd api/easytodrive
    ```

- Installez Firebase JWT pour la gestion des tokens :
    ```bash
    composer require firebase/php-jwt
    ```

5. Déplacez le dossier api/easytodrive dans le dossier htdocs de XAMPP.
6. Démarrez le serveur Apache et MySQL à partir du panneau de contrôle XAMPP pour faire tourner l'API.

7. Lancer l'application Angular :
- Retournez dans le répertoire racine du projet :
    ```bash
    cd ..
    ```
- Lancez l'application Angular avec la commande suivante :
    ```bash
    ng s
    ```

## Comptes à utiliser:
Compte élève:
Titouan.Kawden ; 123456789
Liam.cheurfa ; 123456789

Compte Auto-école:
AutoEcoleLyonSud ; pass123
EcoleConduiteNice ; pass123

Compte Admin:
menthe_et_cristaux ; admin

## MCD (Modèle Conceptuel de Données)
![image](./resources/EasyToDrive%20MCD.png)

## MPD (Modèle Physique de Données)
![image](./resources/EasyToDrive%20MPD.png)
