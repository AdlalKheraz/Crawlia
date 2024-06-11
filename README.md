# Crawlia

**Crawlia** est une application web simple pour analyser la performance des pages web. Elle mesure le temps jusqu'au premier octet (TTFB), vérifie les attributs SEO, détecte les liens morts et vérifie la validité des certificats SSL. L'application affiche un loader pendant le traitement des données.

## Prérequis

- Node.js (version 14 ou supérieure)
- pnpm

## Installation

Clonez le dépôt dans votre répertoire local :

```bash
git clone https://github.com/AdlalKheraz/Crawlia.git
cd crawlia
```
## Installez les dépendances du projet :
```bash
pnpm install
```

## Utilisation
Démarrez le serveur :
```bash
node src/app.js
```
Ouvrez votre navigateur et accédez à l'URL suivante :

http://localhost:3000

Entrez l'URL de la page web que vous souhaitez analyser dans le formulaire et cliquez sur "Analyser". Un loader s'affichera pendant que l'application traite les données.

## Structure du Projet
````mermaid
graph TD;
    A[crawlia/] --> B[public/];
    B --> C[index.html];
    A --> D[src/];
    D --> E[app.js];
    D --> F[controllers/];
    F --> G[performanceController.js];
    D --> H[routes/];
    H --> I[performanceTest.js];
    A --> J[views/];
    J --> K[report.ejs];
    A --> L[package.json];
```

## Fichiers Importants
- public/index.html : Contient le formulaire d'entrée de l'URL et le loader.
- src/app.js : Configure le serveur Express et les middlewares.
- src/controllers/performanceController.js : Contient la logique pour effectuer le test de performance et vérifier le certificat SSL.
- src/routes/performanceTest.js : Définit les routes pour les tests de performance.
- views/report.ejs : Affiche les résultats du test de performance.

## Fonctionnalités

- Mesure du TTFB : Mesure le temps jusqu'au premier octet.
- Vérification des attributs SEO : Analyse la méta-description, les balises H1, H2, div, p et les images sans attribut alt.
- Détection des liens morts : Vérifie les liens et détecte ceux qui mènent à des pages 404.
- Vérification SSL : Vérifie la validité du certificat SSL du site.
- Loader : Affiche un loader pendant le traitement des données.