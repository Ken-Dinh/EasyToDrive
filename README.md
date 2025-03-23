# EasyToDrive

Ce site servira à afficher les statistiques des éléves.

## Table des matières

- [Dépendence](#dépendances)
- [Install](#install)

## Dépendances

- [Node.js](https://nodejs.org/) (pour Angular)
- [NPM](https://www.npmjs.com/) (Node Package Manager, installé avec Node.js)
- [XAMPP](https://www.apachefriends.org/index.html) (pour PHP et MySQL)
- [Composer](https://getcomposer.org/) (gestion des dépendences PHP)

## Installation

- Cloner le projet dans un dossier de développement:
```
git clone https://github.com/Ken-Dinh/EasyToDrive.git
```

- Assurez-vous d'être dans le dossier root du projet:
```bash
cd EasyToDrive
```
- Installer les modules pour le projet:
```bash
npm install
```

- Aller dans le dossier api/easytodrive et installer PHP JWT:
```bash
cd api/easytodrive
composer require firebase/php-jwt
```

- Déplacer le dossier api/easytodrive dans le dossier htdocs de XAMPP
- Lancer le server Apache et MySQL avec le panneau de contrôle de XAMPP

- Lancer le site dans le dossier root EasyToDrive:
```bash
ng s
```
