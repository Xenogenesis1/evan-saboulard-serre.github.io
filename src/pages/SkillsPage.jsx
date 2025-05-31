import React from 'react';
import skills from '../data/skills';
import { motion } from 'framer-motion';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';

const SkillsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 flex-1">
        <motion.h1
          className="text-4xl font-heading font-bold mb-10 text-primary"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Mes compétences
        </motion.h1>
        
        {/* Description du référentiel */}
        <div className="mb-12 prose dark:prose-invert max-w-none">
          <p className="text-lg text-text/80 dark:text-text-dark/80">
            Mes compétences sont structurées selon le référentiel national du BUT Informatique,
            parcours Déploiement d'Applications Communicantes et Sécurisées (DACS).
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Compétences universitaires</h2>
            {skills.filter(category => !category.isPersonalProject).map((category) => (
              <Card
                key={category.id}
                variant="elevated"
                className="bg-surface dark:bg-surface-dark p-6 flex flex-col gap-4 mb-6"
              >
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary flex items-center gap-2">
                    {category.name}
                  </h3>
                  <p className="text-text/70 dark:text-text-dark/70 mb-4">{category.description}</p>
                </div>

                {/* Liens avec le référentiel national */}
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

                {/* Composantes du référentiel */}
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-4">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Composantes essentielles
                  </h3>
                  <ul className="list-disc pl-4 text-sm space-y-1 text-text/80 dark:text-text-dark/80">
                    {category.composantes.map((comp, index) => (
                      <li key={index}>{comp}</li>
                    ))}
                  </ul>
                </div>

                {/* Compétences techniques */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Compétences techniques
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {skill.name}
                          </h4>
                          <Badge color={skill.color}>
                            Niveau {skill.level}%
                          </Badge>
                        </div>
                        <p className="text-sm text-text/70 dark:text-text-dark/70 mb-2">
                          {skill.description}
                        </p>
                        {skill.projects.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {skill.projects.map((project) => (
                              <Badge
                                key={project}
                                color="secondary"
                                variant="outline"
                                className="text-xs"
                              >
                                {project}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
          <div>
            <h2 className="text-2xl font-bold text-primary mb-4">Compétences personnelles</h2>
            {skills.filter(category => category.isPersonalProject).map((category) => (
              <Card
                key={category.id}
                variant="elevated"
                className="bg-surface dark:bg-surface-dark p-6 flex flex-col gap-4 mb-6"
              >
                <div>
                  <h3 className="text-xl font-heading font-semibold mb-2 text-primary flex items-center gap-2">
                    {category.name}
                    {category.isPersonalProject && (
                      <Badge color="accent" variant="outline" className="text-xs">
                        Compétence personnelle
                      </Badge>
                    )}
                  </h3>
                  <p className="text-text/70 dark:text-text-dark/70 mb-4">{category.description}</p>
                </div>

                {/* Liens avec le référentiel national */}
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

                {/* Composantes du référentiel */}
                <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-4 mb-4">
                  <h3 className="text-sm font-semibold text-primary mb-2">
                    Composantes essentielles
                  </h3>
                  <ul className="list-disc pl-4 text-sm space-y-1 text-text/80 dark:text-text-dark/80">
                    {category.composantes.map((comp, index) => (
                      <li key={index}>{comp}</li>
                    ))}
                  </ul>
                </div>

                {/* Compétences techniques */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">
                    Compétences techniques
                  </h3>
                  <div className="space-y-4">
                    {category.skills.map((skill) => (
                      <div key={skill.id} className="bg-gray-50 dark:bg-gray-800/50 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-gray-900 dark:text-gray-100">
                            {skill.name}
                          </h4>
                          <Badge color={skill.color}>
                            Niveau {skill.level}%
                          </Badge>
                        </div>
                        <p className="text-sm text-text/70 dark:text-text-dark/70 mb-2">
                          {skill.description}
                        </p>
                        {skill.projects.length > 0 && (
                          <div className="flex flex-wrap gap-2">
                            {skill.projects.map((project) => (
                              <Badge
                                key={project}
                                color="secondary"
                                variant="outline"
                                className="text-xs"
                              >
                                {project}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;
