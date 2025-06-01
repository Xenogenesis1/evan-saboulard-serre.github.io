# Portfolio – Evan Saboulard-Serre

Bienvenue sur mon portfolio. Il m'acompagnera tout au long de mes études et après.

## 🚀 Aperçu

Ce projet présente mon parcours, mes projets, mes compétences, mes expériences et mes réalisations.

- **Démo en ligne** : [Voir le site](https://xenogenesis1.github.io/evan-saboulard-serre.github.io/)
- **Technologies principales** : React, Vite, TailwindCSS

---

## 📦 Structure du projet

```
├── docs/                # Build statique pour GitHub Pages
├── public/              # Fichiers publics (favicon, images...)
├── src/                 # Code source React
│   ├── components/      # Composants UI réutilisables
│   ├── context/         # Contexts React
│   ├── data/            # Données (projets, expériences...)
│   ├── hooks/           # Hooks personnalisés
│   ├── pages/           # Pages principales du site
│   ├── styles/          # Fichiers CSS
│   └── utils/           # Fonctions utilitaires
├── index.html           # Point d’entrée Vite
├── package.json         # Dépendances et scripts
├── tailwind.config.js   # Config TailwindCSS
├── vite.config.js       # Config Vite (base, build...)
└── ...
```

---

## 🛠️ Installation & développement

1. **Cloner le dépôt**
   ```powershell
   git clone https://github.com/Xenogenesis1/evan-saboulard-serre.github.io.git
   cd evan-saboulard-serre.github.io
   ```
2. **Installer les dépendances**
   ```powershell
   npm install
   ```
3. **Lancer le serveur de développement**
   ```powershell
   npm run dev
   ```
   Le site sera accessible sur `http://localhost:5173` (ou autre port affiché).

---

## 🏗️ Build & déploiement

- **Build pour production**
  ```powershell
  npm run build
  ```
  Le build statique sera généré dans le dossier `docs/`.

- **Déploiement GitHub Pages**
  - Le contenu du dossier `docs/` est automatiquement servi par GitHub Pages.
  - La configuration du chemin de base (`base`) dans `vite.config.js` est essentielle :
    ```js
    base: '/evan-saboulard-serre.github.io/'
    ```
  - Le fichier `.nojekyll` empêche Jekyll d’interférer avec le build React.

---

## 🧩 Fonctionnalités principales

- Présentation dynamique des projets
- Parcours et expériences détaillés
- Compétences techniques illustrées
- Design responsive et animations
- Navigation fluide (SPA)

---

## 📝 Personnalisation

Pour adapter ce portfolio à vos besoins :
- Modifiez les données dans `src/data/`
- Ajoutez ou personnalisez les composants dans `src/components/`
- Mettez à jour les pages dans `src/pages/`

