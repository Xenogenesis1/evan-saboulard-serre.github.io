import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './context/ThemeContext';
import { PortfolioProvider } from './context/PortfolioContext';

// Import des styles globaux
import './styles/global.css';
import './styles/variables.css';
import './styles/animations.css';

// Point d'entrée de l'application
// On utilise createRoot de React 18 pour profiter des améliorations de performance
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    {/* BrowserRouter pour la gestion des routes */}
    <BrowserRouter>
      {/* ThemeProvider pour la gestion du thème clair/sombre */}
      <ThemeProvider>
        {/* PortfolioProvider pour accéder aux données du portfolio */}
        <PortfolioProvider>
          <App />
        </PortfolioProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);