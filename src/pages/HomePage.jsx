import React from 'react';
import Hero from '../components/home/Hero';
import { motion } from 'framer-motion';
import projects from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import skills from '../data/skills';
import Badge from '../components/ui/Badge';

// Animation d'apparition pour les sections
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: custom * 0.15,
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  }),
};

const HomePage = () => {
  return (
    <div className="flex flex-col gap-24">
      {/* Section Hero */}
      <Hero />
      
      {/* Section Projets (affichage dynamique) */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        custom={1}
        id="projets"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Projets universitaires</h2>
            <div className="flex flex-col gap-8">
              {['exploit-memoire', 'env-docker', 'algo-graphes'].map((id, idx) => {
                const project = projects.find(p => p.id === id);
                return project ? (
                  <ProjectCard key={project.id} project={project} index={idx} featured={project.isFeatured} />
                ) : null;
              })}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-heading font-bold mb-6 text-primary">Projets personnels</h2>
            <div className="flex flex-col gap-8">
              {projects.filter(p => p.isPersonalProject).slice(0, 3).map((project, idx) => (
                <ProjectCard key={project.id} project={project} index={idx} featured={project.isFeatured} />
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/projets" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-xl transition-colors shadow-button focus:outline-none focus:ring-2 focus:ring-primary/50">
            Voir tous les projets
          </a>
        </div>
      </motion.section>

      {/* Section Compétences (affichage dynamique) */}
      <motion.section
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
        custom={2}
        id="competences"
      >
        <h2 className="text-3xl font-heading font-bold mb-4 text-primary">Compétences du référentiel national</h2>
        <p className="text-lg text-text/80 dark:text-text-dark/80 mb-8">
          Mes compétences s'alignent sur le référentiel national du BUT Informatique DACS
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Colonne 1 : Compétences universitaires */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Compétences universitaires</h3>
            <div className="flex flex-col gap-4">
              {skills.filter(category => !category.isPersonalProject).map((category) => (
                <div key={category.id} className="bg-surface dark:bg-surface-dark rounded-2xl shadow-card p-6 flex flex-col">
                  <h4 className="text-lg font-heading font-semibold mb-2 text-primary">{category.name}</h4>
                  <p className="text-text/70 dark:text-text-dark/70 mb-3">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 2).map((skill) => (
                      <Badge 
                        key={skill.id} 
                        color={skill.color} 
                        variant="default"
                        className="text-sm"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Colonne 2 : Compétences personnelles */}
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4 text-primary">Compétences personnelles</h3>
            <div className="flex flex-col gap-4">
              {skills.filter(category => category.isPersonalProject).map((category) => (
                <div key={category.id} className="bg-surface dark:bg-surface-dark rounded-2xl shadow-card p-6 flex flex-col">
                  <h4 className="text-lg font-heading font-semibold mb-2 text-primary">{category.name}</h4>
                  <p className="text-text/70 dark:text-text-dark/70 mb-3">{category.description}</p>
                  {category.sousCompetencesNationales && (
                    <div className="mb-2">
                      <span className="text-xs font-semibold text-primary">Liens avec le référentiel national :</span>
                      <ul className="list-disc pl-5 mt-1 text-xs text-text/80 dark:text-text-dark/80">
                        {category.sousCompetencesNationales.map((sc) => (
                          <li key={sc.id}><span className="font-bold">{sc.label}</span> : {sc.description}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {category.personalInfo && (
                    <div className="mb-2 text-xs text-primary font-semibold">{category.personalInfo}</div>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.slice(0, 2).map((skill) => (
                      <Badge 
                        key={skill.id} 
                        color={skill.color} 
                        variant="default"
                        className="text-sm"
                      >
                        {skill.name}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <a href="/competences" className="inline-block bg-primary hover:bg-primary-dark text-white font-medium py-2 px-6 rounded-xl transition-colors shadow-button focus:outline-none focus:ring-2 focus:ring-primary/50">
            Voir toutes les compétences
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
