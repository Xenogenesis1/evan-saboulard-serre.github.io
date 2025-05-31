<<<<<<< HEAD
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-heading font-bold mb-10 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mes projets
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Projets universitaires</h2>
          <div className="flex flex-col gap-8">
            {projects.filter(p => p.clientName && p.clientName.toLowerCase().includes('universitaire') && p.isFeatured).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Projets personnels</h2>
          <div className="flex flex-col gap-8">
            {projects.filter(p => p.isPersonalProject).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
=======
import React from 'react';
import projects from '../data/projects';
import ProjectCard from '../components/projects/ProjectCard';
import { motion } from 'framer-motion';

const ProjectsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-heading font-bold mb-10 text-primary"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mes projets
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Projets universitaires</h2>
          <div className="flex flex-col gap-8">
            {projects.filter(p => p.clientName && p.clientName.toLowerCase().includes('universitaire') && p.isFeatured).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">Projets personnels</h2>
          <div className="flex flex-col gap-8">
            {projects.filter(p => p.isPersonalProject).map((project, idx) => (
              <ProjectCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
>>>>>>> 9118f070158da87ce42521e3257c6926681040c9
