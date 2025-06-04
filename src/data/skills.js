/**
 * Données des compétences pour le portfolio de Saboulard-Serre Evan
 * Structurées selon le référentiel national BUT Informatique DACS
 */
const skills = [
  {
    id: 'realiser',
    name: 'Réaliser',
    description: 'Développer des solutions informatiques — conception, codage, test et intégration',
    icon: 'code',
    referentiel: 'Développer — c\'est-à-dire concevoir, coder, tester et intégrer — une solution informatique pour un client.',
    composantes: [
      'CE1.01 | Respect des besoins client',
      'CE1.03 | Application des principes algorithmiques',
      'CE1.04 | Qualité du code et documentation',
      'CE1.06 | Choix des ressources techniques'
    ],
    skills: [
      {
        id: 'c-prog',
        name: 'C',
        level: 85,
        color: 'danger',
        description: 'Programmation système et développement bas niveau.',
        projects: ['gestion-aeroport-c'],
      },
      {
        id: 'java',
        name: 'Java',
        level: 80,
        color: 'primary',
        description: 'Conception et développement d\'applications respectant les principes SOLID et POO.',
        projects: ['gestion-vols-java'],
      },
      {
        id: 'python',
        name: 'Python',
        level: 75,
        color: 'success',
        description: 'Développement d\'applications et scripts d\'automatisation.',
        projects: ['automatisation-scripts'],
      },
      {
        id: 'scripting',
        name: 'Scripts & Automatisation',
        level: 75,
        color: 'accent',
        description: 'AutoHotKey, PowerShell, Pine Script pour l\'automatisation.',
        projects: ['scripts-trading', 'auto-tasks'],
      },
      {
        id: 'web-frontend',
        name: 'HTML, CSS & JavaScript',
        level: 50,
        color: 'primary',
        description: 'Développement frontend moderne avec Tailwind CSS.',
        projects: ['portfolio'],
      },
      {
        id: 'php-laravel',
        name: 'PHP / Laravel',
        level: 50,
        color: 'secondary',
        description: 'Développement web backend sécurisé avec architecture MVC.',
        projects: ['web-laravel'],
      }
    ]
  },
  {
    id: 'optimiser',
    name: 'Optimiser',
    description: 'Optimiser les applications selon des critères spécifiques : performance, précision, consommation',
    icon: 'chart-line',
    referentiel: 'Proposer des applications informatiques optimisées en fonction de critères spécifiques : temps d\'exécution, précision, consommation de ressources.',
    composantes: [
      'CE2.01 | Formalisation et modélisation des situations complexes',
      'CE2.02 | Maîtrise des algorithmes et structures de données',
      'CE2.03 | Application de schémas de raisonnement',
      'CE2.04 | Justification des choix et validation des résultats'
    ],
    skills: [
      {
        id: 'algorithmique',
        name: 'Algorithmique avancée',
        level: 90,
        color: 'primary',
        description: 'Conception et optimisation d\'algorithmes complexes.',
        projects: ['algo-graphes', 'gestion-aeroport-c'],
      },
      {
        id: 'graphes',
        name: 'Théorie des graphes',
        level: 85,
        color: 'secondary',
        description: 'Modélisation et résolution de problèmes avec les graphes.',
        projects: ['algo-graphes'],
      },
      {
        id: 'arbres-decision',
        name: 'Arbres de décision',
        level: 80,
        color: 'success',
        description: 'Modélisation et implémentation d\'arbres de décision.',
        projects: ['analyse-donnees'],
      },
      {
        id: 'testing-doc',
        name: 'Tests & Documentation',
        level: 70,
        color: 'success',
        description: 'Tests unitaires, documentation technique et validation qualité.',
        projects: ['web-laravel', 'portfolio'],
      },
      {
        id: 'performance',
        name: 'Optimisation & Performance',
        level: 80,
        color: 'secondary',
        description: 'Amélioration des performances et de la consommation des ressources.',
        projects: ['gestion-vols-java', 'web-laravel'],
      },
      {
        id: 'memoire',
        name: 'Gestion mémoire',
        level: 30,
        color: 'danger',
        description: 'Optimisation de l\'utilisation de la mémoire et prévention des fuites.',
        projects: ['gestion-aeroport-c', 'exploit-memoire'],
      }
    ]
  },
  {
    id: 'administrer',
    name: 'Administrer',
    description: 'Installer, configurer et maintenir en conditions opérationnelles une infrastructure',
    icon: 'server',
    referentiel: 'Installer, configurer, mettre à disposition, maintenir en conditions opérationnelles des infrastructures, des services et des réseaux.',
    composantes: [
      'CE3.01 | Sécurisation du système d\'information',
      'CE3.02 | Qualité de service optimale',
      'CE3.03 | Application des normes et bonnes pratiques',
      'CE3.04 | Continuité d\'activité'
    ],
    skills: [
      {
        id: 'linux-admin',
        name: 'Administration Linux',
        level: 65,
        color: 'secondary',
        description: 'Administration et configuration de systèmes Linux.',
        projects: ['config-ubuntu', 'cluster-sworm'],
      },
      {
        id: 'reseau-admin',
        name: 'Infrastructure Réseau',
        level: 60,
        color: 'accent',
        description: 'Configuration de routeurs, switches, VLANs et infrastructure réseau.',
        projects: ['config-ubuntu', 'cluster-sworm'],
      },
      {
        id: 'docker-orchest',
        name: 'Conteneurisation',
        level: 80,
        color: 'primary',
        description: 'Docker, Docker Swarm et orchestration d\'infrastructures.',
        projects: ['cluster-sworm', 'env-docker'],
      },
      {
        id: 'devops',
        name: 'DevOps',
        level: 65,
        color: 'success',
        description: 'Pratiques DevOps et intégration continue.',
        projects: ['cluster-sworm', 'env-docker'],
      },
      {
        id: 'securite',
        name: 'Sécurité & Hardening',
        level: 80,
        color: 'danger',
        description: 'Sécurisation des systèmes et analyse des vulnérabilités.',
        projects: ['config-ubuntu', 'exploit-memoire'],
      },
      {
        id: 'reverse-engineering',
        name: 'Reverse Engineering',
        level: 10,
        color: 'warning',
        description: 'Analyse et rétro-ingénierie de systèmes.',
        projects: ['exploit-memoire', 'securite-systemes'],
      }
    ]
  },
  {
    id: 'gerer',
    name: 'Gérer',
    description: 'Concevoir, gérer, administrer et exploiter les données de l\'entreprise',
    icon: 'database',
    referentiel: 'Concevoir, gérer, administrer et exploiter les données de l\'entreprise et mettre à disposition toutes les informations pour un bon pilotage.',
    composantes: [
      'CE4.01 | Respect de la vie privée et protection des données',
      'CE4.02 | Considération des enjeux économiques et écologiques',
      'CE4.03 | Fondements mathématiques',
      'CE4.05 | Cohérence et qualité des données'
    ],
    skills: [
      {
        id: 'sql-db',
        name: 'SQL & Bases de données',
        level: 60,
        color: 'primary',
        description: 'Conception et administration de bases de données relationnelles.',
        projects: ['web-laravel', 'gestion-vols-java'],
      },
      {
        id: 'architecture-web',
        name: 'Architecture Web',
        level: 65,
        color: 'secondary',
        description: 'Conception d\'applications web dynamiques et sécurisées.',
        projects: ['web-laravel', 'portfolio'],
      }
    ]
  },
  {
    id: 'collaborer',
    name: 'Collaborer',
    description: 'Travailler dans une équipe informatique en suivant une démarche de développement collaboratif',
    icon: 'users',
    referentiel: 'Acquérir, développer et exploiter les aptitudes nécessaires pour travailler efficacement dans une équipe informatique.',
    composantes: [
      'CE6.01 | Intégration dans une équipe pluridisciplinaire',
      'CE6.02 | Accompagnement des évolutions',
      'CE6.03 | Respect des contraintes juridiques',
      'CE6.04 | Communication efficace et collaborative'
    ],
    skills: [      {
        id: 'git-collab',
        name: 'Git & Collaboration',
        level: 65,
        color: 'primary',
        description: 'Utilisation avancée de Git pour le travail collaboratif.',
        projects: ['web-laravel', 'portfolio'],
      },
      {
        id: 'methodologies',
        name: 'Méthodologies agiles',
        level: 60,
        color: 'success',
        description: 'Application des principes agiles dans les projets.',
        projects: ['web-laravel', 'cluster-sworm'],
      }
    ]
  },
  {
    id: 'finance',
    name: 'Finance Quantitative',
    description: 'Analyse et modélisation de données financières avec des techniques avancées d\'apprentissage automatique',
    icon: 'chart-bar',
    referentiel: 'Développement et application de modèles quantitatifs pour l\'analyse financière et la prise de décision.',
    isPersonalProject: true,
    personalInfo: 'Compétence personnelle pour la finance quantitative',
    composantes: [
      'Analyse et traitement de données financières',
      'Développement de modèles prédictifs',
      'Optimisation de stratégies d\'investissement',
      'Gestion des risques et validation de modèles'
    ],
    sousCompetencesNationales: [
      { id: 'realiser', label: 'Réaliser', description: 'Développement d’outils et d’algorithmes pour l’analyse financière.' },
      { id: 'optimiser', label: 'Optimiser', description: 'Optimisation de stratégies d’investissement et de modèles quantitatifs.' },
      { id: 'administrer', label: 'Administrer', description: 'Gestion et sécurisation des données financières.' },
      { id: 'gerer', label: 'Gérer', description: 'Gestion des risques et validation des résultats financiers.' }
    ],
    skills: [
      {
        id: 'data-analysis',
        name: 'Analyse de données',
        level: 80,
        color: 'primary',
        description: 'Visualisation et traitement de données financières.',
        projects: ['analyse-donnees', 'trading-algo', 'optimisation-trading-pso', 'trading-algo-automatisation', 'optimisation-genetique-ict'],
      },
      {
        id: 'ml-models',
        name: 'Modèles d\'apprentissage',
        level: 50,
        color: 'secondary',
        description: 'Réseaux de neurones et techniques de ML avancées.',
        projects: ['trading-algo'],
      },
      {
        id: 'optimization',
        name: 'Optimisation avancée',
        level: 80,
        color: 'success',
        description: 'Essaims de particules et algorithmes génétiques.',
        projects: ['trading-algo', 'optimisation', 'optimisation-trading-pso', 'optimisation-genetique-ict'],
      },
      {
        id: 'risk-management',
        name: 'Gestion des risques',
        level: 70,
        color: 'warning',
        description: 'Analyse des ratios (Sharpe, Sortino, Treynor) et mesures de risque (drawdown, alpha, bêta).',
        projects: ['trading-algo', 'analyse-donnees', 'optimisation-trading-pso', 'trading-algo-automatisation', 'optimisation-genetique-ict'],
      },
      {
        id: 'model-validation',
        name: 'Validation de modèles',
        level: 80,
        color: 'danger',
        description: 'Gestion d\'overfitting et validation croisée.',
        projects: ['trading-algo', 'analyse-donnees', 'optimisation-trading-pso', 'trading-algo-automatisation', 'optimisation-genetique-ict'],
      },
      {
        id: 'time-series-analysis',
        name: 'Analyse de séries temporelles multi-échelles',
        level: 75,
        color: 'accent',
        description: 'Analyse quantitative de séries temporelles financières sur plusieurs granularités.',
        projects: ['optimisation-genetique-ict', 'optimisation-trading-pso', 'trading-algo-automatisation'],
      },
      {
        id: 'software-architecture-finance',
        name: 'Architecture logicielle pour systèmes financiers',
        level: 80,
        color: 'primary',
        description: 'Conception d’architectures robustes et modulaires pour l’automatisation et l’analyse financière.',
        projects: ['optimisation-genetique-ict', 'optimisation-trading-pso', 'trading-algo-automatisation'],
      }
    ]
  }
];

export default skills;