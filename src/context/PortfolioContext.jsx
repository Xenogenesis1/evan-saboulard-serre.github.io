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
    if (activeFilters.includes(skillId)) {
      const updatedFilters = activeFilters.filter(id => id !== skillId);
      setActiveFilters(updatedFilters);
      if (updatedFilters.length === 0) {
        setFilteredProjects(projects);
        return;
      }
      const filtered = projects.filter(project => 
        project.skills.some(skill => updatedFilters.includes(skill.id))
      );
      setFilteredProjects(filtered);
    } else {
      const updatedFilters = [...activeFilters, skillId];
      setActiveFilters(updatedFilters);
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
    const skillIds = currentProject.skills.map(skill => skill.id);
    return projects
      .filter(project => 
        project.id !== projectId && 
        project.skills.some(skill => skillIds.includes(skill.id))
      )
      .slice(0, 3);
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