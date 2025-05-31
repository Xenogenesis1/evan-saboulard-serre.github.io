import React from 'react';
import experience from '../data/experience';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import { motion } from 'framer-motion';

const ExperiencePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 flex-1">
        <motion.h1
          className="text-4xl font-heading font-bold mb-10 text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Mon expérience
        </motion.h1>
        <div className="flex flex-col gap-8">
          {experience.map((exp, idx) => (
            <Card key={exp.id} variant="elevated" className="p-6 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-primary/10 shadow-card">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-gray-800 dark:text-gray-100 mb-1">{exp.title}</h2>
                  <div className="text-sm text-secondary font-semibold mb-1">{exp.company} • {exp.location}</div>
                  {/* Affichage conditionnel de la période */}
                  {exp.period && (
                    <div className="text-xs text-text/60 mb-2">{exp.period}</div>
                  )}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {exp.skills && exp.skills.map((skill) => (
                    <Badge key={skill} color="accent" variant="default" className="text-xs px-3 py-1 font-semibold">{skill}</Badge>
                  ))}
                </div>
              </div>
              <p className="mb-3 text-text/90 dark:text-text-dark/90 leading-relaxed">{exp.description}</p>
              {exp.achievements && exp.achievements.length > 0 && (
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-1">Réalisations / Missions</h3>
                  <ul className="list-disc pl-6 space-y-1 text-text/80 dark:text-text-dark/80">
                    {exp.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperiencePage;
