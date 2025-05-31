<<<<<<< HEAD
/**
 * Données des projets du portfolio de Saboulard-Serre Evan
 * Structuré selon le référentiel national BUT Informatique DACS
 */

// Compétences du référentiel
const competences = {
  REALISER: 'realiser',
  OPTIMISER: 'optimiser',
  ADMINISTRER: 'administrer',
  GERER: 'gerer',
  CONDUIRE: 'conduire',
  COLLABORER: 'collaborer'
};

/**
 * Données des projets du portfolio de Saboulard-Serre Evan
 */
const projects = [
  {
    id: 'gestion-aeroport-c',
    title: 'Logiciel de gestion d\'aéroport',
    category: 'Développement logiciel (C)',
    shortDescription: 'Programmation d\'un logiciel complet de gestion d\'un aéroport en C.',
    fullDescription: `
      Développement d'un logiciel en langage C permettant la gestion des vols, des pistes, des arrivées et départs, ainsi que la gestion des conflits d'occupation. Le projet inclut la conception de structures de données optimisées et la gestion fine de la mémoire.
      
      Ce projet m'a permis de m'introduire aux structures de données avancées, à l'implémentation d'algorithmes de tri efficaces, et à la gestion de mémoire en bas niveau. J'ai notamment travaillé sur l'optimisation des ressources pour garantir la fluidité du système même en cas de forte charge.
    `,
    imageUrl: '/assets/images/projects/aeroport-c.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'c', name: 'C', color: 'primary' },
      { id: 'algorithmique', name: 'Algorithmique', color: 'accent' },
      { id: 'gestion-memoire', name: 'Gestion mémoire', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'un logiciel complet de gestion d\'aéroport'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des structures de données et des algorithmes'
      }
    ],
    challenges: [
      'Gestion efficace de la mémoire et des structures de données',
      'Optimisation des algorithmes de recherche et de tri',
      'Gestion des conflits d\'occupation des pistes',
    ],
    solutions: [
      'Utilisation de listes chaînées et tableaux dynamiques',
      'Implémentation d\'algorithmes de tri personnalisés',
      'Gestion des erreurs et robustesse du code',
    ],
  },
  {
    id: 'config-ubuntu',
    title: 'Configuration de poste de travail Ubuntu',
    category: 'Administration système',
    shortDescription: 'Configuration matérielle et logicielle complète d\'un poste Ubuntu.',
    fullDescription: `
      Installation, configuration et sécurisation d'un poste de travail sous Ubuntu. Automatisation de l'installation de logiciels, configuration réseau, partitionnement, et mise en place de scripts de sauvegarde et de monitoring.
      
      Ce projet a compris une analyse préalable des besoins utilisateur pour déterminer la configuration matérielle optimale, suivie d'une installation personnalisée adaptée à ces besoins spécifiques. L'objectif était de fournir un environnement de travail parfaitement adapté aux exigences de l'utilisateur tout en garantissant performance et sécurité.
    `,
    imageUrl: '/assets/images/projects/ubuntu.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'linux', name: 'Linux', color: 'secondary' },
      { id: 'bash', name: 'Bash', color: 'neutral' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation de la configuration complète d\'un poste Ubuntu'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02'],
        justification: 'Administration système et gestion des utilisateurs'
      }
    ],
    challenges: [
      'Automatisation de l\'installation',
      'Sécurisation du poste',
      'Gestion des droits et des utilisateurs',
    ],
    solutions: [
      'Utilisation de scripts Bash pour l\'automatisation',
      'Configuration fine des permissions',
      'Mise en place de sauvegardes automatisées',
    ],
  },
  {
    id: 'gestion-vols-java',
    title: 'Gestion et optimisation de vols d\'avions',
    category: 'Développement logiciel (Java)',
    shortDescription: 'Création d\'un outil d\'affichage et d\'optimisation des vols en Java.',
    fullDescription: `
      Application Java permettant la gestion, l'affichage graphique et l'optimisation des vols d'avions. Intégration d'algorithmes d'optimisation et d'une interface utilisateur ergonomique.
      
      Le système intègre des fonctionnalités avancées de détection des points de collision potentiels entre les avions et utilise des algorithmes de minimisation pour éviter ces conflits. La modélisation des trajectoires et la visualisation graphique des itinéraires permettent une gestion optimale du trafic aérien et une réduction significative des risques.
    `,
    imageUrl: '/assets/images/projects/vols-java.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'java', name: 'Java', color: 'primary' },
      { id: 'poo', name: 'POO', color: 'accent' },
      { id: 'optimisation', name: 'Optimisation', color: 'success' },
      { id: 'ui-java', name: 'Interface graphique Java', color: 'secondary' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'une application de gestion et optimisation de vols'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.03'],
        justification: 'Optimisation des vols et des ressources aériennes'
      }
    ],
    challenges: [
      'Gestion de la concurrence des vols',
      'Optimisation des horaires et des ressources',
      'Création d\'une interface graphique intuitive',
    ],
    solutions: [
      'Utilisation de threads et synchronisation',
      'Implémentation d\'algorithmes d\'optimisation',
      'Développement d\'une UI avec JavaFX/Swing',
    ],
  },
  {
    id: 'algo-graphes',
    title: 'Minimisation de conflits (théorie des graphes)',
    category: 'Algorithmique avancée',
    shortDescription: 'Conception d\'algorithmes pour minimiser les conflits dans des graphes.',
    fullDescription: `
      Étude et implémentation d'algorithmes de minimisation de conflits dans la théorie des graphes, avec application à la gestion de ressources et de plannings.
      
      Ce projet s'est concentré sur un problème spécifique où le kmax représente le nombre maximum d'altitudes différentes, et l'objectif était de minimiser les conflits potentiels entre les avions. J'ai développé et comparé plusieurs approches algorithmiques pour trouver la solution optimale tout en respectant les contraintes imposées par le système de gestion du trafic aérien.
    `,
    imageUrl: '/assets/images/projects/graphes.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'algorithmique', name: 'Algorithmique', color: 'accent' },
      { id: 'graphes', name: 'Théorie des graphes', color: 'primary' },
      { id: 'optimisation', name: 'Optimisation', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'une étude et implémentation d\'algorithmes de minimisation de conflits'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des conflits dans les graphes'
      }
    ],
    challenges: [
      'Modélisation efficace des conflits',
      'Implémentation d\'algorithmes complexes',
    ],
    solutions: [
      'Utilisation de structures de graphes adaptées',
      'Tests et validation sur des cas réels',
    ],
  },
  {
    id: 'web-laravel',
    title: 'Développement d\'applications web (Laravel)',
    category: 'Développement web',
    shortDescription: 'Création d\'applications web dynamiques en PHP avec Laravel.',
    fullDescription: `
      Réalisation d'applications web en PHP avec le framework Laravel : gestion d'utilisateurs, authentification, CRUD, sécurité, et déploiement.
      
      J'ai développé un réseau social de sport complet avec de nombreuses fonctionnalités : gestion complète des utilisateurs (inscription, authentification, rôles), création et gestion d'équipes, tournois, matchs et entraînements, système de publication de posts avec commentaires et likes, tableau de bord d'administration (via Backpack), système d'autorisations (policies), génération de rapports et exports via des jobs asynchrones, ainsi qu'une API RESTful pour l'intégration externe. L'interface a été développée avec Tailwind CSS et Vite pour garantir une expérience responsive et moderne.
    `,
    imageUrl: '/assets/images/projects/laravel.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'php', name: 'PHP', color: 'primary' },
      { id: 'laravel', name: 'Laravel', color: 'secondary' },
      { id: 'mvc', name: 'MVC', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'applications web dynamiques avec Laravel'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02', 'CE3.04'],
        justification: 'Administration des utilisateurs et gestion des droits'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.04'],
        justification: 'Optimisation des performances pour un grand nombre d\'utilisateurs'
      }
    ],
    challenges: [
      'Sécurisation des applications web',
      'Gestion des migrations et des bases de données', 
      'Implémentation d\'un système de rôles et permissions complexe',
      'Optimisation des performances pour un grand nombre d\'utilisateurs',
      'Gestion des jobs asynchrones pour les tâches lourdes',
    ],
    solutions: [
      'Utilisation des middlewares Laravel',
      'Mise en place de tests et validation des entrées',
      'Architecture MVC rigoureuse avec repositories et services',
      'Utilisation de Backpack pour l\'administration',
      'Développement d\'API RESTful documentée et sécurisée',
    ],
  },
  {
    id: 'exploit-memoire',
    title: 'Exploitation de vulnérabilités mémoire',
    category: 'Sécurité offensive',
    shortDescription: 'Exploitation de failles mémoire pour obtenir des droits root.',
    fullDescription: `
      Analyse et exploitation de vulnérabilités mémoire sur des programmes C sous Linux, avec élévation de privilèges (root exploit). Étude des techniques de buffer overflow et de contournement des protections.
      
      Ce projet a impliqué l'exploitation de différentes vulnérabilités, notamment des buffer overflows simples avec construction de ROP Chains (Return-Oriented Programming) et des heap overflows en utilisant la technique "House of Force". J'ai ainsi pu démontrer comment obtenir des privilèges root sur un système en exploitant ces failles de sécurité dans la gestion de la mémoire.
    `,
    imageUrl: '/assets/images/projects/exploit.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'c', name: 'C', color: 'primary' },
      { id: 'linux', name: 'Linux', color: 'secondary' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
      { id: 'reverse', name: 'Reverse engineering', color: 'accent' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'exploits de vulnérabilités mémoire'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des exploits pour l\'élévation de privilèges'
      }
    ],
    challenges: [
      'Compréhension des mécanismes de protection mémoire',
      'Écriture d\'exploits fiables',
      'Construction de ROP chains efficaces',
      'Analyse et exploitation d\'overflows heap',
    ],
    solutions: [
      'Utilisation de GDB et d\'outils d\'analyse avancés',
      'Tests sur environnements virtualisés',
      'Développement d\'approches systématiques pour identifier les failles',
      'Documentation des vecteurs d\'attaque',
    ],
  },
  {
    id: 'cluster-sworm',
    title: 'Mise en place d\'un cluster SWORM',
    category: 'DevOps / Orchestration',
    shortDescription: 'Déploiement et gestion d\'un cluster SWORM pour la haute disponibilité.',
    fullDescription: `
      Installation, configuration et gestion d'un cluster SWORM pour l'orchestration de conteneurs, avec gestion du réseau, de la sécurité et de la tolérance aux pannes.
      
      Ce projet a consisté en la mise en place complète d'une infrastructure à haute disponibilité basée sur Docker SWORM, permettant le déploiement, la gestion et le scaling automatique des applications conteneurisées. L'architecture implémentée offre une résilience aux pannes et une répartition optimale des charges de travail sur l'ensemble des nœuds du cluster.
    `,
    imageUrl: '/assets/images/projects/swarm.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'docker', name: 'Docker', color: 'secondary' },
      { id: 'swarm', name: 'SWORM', color: 'primary' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'devops', name: 'DevOps', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02', 'CE3.04'],
        justification: 'Mise en place d\'une infrastructure hautement disponible et sécurisée'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.04'],
        justification: 'Optimisation des performances et de la répartition de charge'
      }
    ],
    challenges: [
      'Configuration du cluster et des réseaux',
      'Gestion de la haute disponibilité',
      'Mise en place d\'une infrastructure résiliente',
      'Configuration du load balancing',
    ],
    solutions: [
      'Utilisation de Docker Compose et Swarm',
      'Tests de tolérance aux pannes',
      'Configuration des services avec réplication',
      'Mise en place de règles de placement des conteneurs',
    ],
  },
  {
    id: 'env-docker',
    title: 'Création d\'environnements isolés et communicants (Docker)',
    category: 'Conteneurisation',
    shortDescription: 'Mise en place d\'environnements isolés et interconnectés avec Docker.',
    fullDescription: `
      Création et configuration d'environnements de développement et de test isolés, communicants via des réseaux virtuels Docker. Automatisation du déploiement et gestion de la sécurité des conteneurs.
      
      Ce projet s'est concentré sur la mise en place d'environnements Docker isolés mais communicants, avec une attention particulière à la gestion des volumes nommés et Bind pour la persistance des données de base de données, ainsi qu'à la configuration avancée des interfaces réseau permettant la communication inter-conteneurs. L'architecture mise en place garantit l'isolation tout en permettant les interactions nécessaires entre les différents services.
    `,
    imageUrl: '/assets/images/projects/docker.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'docker', name: 'Docker', color: 'secondary' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
      { id: 'devops', name: 'DevOps', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation de la création et configuration d\'environnements Docker'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02'],
        justification: 'Administration des réseaux et gestion de la sécurité des conteneurs'
      }
    ],
    challenges: [
      'Isolation et communication entre conteneurs',
      'Automatisation du déploiement',
      'Gestion de la persistance des données',
      'Configuration des réseaux virtuels',
    ],
    solutions: [
      'Utilisation de Docker Compose',
      'Mise en place de réseaux virtuels sécurisés',
      'Configuration de volumes nommés et Bind mounts',
      'Définition d\'interfaces réseau adaptées aux besoins',
    ],
  },
  {
    id: 'analyse-rse-logitech',
    title: 'Analyse RSE entreprises : Logitech',
    category: 'Analyse critique & Documentation',
    shortDescription: 'Étude critique de la politique RSE de Logitech, confrontation entre communication officielle et réalité.',
    fullDescription: `
      Analyse approfondie de la politique de Responsabilité Sociétale des Entreprises (RSE) de Logitech. Ce projet consiste à confronter les déclarations officielles de l'entreprise avec ses actions réelles, en s'appuyant sur des sources vérifiées, des rapports indépendants, la vérification de certificats et l'analyse de rumeurs ou controverses publiques.
      
      L'objectif est de développer un regard critique, d'appliquer une méthodologie de recherche documentaire rigoureuse et de synthétiser les résultats dans une documentation claire et argumentée.
    `,
    imageUrl: '/assets/images/projects/rse-logitech.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'documentation', name: 'Documentation technique', color: 'accent' },
      { id: 'analyse-critique', name: 'Analyse critique', color: 'primary' },
      { id: 'gestion-projet', name: 'Gestion de projet', color: 'secondary' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.01', 'CE4.05'],
        justification: 'Collecte, vérification et synthèse d\'informations pour garantir la qualité et la cohérence des données.'
      },
      {
        id: competences.CONDUIRE,
        composantes: ['CE5.01', 'CE5.03', 'CE5.04'],
        justification: 'Organisation, gestion de projet et démarche critique dans l\'analyse documentaire.'
      }
    ],
    challenges: [
      'Recouper des sources variées et fiables',
      'Détecter les écarts entre communication et réalité',
      'Synthétiser des informations complexes',
    ],
    solutions: [
      'Méthodologie de recherche documentaire',
      'Utilisation d\'outils de veille et de vérification',
      'Rédaction d\'une synthèse argumentée',
    ],
  },
  {
    id: 'optimisation-trading-pso',
    title: 'Optimisation de Stratégie de Trading par Essaim de Particules',
    category: 'Finance Quantitative / Optimisation avancée',
    shortDescription: 'Optimisation d’une stratégie de trading par algorithme d’essaim de particules (PSO) sur données financières réelles.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Dans les marchés financiers modernes, l'identification manuelle des paramètres optimaux pour une stratégie de trading est chronophage et souvent subjective. Pourtant, les zones de liquidité représentent des opportunités précieuses. Leur exploitation efficace nécessite un calibrage précis des multiples paramètres qui définissent leur détection et les règles d'entrée ou de sortie de position. Cette complexité paramétrique rend l'optimisation manuelle pratiquement impossible. C'est dans ce contexte que ce projet prend tout son sens.

Concrètement, le système implémente une stratégie qui identifie les zones de liquidité grâce à l'analyse des extrema locaux, des ratios de shadows et des volumes anormaux. L'architecture repose sur un optimiseur par essaim de particules (PSO) parallélisé, capable d'explorer simultanément neuf dimensions paramétriques. Le backtest multi-timeframe simule l'exécution réaliste des ordres en tenant compte du slippage, des frais et de la micro-structure du marché sur timeframe inférieur. Ainsi, l'optimisation PSO permet d'identifier automatiquement la configuration optimale des paramètres en équilibrant exploration et exploitation de l'espace de recherche. Le système évalue chaque combinaison via une fonction de fitness qui pondère le ratio de Sharpe (60%) et le rendement total (40%), garantissant ainsi des performances ajustées au risque. La gestion du capital intégrée dimensionne chaque position selon un pourcentage fixe du capital à risquer.

Cette approche résout élégamment le problème d'optimisation paramétrique en automatisant la recherche de configurations optimales tout en limitant le risque d'overfitting. Grâce à la parallélisation, l'exploration de l'espace des solutions devient efficace et le temps de calcul est considérablement réduit. L'utilisation de multiples niveaux de prise de profit maximise l'extraction de valeur de chaque position. Enfin, le système est directement applicable aux marchés réels après validation des paramètres optimisés. La modularité de l'architecture permet son adaptation à différents actifs et timeframes, tandis qu'une réoptimisation périodique peut être programmée pour maintenir la pertinence des paramètres face à l'évolution des conditions de marché. L'intégration avec une API de trading ( réalisé par moi-même ) permet l'automatisation complète du processus, de la détection des signaux à l'exécution des ordres.`,
    imageUrl: '/assets/images/projects/optimisation-trading-pso.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'optimization', name: 'Optimisation avancée', color: 'success' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Optimisation et validation quantitative de stratégies sur données réelles.'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation avancée, analyse de données et gestion du risque.'
      }
    ],
    challenges: [
      'Recherche efficace dans un espace de paramètres complexe',
      'Gestion du risque et validation robuste',
      'Traitement de grandes quantités de données financières',
    ],
    solutions: [
      'Implémentation d’un PSO parallèle',
      'Backtest rigoureux et visualisation avancée',
      'Métriques de performance et gestion du capital',
    ],
  },
  {
    id: 'trading-algo-automatisation',
    title: 'Trading Algorithmique et Automatisé',
    category: 'Finance Quantitative / Analyse de données',
    shortDescription: 'Développement d’un système complet de trading algorithmique avec optimisation automatisée et exécution des ordres.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Dans le contexte des marchés financiers, les traders font face à la difficulté d’identifier les opportunités optimales, notamment les zones de liquidité et les retournements significatifs. L’identification manuelle de ces signaux est subjective et chronophage, tandis que le dimensionnement des positions et la gestion du risque nécessitent une approche systématique. Ce projet répond à cette problématique en offrant une architecture flexible permettant d’implémenter n’importe quelle stratégie de trading algorithmique, qu’elle soit basée sur des indicateurs techniques, des patterns de prix, des signaux statistiques ou des règles personnalisées. Les stratégies sont d’abord optimisées en dehors du système, puis implémentées dans le bot pour une exécution automatisée. Les données de marché sont récupérées via l’API Binance puis analysées selon la logique définie par l’utilisateur, ce qui permet d’adapter le système à une grande variété de méthodologies. Le backtest multi-timeframe intégré permet de suivre en temps réel les performances de chaque stratégie, indépendamment de la plateforme de trading, même lorsque le bot est déconnecté. L’automatisation avec AutoHotkey permet l’exécution des trades sur la plateforme Quantfury. L’approche automatisée permet de scanner systématiquement plusieurs actifs et timeframes à la recherche d’opportunités spécifiques, selon la stratégie choisie. Pour chaque signal identifié, le système calcule des niveaux précis d’entrée, de stop-loss et de take-profit basés sur l’ATR et des ratios risque/récompense optimisés. L’automatisation complète élimine les erreurs d’exécution humaines et assure le respect strict de la stratégie. Ce système résout ainsi les problèmes de subjectivité et d’émotivité du trading manuel en appliquant des règles claires et objectives. L’évaluation complète des performances avec des métriques comme le Sharpe ratio, le winrate et le drawdown maximum permet d’identifier les stratégies véritablement efficaces et d’éliminer celles qui ne sont pas statistiquement viables. Enfin, le système est directement opérationnel grâce à l’intégration avec Quantfury via AutoHotkey. Les ordres sont placés automatiquement selon la proximité au prix actuel, avec gestion des fenêtres multiples pour différents actifs. La surveillance continue permet d’ajuster les positions en fonction des conditions de marché, tandis que les mécanismes de redémarrage garantissent la fiabilité opérationnelle sur le long terme.`,
    imageUrl: '/assets/images/projects/trading-algo-automatisation.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Analyse avancée de données financières et validation de stratégies sur données réelles.'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation des stratégies, gestion du risque et validation statistique.'
      }
    ],
    challenges: [
      'Détection fiable des signaux techniques',
      'Gestion automatisée du risque et des positions',
      'Simulation réaliste des conditions de marché',
    ],
    solutions: [
      'Automatisation complète de l’analyse et de l’exécution',
      'Backtest multi-timeframe et métriques avancées',
      'Intégration API et gestion multi-actifs',
    ],
  },
  {
    id: 'optimisation-genetique-ict',
    title: 'Optimisation Génétique de Stratégie ICT',
    category: 'Finance Quantitative / Optimisation avancée',
    shortDescription: 'Optimisation automatique de stratégies ICT par algorithme génétique et analyse vectorisée multi-timeframes.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Face à la complexité des marchés financiers et la difficulté d'identifier manuellement les paramètres optimaux pour les stratégies de trading basées sur la méthodologie ICT (Inner Circle Trader), ce projet répond à une problématique cruciale en automatisant l'optimisation des configurations de stratégies tout en tenant compte des différents timeframes et des structures de marché spécifiques. Le fonctionnement du projet repose sur un algorithme génétique sophistiqué qui simule un processus d'évolution naturelle où chaque individu représente une configuration possible de paramètres de trading. À travers des opérations de sélection, croisement et mutation, le système fait évoluer une population d'individus sur plusieurs générations, tandis que l'analyse ICT identifie des structures de marché spécifiques comme les Order Blocks, Fair Value Gaps, zones de liquidité et Breaker Blocks grâce à une analyse vectorisée hautement optimisée des données OHLCV multi-timeframes. En parallèle, des mécanismes d'adaptation dynamique ajustent automatiquement les seuils de détection selon la granularité temporelle des données, ce qui permet une flexibilité remarquable à travers différentes échelles de temps. La solution développée offre ainsi une approche robuste et quantitative qui non seulement optimise les paramètres stratégiques mais garantit également leur pertinence à travers un backtest réaliste prenant en compte le slippage, les frais de transaction et les dynamiques multi-timeframes. De plus, les performances sont rigoureusement évaluées via des métriques essentielles comme le ratio de Sharpe, le drawdown maximal et le rendement ajusté au risque, tandis que l'implémentation en multiprocessing permet une optimisation efficiente même sur de grands volumes de données historiques. La pertinence de cette approche se révèle dans sa capacité à découvrir des configurations stratégiques difficiles à identifier manuellement, tout en éliminant le biais émotionnel souvent présent dans les approches discrétionnaires de trading. Par ailleurs, l'adaptation dynamique aux timeframes et la prise en compte des coûts de transaction permettent une simulation fidèle des conditions réelles du marché, ce qui augmente considérablement la fiabilité des résultats obtenus et la confiance dans les stratégies optimisées. Pour l'exploitation sur le marché réel, le système est conçu avec une architecture flexible permettant l'exportation des paramètres optimisés vers des plateformes de trading automatisé, tandis que le reporting détaillé des performances et la sauvegarde des meilleurs paramètres facilitent l'analyse continue et l'amélioration itérative des stratégies face à l'évolution des conditions de marché. De plus, les mécanismes intégrés de gestion des risques assurent que les stratégies générées respectent les contraintes de capital et de tolérance au risque de l'utilisateur, ce qui rend le système particulièrement adapté pour une utilisation professionnelle dans un environnement de trading réel.`,
    imageUrl: '/assets/images/projects/optimisation-genetique-ict.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'optimization', name: 'Optimisation avancée', color: 'success' },
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation avancée, analyse quantitative et validation robuste de stratégies ICT.'
      },
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Gestion des risques, reporting et adaptation continue des stratégies.'
      }
    ],
    challenges: [
      'Automatisation de l’optimisation des paramètres stratégiques',
      'Détection efficace des structures de marché ICT',
      'Simulation réaliste multi-timeframes et gestion du risque',
    ],
    solutions: [
      'Algorithme génétique évolutif et multiprocessing',
      'Analyse vectorisée et adaptation dynamique',
      'Reporting détaillé et exportation des paramètres',
    ],
  },
];

=======
/**
 * Données des projets du portfolio de Saboulard-Serre Evan
 * Structuré selon le référentiel national BUT Informatique DACS
 */

// Compétences du référentiel
const competences = {
  REALISER: 'realiser',
  OPTIMISER: 'optimiser',
  ADMINISTRER: 'administrer',
  GERER: 'gerer',
  CONDUIRE: 'conduire',
  COLLABORER: 'collaborer'
};

/**
 * Données des projets du portfolio de Saboulard-Serre Evan
 */
const projects = [
  {
    id: 'gestion-aeroport-c',
    title: 'Logiciel de gestion d\'aéroport',
    category: 'Développement logiciel (C)',
    shortDescription: 'Programmation d\'un logiciel complet de gestion d\'un aéroport en C.',
    fullDescription: `
      Développement d'un logiciel en langage C permettant la gestion des vols, des pistes, des arrivées et départs, ainsi que la gestion des conflits d'occupation. Le projet inclut la conception de structures de données optimisées et la gestion fine de la mémoire.
      
      Ce projet m'a permis de m'introduire aux structures de données avancées, à l'implémentation d'algorithmes de tri efficaces, et à la gestion de mémoire en bas niveau. J'ai notamment travaillé sur l'optimisation des ressources pour garantir la fluidité du système même en cas de forte charge.
    `,
    imageUrl: '/assets/images/projects/aeroport-c.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'c', name: 'C', color: 'primary' },
      { id: 'algorithmique', name: 'Algorithmique', color: 'accent' },
      { id: 'gestion-memoire', name: 'Gestion mémoire', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'un logiciel complet de gestion d\'aéroport'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des structures de données et des algorithmes'
      }
    ],
    challenges: [
      'Gestion efficace de la mémoire et des structures de données',
      'Optimisation des algorithmes de recherche et de tri',
      'Gestion des conflits d\'occupation des pistes',
    ],
    solutions: [
      'Utilisation de listes chaînées et tableaux dynamiques',
      'Implémentation d\'algorithmes de tri personnalisés',
      'Gestion des erreurs et robustesse du code',
    ],
  },
  {
    id: 'config-ubuntu',
    title: 'Configuration de poste de travail Ubuntu',
    category: 'Administration système',
    shortDescription: 'Configuration matérielle et logicielle complète d\'un poste Ubuntu.',
    fullDescription: `
      Installation, configuration et sécurisation d'un poste de travail sous Ubuntu. Automatisation de l'installation de logiciels, configuration réseau, partitionnement, et mise en place de scripts de sauvegarde et de monitoring.
      
      Ce projet a compris une analyse préalable des besoins utilisateur pour déterminer la configuration matérielle optimale, suivie d'une installation personnalisée adaptée à ces besoins spécifiques. L'objectif était de fournir un environnement de travail parfaitement adapté aux exigences de l'utilisateur tout en garantissant performance et sécurité.
    `,
    imageUrl: '/assets/images/projects/ubuntu.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'linux', name: 'Linux', color: 'secondary' },
      { id: 'bash', name: 'Bash', color: 'neutral' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation de la configuration complète d\'un poste Ubuntu'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02'],
        justification: 'Administration système et gestion des utilisateurs'
      }
    ],
    challenges: [
      'Automatisation de l\'installation',
      'Sécurisation du poste',
      'Gestion des droits et des utilisateurs',
    ],
    solutions: [
      'Utilisation de scripts Bash pour l\'automatisation',
      'Configuration fine des permissions',
      'Mise en place de sauvegardes automatisées',
    ],
  },
  {
    id: 'gestion-vols-java',
    title: 'Gestion et optimisation de vols d\'avions',
    category: 'Développement logiciel (Java)',
    shortDescription: 'Création d\'un outil d\'affichage et d\'optimisation des vols en Java.',
    fullDescription: `
      Application Java permettant la gestion, l'affichage graphique et l'optimisation des vols d'avions. Intégration d'algorithmes d'optimisation et d'une interface utilisateur ergonomique.
      
      Le système intègre des fonctionnalités avancées de détection des points de collision potentiels entre les avions et utilise des algorithmes de minimisation pour éviter ces conflits. La modélisation des trajectoires et la visualisation graphique des itinéraires permettent une gestion optimale du trafic aérien et une réduction significative des risques.
    `,
    imageUrl: '/assets/images/projects/vols-java.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'java', name: 'Java', color: 'primary' },
      { id: 'poo', name: 'POO', color: 'accent' },
      { id: 'optimisation', name: 'Optimisation', color: 'success' },
      { id: 'ui-java', name: 'Interface graphique Java', color: 'secondary' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'une application de gestion et optimisation de vols'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.03'],
        justification: 'Optimisation des vols et des ressources aériennes'
      }
    ],
    challenges: [
      'Gestion de la concurrence des vols',
      'Optimisation des horaires et des ressources',
      'Création d\'une interface graphique intuitive',
    ],
    solutions: [
      'Utilisation de threads et synchronisation',
      'Implémentation d\'algorithmes d\'optimisation',
      'Développement d\'une UI avec JavaFX/Swing',
    ],
  },
  {
    id: 'algo-graphes',
    title: 'Minimisation de conflits (théorie des graphes)',
    category: 'Algorithmique avancée',
    shortDescription: 'Conception d\'algorithmes pour minimiser les conflits dans des graphes.',
    fullDescription: `
      Étude et implémentation d'algorithmes de minimisation de conflits dans la théorie des graphes, avec application à la gestion de ressources et de plannings.
      
      Ce projet s'est concentré sur un problème spécifique où le kmax représente le nombre maximum d'altitudes différentes, et l'objectif était de minimiser les conflits potentiels entre les avions. J'ai développé et comparé plusieurs approches algorithmiques pour trouver la solution optimale tout en respectant les contraintes imposées par le système de gestion du trafic aérien.
    `,
    imageUrl: '/assets/images/projects/graphes.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'algorithmique', name: 'Algorithmique', color: 'accent' },
      { id: 'graphes', name: 'Théorie des graphes', color: 'primary' },
      { id: 'optimisation', name: 'Optimisation', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'une étude et implémentation d\'algorithmes de minimisation de conflits'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des conflits dans les graphes'
      }
    ],
    challenges: [
      'Modélisation efficace des conflits',
      'Implémentation d\'algorithmes complexes',
    ],
    solutions: [
      'Utilisation de structures de graphes adaptées',
      'Tests et validation sur des cas réels',
    ],
  },
  {
    id: 'web-laravel',
    title: 'Développement d\'applications web (Laravel)',
    category: 'Développement web',
    shortDescription: 'Création d\'applications web dynamiques en PHP avec Laravel.',
    fullDescription: `
      Réalisation d'applications web en PHP avec le framework Laravel : gestion d'utilisateurs, authentification, CRUD, sécurité, et déploiement.
      
      J'ai développé un réseau social de sport complet avec de nombreuses fonctionnalités : gestion complète des utilisateurs (inscription, authentification, rôles), création et gestion d'équipes, tournois, matchs et entraînements, système de publication de posts avec commentaires et likes, tableau de bord d'administration (via Backpack), système d'autorisations (policies), génération de rapports et exports via des jobs asynchrones, ainsi qu'une API RESTful pour l'intégration externe. L'interface a été développée avec Tailwind CSS et Vite pour garantir une expérience responsive et moderne.
    `,
    imageUrl: '/assets/images/projects/laravel.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'php', name: 'PHP', color: 'primary' },
      { id: 'laravel', name: 'Laravel', color: 'secondary' },
      { id: 'mvc', name: 'MVC', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'applications web dynamiques avec Laravel'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02', 'CE3.04'],
        justification: 'Administration des utilisateurs et gestion des droits'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.04'],
        justification: 'Optimisation des performances pour un grand nombre d\'utilisateurs'
      }
    ],
    challenges: [
      'Sécurisation des applications web',
      'Gestion des migrations et des bases de données', 
      'Implémentation d\'un système de rôles et permissions complexe',
      'Optimisation des performances pour un grand nombre d\'utilisateurs',
      'Gestion des jobs asynchrones pour les tâches lourdes',
    ],
    solutions: [
      'Utilisation des middlewares Laravel',
      'Mise en place de tests et validation des entrées',
      'Architecture MVC rigoureuse avec repositories et services',
      'Utilisation de Backpack pour l\'administration',
      'Développement d\'API RESTful documentée et sécurisée',
    ],
  },
  {
    id: 'exploit-memoire',
    title: 'Exploitation de vulnérabilités mémoire',
    category: 'Sécurité offensive',
    shortDescription: 'Exploitation de failles mémoire pour obtenir des droits root.',
    fullDescription: `
      Analyse et exploitation de vulnérabilités mémoire sur des programmes C sous Linux, avec élévation de privilèges (root exploit). Étude des techniques de buffer overflow et de contournement des protections.
      
      Ce projet a impliqué l'exploitation de différentes vulnérabilités, notamment des buffer overflows simples avec construction de ROP Chains (Return-Oriented Programming) et des heap overflows en utilisant la technique "House of Force". J'ai ainsi pu démontrer comment obtenir des privilèges root sur un système en exploitant ces failles de sécurité dans la gestion de la mémoire.
    `,
    imageUrl: '/assets/images/projects/exploit.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'c', name: 'C', color: 'primary' },
      { id: 'linux', name: 'Linux', color: 'secondary' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
      { id: 'reverse', name: 'Reverse engineering', color: 'accent' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation d\'exploits de vulnérabilités mémoire'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02'],
        justification: 'Optimisation des exploits pour l\'élévation de privilèges'
      }
    ],
    challenges: [
      'Compréhension des mécanismes de protection mémoire',
      'Écriture d\'exploits fiables',
      'Construction de ROP chains efficaces',
      'Analyse et exploitation d\'overflows heap',
    ],
    solutions: [
      'Utilisation de GDB et d\'outils d\'analyse avancés',
      'Tests sur environnements virtualisés',
      'Développement d\'approches systématiques pour identifier les failles',
      'Documentation des vecteurs d\'attaque',
    ],
  },
  {
    id: 'cluster-sworm',
    title: 'Mise en place d\'un cluster SWORM',
    category: 'DevOps / Orchestration',
    shortDescription: 'Déploiement et gestion d\'un cluster SWORM pour la haute disponibilité.',
    fullDescription: `
      Installation, configuration et gestion d'un cluster SWORM pour l'orchestration de conteneurs, avec gestion du réseau, de la sécurité et de la tolérance aux pannes.
      
      Ce projet a consisté en la mise en place complète d'une infrastructure à haute disponibilité basée sur Docker SWORM, permettant le déploiement, la gestion et le scaling automatique des applications conteneurisées. L'architecture implémentée offre une résilience aux pannes et une répartition optimale des charges de travail sur l'ensemble des nœuds du cluster.
    `,
    imageUrl: '/assets/images/projects/swarm.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'docker', name: 'Docker', color: 'secondary' },
      { id: 'swarm', name: 'SWORM', color: 'primary' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'devops', name: 'DevOps', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02', 'CE3.04'],
        justification: 'Mise en place d\'une infrastructure hautement disponible et sécurisée'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.04'],
        justification: 'Optimisation des performances et de la répartition de charge'
      }
    ],
    challenges: [
      'Configuration du cluster et des réseaux',
      'Gestion de la haute disponibilité',
      'Mise en place d\'une infrastructure résiliente',
      'Configuration du load balancing',
    ],
    solutions: [
      'Utilisation de Docker Compose et Swarm',
      'Tests de tolérance aux pannes',
      'Configuration des services avec réplication',
      'Mise en place de règles de placement des conteneurs',
    ],
  },
  {
    id: 'env-docker',
    title: 'Création d\'environnements isolés et communicants (Docker)',
    category: 'Conteneurisation',
    shortDescription: 'Mise en place d\'environnements isolés et interconnectés avec Docker.',
    fullDescription: `
      Création et configuration d'environnements de développement et de test isolés, communicants via des réseaux virtuels Docker. Automatisation du déploiement et gestion de la sécurité des conteneurs.
      
      Ce projet s'est concentré sur la mise en place d'environnements Docker isolés mais communicants, avec une attention particulière à la gestion des volumes nommés et Bind pour la persistance des données de base de données, ainsi qu'à la configuration avancée des interfaces réseau permettant la communication inter-conteneurs. L'architecture mise en place garantit l'isolation tout en permettant les interactions nécessaires entre les différents services.
    `,
    imageUrl: '/assets/images/projects/docker.jpg',
    galleryImages: [],
    clientName: 'Projet universitaire',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: true,
    skills: [
      { id: 'docker', name: 'Docker', color: 'secondary' },
      { id: 'reseau', name: 'Réseau', color: 'accent' },
      { id: 'securite', name: 'Sécurité', color: 'danger' },
      { id: 'devops', name: 'DevOps', color: 'success' },
    ],
    competencesReferenciel: [
      {
        id: competences.REALISER,
        composantes: ['CE1.01', 'CE1.02', 'CE1.03'],
        justification: 'Réalisation de la création et configuration d\'environnements Docker'
      },
      {
        id: competences.ADMINISTRER,
        composantes: ['CE3.01', 'CE3.02'],
        justification: 'Administration des réseaux et gestion de la sécurité des conteneurs'
      }
    ],
    challenges: [
      'Isolation et communication entre conteneurs',
      'Automatisation du déploiement',
      'Gestion de la persistance des données',
      'Configuration des réseaux virtuels',
    ],
    solutions: [
      'Utilisation de Docker Compose',
      'Mise en place de réseaux virtuels sécurisés',
      'Configuration de volumes nommés et Bind mounts',
      'Définition d\'interfaces réseau adaptées aux besoins',
    ],
  },
  {
    id: 'analyse-rse-logitech',
    title: 'Analyse RSE entreprises : Logitech',
    category: 'Analyse critique & Documentation',
    shortDescription: 'Étude critique de la politique RSE de Logitech, confrontation entre communication officielle et réalité.',
    fullDescription: `
      Analyse approfondie de la politique de Responsabilité Sociétale des Entreprises (RSE) de Logitech. Ce projet consiste à confronter les déclarations officielles de l'entreprise avec ses actions réelles, en s'appuyant sur des sources vérifiées, des rapports indépendants, la vérification de certificats et l'analyse de rumeurs ou controverses publiques.
      
      L'objectif est de développer un regard critique, d'appliquer une méthodologie de recherche documentaire rigoureuse et de synthétiser les résultats dans une documentation claire et argumentée.
    `,
    imageUrl: '/assets/images/projects/rse-logitech.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    skills: [
      { id: 'documentation', name: 'Documentation technique', color: 'accent' },
      { id: 'analyse-critique', name: 'Analyse critique', color: 'primary' },
      { id: 'gestion-projet', name: 'Gestion de projet', color: 'secondary' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.01', 'CE4.05'],
        justification: 'Collecte, vérification et synthèse d\'informations pour garantir la qualité et la cohérence des données.'
      },
      {
        id: competences.CONDUIRE,
        composantes: ['CE5.01', 'CE5.03', 'CE5.04'],
        justification: 'Organisation, gestion de projet et démarche critique dans l\'analyse documentaire.'
      }
    ],
    challenges: [
      'Recouper des sources variées et fiables',
      'Détecter les écarts entre communication et réalité',
      'Synthétiser des informations complexes',
    ],
    solutions: [
      'Méthodologie de recherche documentaire',
      'Utilisation d\'outils de veille et de vérification',
      'Rédaction d\'une synthèse argumentée',
    ],
  },
  {
    id: 'optimisation-trading-pso',
    title: 'Optimisation de Stratégie de Trading par Essaim de Particules',
    category: 'Finance Quantitative / Optimisation avancée',
    shortDescription: 'Optimisation d’une stratégie de trading par algorithme d’essaim de particules (PSO) sur données financières réelles.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Dans les marchés financiers modernes, l'identification manuelle des paramètres optimaux pour une stratégie de trading est chronophage et souvent subjective. Pourtant, les zones de liquidité représentent des opportunités précieuses. Leur exploitation efficace nécessite un calibrage précis des multiples paramètres qui définissent leur détection et les règles d'entrée ou de sortie de position. Cette complexité paramétrique rend l'optimisation manuelle pratiquement impossible. C'est dans ce contexte que ce projet prend tout son sens.

Concrètement, le système implémente une stratégie qui identifie les zones de liquidité grâce à l'analyse des extrema locaux, des ratios de shadows et des volumes anormaux. L'architecture repose sur un optimiseur par essaim de particules (PSO) parallélisé, capable d'explorer simultanément neuf dimensions paramétriques. Le backtest multi-timeframe simule l'exécution réaliste des ordres en tenant compte du slippage, des frais et de la micro-structure du marché sur timeframe inférieur. Ainsi, l'optimisation PSO permet d'identifier automatiquement la configuration optimale des paramètres en équilibrant exploration et exploitation de l'espace de recherche. Le système évalue chaque combinaison via une fonction de fitness qui pondère le ratio de Sharpe (60%) et le rendement total (40%), garantissant ainsi des performances ajustées au risque. La gestion du capital intégrée dimensionne chaque position selon un pourcentage fixe du capital à risquer.

Cette approche résout élégamment le problème d'optimisation paramétrique en automatisant la recherche de configurations optimales tout en limitant le risque d'overfitting. Grâce à la parallélisation, l'exploration de l'espace des solutions devient efficace et le temps de calcul est considérablement réduit. L'utilisation de multiples niveaux de prise de profit maximise l'extraction de valeur de chaque position. Enfin, le système est directement applicable aux marchés réels après validation des paramètres optimisés. La modularité de l'architecture permet son adaptation à différents actifs et timeframes, tandis qu'une réoptimisation périodique peut être programmée pour maintenir la pertinence des paramètres face à l'évolution des conditions de marché. L'intégration avec une API de trading ( réalisé par moi-même ) permet l'automatisation complète du processus, de la détection des signaux à l'exécution des ordres.`,
    imageUrl: '/assets/images/projects/optimisation-trading-pso.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'optimization', name: 'Optimisation avancée', color: 'success' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Optimisation et validation quantitative de stratégies sur données réelles.'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation avancée, analyse de données et gestion du risque.'
      }
    ],
    challenges: [
      'Recherche efficace dans un espace de paramètres complexe',
      'Gestion du risque et validation robuste',
      'Traitement de grandes quantités de données financières',
    ],
    solutions: [
      'Implémentation d’un PSO parallèle',
      'Backtest rigoureux et visualisation avancée',
      'Métriques de performance et gestion du capital',
    ],
  },
  {
    id: 'trading-algo-automatisation',
    title: 'Trading Algorithmique et Automatisé',
    category: 'Finance Quantitative / Analyse de données',
    shortDescription: 'Développement d’un système complet de trading algorithmique avec optimisation automatisée et exécution des ordres.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Dans le contexte des marchés financiers, les traders font face à la difficulté d’identifier les opportunités optimales, notamment les zones de liquidité et les retournements significatifs. L’identification manuelle de ces signaux est subjective et chronophage, tandis que le dimensionnement des positions et la gestion du risque nécessitent une approche systématique. Ce projet répond à cette problématique en offrant une architecture flexible permettant d’implémenter n’importe quelle stratégie de trading algorithmique, qu’elle soit basée sur des indicateurs techniques, des patterns de prix, des signaux statistiques ou des règles personnalisées. Les stratégies sont d’abord optimisées en dehors du système, puis implémentées dans le bot pour une exécution automatisée. Les données de marché sont récupérées via l’API Binance puis analysées selon la logique définie par l’utilisateur, ce qui permet d’adapter le système à une grande variété de méthodologies. Le backtest multi-timeframe intégré permet de suivre en temps réel les performances de chaque stratégie, indépendamment de la plateforme de trading, même lorsque le bot est déconnecté. L’automatisation avec AutoHotkey permet l’exécution des trades sur la plateforme Quantfury. L’approche automatisée permet de scanner systématiquement plusieurs actifs et timeframes à la recherche d’opportunités spécifiques, selon la stratégie choisie. Pour chaque signal identifié, le système calcule des niveaux précis d’entrée, de stop-loss et de take-profit basés sur l’ATR et des ratios risque/récompense optimisés. L’automatisation complète élimine les erreurs d’exécution humaines et assure le respect strict de la stratégie. Ce système résout ainsi les problèmes de subjectivité et d’émotivité du trading manuel en appliquant des règles claires et objectives. L’évaluation complète des performances avec des métriques comme le Sharpe ratio, le winrate et le drawdown maximum permet d’identifier les stratégies véritablement efficaces et d’éliminer celles qui ne sont pas statistiquement viables. Enfin, le système est directement opérationnel grâce à l’intégration avec Quantfury via AutoHotkey. Les ordres sont placés automatiquement selon la proximité au prix actuel, avec gestion des fenêtres multiples pour différents actifs. La surveillance continue permet d’ajuster les positions en fonction des conditions de marché, tandis que les mécanismes de redémarrage garantissent la fiabilité opérationnelle sur le long terme.`,
    imageUrl: '/assets/images/projects/trading-algo-automatisation.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Analyse avancée de données financières et validation de stratégies sur données réelles.'
      },
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation des stratégies, gestion du risque et validation statistique.'
      }
    ],
    challenges: [
      'Détection fiable des signaux techniques',
      'Gestion automatisée du risque et des positions',
      'Simulation réaliste des conditions de marché',
    ],
    solutions: [
      'Automatisation complète de l’analyse et de l’exécution',
      'Backtest multi-timeframe et métriques avancées',
      'Intégration API et gestion multi-actifs',
    ],
  },
  {
    id: 'optimisation-genetique-ict',
    title: 'Optimisation Génétique de Stratégie ICT',
    category: 'Finance Quantitative / Optimisation avancée',
    shortDescription: 'Optimisation automatique de stratégies ICT par algorithme génétique et analyse vectorisée multi-timeframes.\n\nProjet personnel en finance quantitative.',
    fullDescription: `Face à la complexité des marchés financiers et la difficulté d'identifier manuellement les paramètres optimaux pour les stratégies de trading basées sur la méthodologie ICT (Inner Circle Trader), ce projet répond à une problématique cruciale en automatisant l'optimisation des configurations de stratégies tout en tenant compte des différents timeframes et des structures de marché spécifiques. Le fonctionnement du projet repose sur un algorithme génétique sophistiqué qui simule un processus d'évolution naturelle où chaque individu représente une configuration possible de paramètres de trading. À travers des opérations de sélection, croisement et mutation, le système fait évoluer une population d'individus sur plusieurs générations, tandis que l'analyse ICT identifie des structures de marché spécifiques comme les Order Blocks, Fair Value Gaps, zones de liquidité et Breaker Blocks grâce à une analyse vectorisée hautement optimisée des données OHLCV multi-timeframes. En parallèle, des mécanismes d'adaptation dynamique ajustent automatiquement les seuils de détection selon la granularité temporelle des données, ce qui permet une flexibilité remarquable à travers différentes échelles de temps. La solution développée offre ainsi une approche robuste et quantitative qui non seulement optimise les paramètres stratégiques mais garantit également leur pertinence à travers un backtest réaliste prenant en compte le slippage, les frais de transaction et les dynamiques multi-timeframes. De plus, les performances sont rigoureusement évaluées via des métriques essentielles comme le ratio de Sharpe, le drawdown maximal et le rendement ajusté au risque, tandis que l'implémentation en multiprocessing permet une optimisation efficiente même sur de grands volumes de données historiques. La pertinence de cette approche se révèle dans sa capacité à découvrir des configurations stratégiques difficiles à identifier manuellement, tout en éliminant le biais émotionnel souvent présent dans les approches discrétionnaires de trading. Par ailleurs, l'adaptation dynamique aux timeframes et la prise en compte des coûts de transaction permettent une simulation fidèle des conditions réelles du marché, ce qui augmente considérablement la fiabilité des résultats obtenus et la confiance dans les stratégies optimisées. Pour l'exploitation sur le marché réel, le système est conçu avec une architecture flexible permettant l'exportation des paramètres optimisés vers des plateformes de trading automatisé, tandis que le reporting détaillé des performances et la sauvegarde des meilleurs paramètres facilitent l'analyse continue et l'amélioration itérative des stratégies face à l'évolution des conditions de marché. De plus, les mécanismes intégrés de gestion des risques assurent que les stratégies générées respectent les contraintes de capital et de tolérance au risque de l'utilisateur, ce qui rend le système particulièrement adapté pour une utilisation professionnelle dans un environnement de trading réel.`,
    imageUrl: '/assets/images/projects/optimisation-genetique-ict.jpg',
    galleryImages: [],
    clientName: 'Projet personnel',
    projectUrl: '',
    repositoryUrl: '',
    isFeatured: false,
    isPersonalProject: true,
    personalInfo: 'Projet personnel en finance quantitative',
    skills: [
      { id: 'optimization', name: 'Optimisation avancée', color: 'success' },
      { id: 'data-analysis', name: 'Analyse de données', color: 'primary' },
      { id: 'risk-management', name: 'Gestion des risques', color: 'warning' },
      { id: 'model-validation', name: 'Validation de modèles', color: 'danger' },
    ],
    competencesReferenciel: [
      {
        id: competences.OPTIMISER,
        composantes: ['CE2.01', 'CE2.02', 'CE2.04'],
        justification: 'Optimisation avancée, analyse quantitative et validation robuste de stratégies ICT.'
      },
      {
        id: competences.GERER,
        composantes: ['CE4.05'],
        justification: 'Gestion des risques, reporting et adaptation continue des stratégies.'
      }
    ],
    challenges: [
      'Automatisation de l’optimisation des paramètres stratégiques',
      'Détection efficace des structures de marché ICT',
      'Simulation réaliste multi-timeframes et gestion du risque',
    ],
    solutions: [
      'Algorithme génétique évolutif et multiprocessing',
      'Analyse vectorisée et adaptation dynamique',
      'Reporting détaillé et exportation des paramètres',
    ],
  },
];

>>>>>>> 9118f070158da87ce42521e3257c6926681040c9
export default projects;