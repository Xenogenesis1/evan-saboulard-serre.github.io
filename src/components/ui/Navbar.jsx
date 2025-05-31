import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Accueil', to: '/' },
  { label: 'Projets', to: '/projets' },
  { label: 'Compétences', to: '/competences' },
  { label: 'Expérience', to: '/experience' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Animation Framer Motion pour le menu mobile
  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  // Gestion du scroll fluide
  const handleNavClick = (e, to) => {
    if (to.startsWith('#')) {
      e.preventDefault();
      const section = document.querySelector(to);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
        setMenuOpen(false);
      }
    } else {
      setMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-dark/80 backdrop-blur-md shadow transition-all duration-300">
      <nav className="container mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo ou texte */}
        <Link to="/" className="font-heading text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-glow animate-gradient">
          Evan S-S
        </Link>
        {/* Liens de navigation desktop */}
        <ul className="hidden md:flex gap-6 lg:gap-10 items-center">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`relative font-medium transition-colors duration-200 px-2 py-1 rounded-lg
                  ${location.pathname === link.to
                    ? 'text-blue-300 font-bold'
                    : 'text-gray-100 hover:text-blue-300'}
                  hover:underline underline-offset-4`}
                onClick={(e) => handleNavClick(e, link.to)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Menu burger mobile */}
        <div className="flex items-center">
          <button
            className="md:hidden p-2 rounded-lg hover:bg-primary/20 transition-colors"
            aria-label="Ouvrir le menu"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="26" height="26" fill="none" viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </nav>
      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.ul
            className="md:hidden flex flex-col gap-2 px-6 pb-6 pt-2 bg-surface-dark shadow-lg rounded-b-2xl"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={`block font-medium px-2 py-3 rounded-lg transition-colors
                    ${location.pathname === link.to
                      ? 'text-blue-300 font-bold'
                      : 'text-gray-100 hover:text-blue-300'}`}
                  onClick={(e) => handleNavClick(e, link.to)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
