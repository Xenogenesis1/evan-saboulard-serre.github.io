/**
 * Données d'expérience professionnelle pour le portfolio
 * Inclut les postes occupés, les entreprises et les réalisations
 */
const experience = [
    {
      id: 'alternance-laposte',
      title: 'Administrateur Système & Réseau (Alternance, Support N2)',
      company: 'La Poste',
      location: 'Lyon, France',
      period: '',
      description: `
        Alternance en tant qu'administrateur système et réseau au sein du support N2 de La Poste. Missions centrées sur la gestion des demandes utilisateurs, l'administration des accès, la sécurité et le support technique avancé dans un environnement hautement réglementé.
      `,
      achievements: [
        "Gestion des demandes d'autorisations et d'accréditations bancaires via l'outil T41 / RACF (gestion des droits IDRH, environnement sécurisé et réglementé)",
        "Création et gestion de comptes dans l'Active Directory sécurisé par Citrix",
        "Création d'adresses email, gestion des autorisations de navigation web, gestion de l'espace OneDrive, accessibilité au télétravail, gestion des licences Microsoft via la solution PLATON (interface centralisée et ergonomique)",
        "Extraction et gestion de vidéosurveillance à l'aide du logiciel Prynvision (recherche et récupération de vidéos de caméras de surveillance)",
        "Participation à un projet de mise en place d'un serveur de secours (projet semestriel)",
        "Formation et accompagnement des utilisateurs sur les répertoires réseaux",
        "Supervision du déploiement d'outils automatisés pour l'administration système et réseau"
      ],
      skills: [
        'Active Directory', 'Citrix', 'T41', 'RACF', 'PLATON', 'Prynvision', 'Windows Server', 'OneDrive', 'Microsoft 365', 'Sécurité', 'Automatisation', 'Support N2', 'Administration système', 'Administration réseau'
      ],
      type: 'alternance',
    }
  ];
  
  export default experience;