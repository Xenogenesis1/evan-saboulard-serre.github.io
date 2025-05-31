<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import des composants communs
import AnimatedBackground from './components/ui/AnimatedBackground';

// Import des pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';

// Import du composant Navbar
import Navbar from './components/ui/Navbar';

// ErrorBoundary pour capturer les erreurs de rendu
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Log l'erreur dans la console pour le debug
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: 32 }}>
          <h1>Erreur de rendu détectée</h1>
          <pre>{this.state.error && this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Composant principal de l'application
function App() {
  const location = useLocation();
  
  // Effet pour scroller vers le haut lors d'un changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('App monté, location:', location.pathname);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <div className="app relative min-h-screen bg-gradient-to-br from-[#181c2b] via-[#1a223a] to-[#10121a] text-text dark:text-text-dark transition-colors duration-300">
        {/* Arrière-plan animé */}
        <AnimatedBackground />
        
        {/* Navbar sticky */}
        <Navbar />
        
        {/* Contenu principal avec transitions animées entre les pages */}
        <main className="pt-20 pb-24">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projets" element={<ProjectsPage />} />
              <Route path="/projets/:id" element={<ProjectDetailPage />} />
              <Route path="/competences" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ErrorBoundary>
  );
}

=======
import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Import des composants communs
import AnimatedBackground from './components/ui/AnimatedBackground';

// Import des pages
import HomePage from './pages/HomePage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailPage from './pages/ProjectDetailPage';
import SkillsPage from './pages/SkillsPage';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';

// Import du composant Navbar
import Navbar from './components/ui/Navbar';

// ErrorBoundary pour capturer les erreurs de rendu
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    // Log l'erreur dans la console pour le debug
    console.error('Erreur capturée par ErrorBoundary:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: 'red', padding: 32 }}>
          <h1>Erreur de rendu détectée</h1>
          <pre>{this.state.error && this.state.error.toString()}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

// Composant principal de l'application
function App() {
  const location = useLocation();
  
  // Effet pour scroller vers le haut lors d'un changement de page
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log('App monté, location:', location.pathname);
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <div className="app relative min-h-screen bg-gradient-to-br from-[#181c2b] via-[#1a223a] to-[#10121a] text-text dark:text-text-dark transition-colors duration-300">
        {/* Arrière-plan animé */}
        <AnimatedBackground />
        
        {/* Navbar sticky */}
        <Navbar />
        
        {/* Contenu principal avec transitions animées entre les pages */}
        <main className="pt-20 pb-24">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<HomePage />} />
              <Route path="/projets" element={<ProjectsPage />} />
              <Route path="/projets/:id" element={<ProjectDetailPage />} />
              <Route path="/competences" element={<SkillsPage />} />
              <Route path="/experience" element={<ExperiencePage />} />
              <Route path="/a-propos" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </ErrorBoundary>
  );
}

>>>>>>> 9118f070158da87ce42521e3257c6926681040c9
export default App;