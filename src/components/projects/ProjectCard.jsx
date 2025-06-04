import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Badge from '../ui/Badge';
import Card from '../ui/Card';

/**
 * Composant ProjectCard pour afficher un aperçu d'un projet
 * Inclut les compétences du référentiel national
 */
const ProjectCard = ({ project, index, featured = false }) => {
  // Animation de hover plus douce et subtile
  const hoverAnimation = {
    rest: { scale: 1, boxShadow: '0 4px 20px -2px rgba(104,66,185,0.15)' },
    hover: {
      scale: 1.03,
      boxShadow: '0 16px 30px -6px rgba(104,66,185,0.25)',
      filter: 'brightness(1.03)',
      transition: { duration: 0.22 }
    }
  };
  
  return (
    <Link to={`/projets/${project.id}`} className="block h-full">
      <motion.div
        initial="rest"
        whileHover="hover"
        animate="rest"
        variants={hoverAnimation}
        className="h-full"
      >
        <Card 
          variant="default" 
          className={`h-full flex flex-col overflow-hidden relative bg-gradient-to-br from-secondary/5 via-accent/3 to-primary/8 border border-gray-200 dark:border-gray-700 shadow-card hover:shadow-card-hover transition-all duration-300 min-h-[420px]`} 
          animateEntry={true}
          delay={index}
          interactive={true}
        >
          {/* Badge Projet phare */}
          {project.isFeatured && (
            <div className="absolute top-4 right-4 z-10">
              <Badge color="primary" variant="default" className="shadow-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-primary to-secondary border border-primary/30">
                Projet phare
              </Badge>
            </div>
          )}
          
          {/* Badge Projet personnel pour la finance quantitative */}
          {project.personalInfo && (
            <div className="absolute top-4 left-4 z-10">
              <Badge color="accent" variant="outline" className="shadow-sm px-4 py-1.5 text-xs font-bold uppercase tracking-wider">
                {project.personalInfo}
              </Badge>
            </div>
          )}
          
          {/* Contenu textuel du projet */}
          <div className="p-6 flex flex-col flex-grow gap-2">
            <h3 className="text-2xl font-heading font-bold mb-1 text-gray-800 dark:text-gray-100">
              {project.title}
            </h3>
            <p className="text-sm text-secondary font-semibold mb-2 uppercase tracking-wide">
              {project.category}
            </p>
            <p className="text-text dark:text-text-dark/90 mb-4 line-clamp-3 leading-relaxed text-base">
              {project.shortDescription}
            </p>

            {/* Compétences techniques */}
            <div className="flex flex-wrap gap-2 mb-2">
              {project.skills.slice(0, 3).map((skill) => (
                <Badge 
                  key={skill.id} 
                  color={skill.color || 'primary'} 
                  variant="default"
                  className="text-xs px-2 py-1"
                >
                  {skill.name}
                </Badge>
              ))}
              {project.skills.length > 3 && (
                <Badge color="neutral" variant="outline" className="text-xs">
                  +{project.skills.length - 3}
                </Badge>
              )}
            </div>

            {/* Compétences du référentiel */}
            {project.competencesReferenciel && (
              <div className="mt-2 flex flex-wrap gap-2">
                {project.competencesReferenciel.map((comp) => (
                  <Badge
                    key={comp.id}
                    color="primary"
                    variant="outline"
                    className="text-xs px-2 py-1"
                  >
                    {comp.id.toUpperCase()}
                  </Badge>
                ))}
              </div>
            )}

            <div className="mt-auto flex justify-end">
              <span className="text-xs text-text/60 italic">Voir les détails →</span>
            </div>
          </div>
        </Card>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;