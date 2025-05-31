import React from 'react';
import { motion } from 'framer-motion';
import Badge from '../components/ui/Badge';

const AboutPage = () => {
  const specialisations = [
    { nom: 'Cybersécurité', color: 'danger' },
    { nom: 'Administration système', color: 'primary' },
    { nom: 'DevOps & CI/CD', color: 'success' },
    { nom: 'Développement sécurisé', color: 'secondary' },
    { nom: 'Infrastructure Cloud', color: 'accent' }
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-heading font-bold mb-10 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        À propos de moi
      </motion.h1>
      <div className="max-w-3xl text-lg text-text/80 dark:text-text-dark/80 leading-relaxed">
        <p className="mb-4 font-semibold text-2xl text-primary">Evan Saboulard-Serre</p>
        
        {/* Formation */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">Formation</h2>
          <p className="mb-4">
            Étudiant en 2<sup>ème</sup> année de BUT Informatique, parcours DACS 
            (Déploiement d'Applications Communicantes et Sécurisées) à l'IUT de Blagnac.
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {specialisations.map((spec, index) => (
              <Badge key={index} color={spec.color} variant="default">
                {spec.nom}
              </Badge>
            ))}
          </div>
        </div>

        {/* Parcours DACS */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">Le parcours DACS</h2>
          <p className="mb-4">
            Le parcours DACS forme des professionnels capables de déployer et maintenir des
            infrastructures sécurisées. Cette formation met l'accent sur :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>La mise en place d'infrastructures cloud et on-premise</li>
            <li>La sécurisation des systèmes et des applications</li>
            <li>L'automatisation des déploiements (DevOps)</li>
            <li>La gestion des environnements conteneurisés</li>
            <li>Le développement d'applications sécurisées</li>
          </ul>
        </div>

        {/* Intérêts & Projets */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">Centres d'intérêt</h2>
          <p className="mb-4">
            Passionné par la cybersécurité et la finance quantitative, je développe des projets
            combinant ces deux domaines. Mon objectif est d'appliquer les principes de sécurité
            informatique aux systèmes financiers algorithmiques.
          </p>
        </div>

        {/* Objectifs */}
        <div className="mb-8">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">Objectifs professionnels</h2>
          <p className="mb-4">
            Je souhaite approfondir mes compétences en :
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Sécurité des systèmes distribués</li>
            <li>Orchestration de conteneurs et haute disponibilité</li>
            <li>Automatisation et Infrastructure as Code</li>
            <li>Analyse et gestion des vulnérabilités</li>
          </ul>
        </div>

        {/* Proposition de projet */}
        <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
          <h2 className="text-xl font-heading font-semibold mb-4 text-primary">Projet inter-filière</h2>
          <p>
            Je propose la réalisation d'un projet inter-filière (DACS / RA / AGED) visant à concevoir 
            et déployer un ERP sécurisé. Ce projet permettrait de mutualiser les compétences
            de chaque spécialité en combinant :
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li>Architecture micro-services sécurisée (DACS)</li>
            <li>Interface utilisateur intuitive (RA)</li>
            <li>Gestion des processus métier (AGED)</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
