import React, { createContext, useEffect } from 'react';

// Création du contexte pour le thème
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Force le thème sombre
  const theme = 'dark';

  // Mettre à jour le DOM lorsque le composant est monté
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  // Fournir le thème aux composants enfants
  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};