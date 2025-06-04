import React from 'react';
import { useParams, Link } from 'react-router-dom';
import projects from '../data/projects';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { motion } from 'framer-motion';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-heading font-bold text-primary mb-6">Projet introuvable</h1>
        <Link to="/projets" className="text-primary underline">Retour aux projets</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl flex flex-col gap-10">
      {/* En-tête projet */}
      <Card variant="elevated" className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-gray-200 dark:border-gray-700 shadow-card p-8 flex flex-col items-center text-center gap-3">
        <motion.h1
          className="text-4xl font-heading font-bold text-gray-800 dark:text-gray-100 mb-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {project.title}
        </motion.h1>

        {/* Compétences techniques */}
        <div className="flex flex-wrap gap-2 justify-center mb-2">
          {project.skills.map((skill) => (
            <Badge key={skill.id} color={skill.color} variant="default" className="text-xs px-3 py-1 font-semibold">
              {skill.name}
            </Badge>
          ))}
        </div>

        <div className="text-sm text-secondary font-semibold mb-2 uppercase tracking-wide">
          {project.category} {project.clientName && `• ${project.clientName}`}
        </div>

        <div className="flex gap-4 mt-2 justify-center">
          {project.projectUrl && (
            <Button href={project.projectUrl} variant="outline" size="md">Voir le projet</Button>
          )}
          {project.repositoryUrl && (
            <Button href={project.repositoryUrl} variant="outline" size="md">Code source</Button>
          )}
        </div>
      </Card>

      {/* Description */}
      <Card variant="default" className="prose dark:prose-invert max-w-none text-lg bg-background/80 dark:bg-background-dark/80 border-l-4 border-secondary/40 p-6">
        <p>{project.fullDescription}</p>
      </Card>

      {/* Badge projet personnel pour la finance quantitative */}
      {project.personalInfo && (
        <div className="mb-4">
          <Badge color="accent" variant="outline" className="text-xs font-bold uppercase tracking-wider">
            {project.personalInfo}
          </Badge>
        </div>
      )}

      {/* Compétences du référentiel */}
      {project.competencesReferenciel && (
        <Card variant="elevated" className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary/40 p-6">
          <h2 className="text-xl font-heading font-semibold text-gray-800 dark:text-gray-100 mb-4">
            Compétences du référentiel national
          </h2>
          <div className="space-y-6">
            {project.competencesReferenciel.map((comp) => (
              <div key={comp.id} className="bg-white/50 dark:bg-gray-800/50 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <Badge color="primary" variant="default" className="text-sm px-3 py-1">
                    {comp.id.toUpperCase()}
                  </Badge>
                  <span className="text-sm text-text/60">
                    {comp.composantes.join(', ')}
                  </span>
                </div>
                <p className="text-sm text-text/90 dark:text-text-dark/90">
                  {comp.justification}
                </p>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Défis & Solutions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card variant="elevated" className="bg-primary/5 dark:bg-primary/10 border-l-4 border-primary/40">
          <div className="flex items-center gap-2 mb-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-primary">
              <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-xl font-heading font-semibold text-gray-800 dark:text-gray-100">Défis</h2>
          </div>
          <ul className="list-disc pl-5 text-text/90 dark:text-text-dark/90 space-y-1">
            {project.challenges.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </Card>
        <Card variant="elevated" className="bg-success/5 dark:bg-success/10 border-l-4 border-success/40">
          <div className="flex items-center gap-2 mb-2">
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" className="text-success">
              <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h2 className="text-xl font-heading font-semibold text-gray-800 dark:text-gray-100">Solutions</h2>
          </div>
          <ul className="list-disc pl-5 text-text/90 dark:text-text-dark/90 space-y-1">
            {project.solutions.map((s, i) => <li key={i}>{s}</li>)}
          </ul>
        </Card>
      </div>

      {/* Retour */}
      <div className="text-center mt-8">
        <Link to="/projets" className="text-secondary underline hover:text-primary transition-colors">
          ← Retour aux projets
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
