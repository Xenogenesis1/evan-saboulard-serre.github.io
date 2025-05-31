import React, { createContext, useState, useEffect } from 'react';

// Import des données
import projectsData from '../data/projects';
import skillsData from '../data/skills';
import experienceData from '../data/experience';

// Création du contexte pour les données du portfolio
export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  // États pour stocker les données
  const [projects, setProjects] = useState(projectsData);
  const [skills, setSkills] = useState(skillsData);
  const [experience, setExperience] = useState(experienceData);
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const [activeFilters, setActiveFilters] = useState([]);

  // Fonction pour filtrer les projets par compétence
  const filterProjectsBySkill = (skillId) => {
    // Si le filtre est déjà actif, on le supprime
    if (activeFilters.includes(skillId)) {
      const updatedFilters = activeFilters.filter(id => id !== skillId);
      setActiveFilters(updatedFilters);
      
      // Si plus aucun filtre n'est actif, on affiche tous les projets
      if (updatedFilters.length === 0) {
        setFilteredProjects(projects);
        return;
      }
      
      // Sinon, on applique les filtres restants
      const filtered = projects.filter(project => 
        project.skills.some(skill => updatedFilters.includes(skill.id))
      );
      setFilteredProjects(filtered);
    } else {
      // Sinon, on ajoute le filtre
      const updatedFilters = [...activeFilters, skillId];
      setActiveFilters(updatedFilters);
      
      // On applique les filtres
      const filtered = projects.filter(project => 
        project.skills.some(skill => updatedFilters.includes(skill.id))
      );
      setFilteredProjects(filtered);
    }
  };

  // Fonction pour réinitialiser les filtres
  const resetFilters = () => {
    setActiveFilters([]);
    setFilteredProjects(projects);
  };

  // Fonction pour obtenir un projet par son ID
  const getProjectById = (id) => {
    return projects.find(project => project.id === id) || null;
  };

  // Fonction pour obtenir les projets liés à un projet donné
  const getRelatedProjects = (projectId) => {
    const currentProject = getProjectById(projectId);
    if (!currentProject) return [];
    
    // On trouve des projets qui partagent des compétences avec le projet actuel
    const skillIds = currentProject.skills.map(skill => skill.id);
    
    return projects
      .filter(project => 
        project.id !== projectId && 
        project.skills.some(skill => skillIds.includes(skill.id))
      )
      .slice(0, 3); // Limiter à 3 projets liés
  };

  // Valeur fournie par le contexte
  const value = {
    projects,
    skills,
    experience,
    filteredProjects,
    activeFilters,
    filterProjectsBySkill,
    resetFilters,
    getProjectById,
    getRelatedProjects,
  };

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  );
};