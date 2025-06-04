import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

/**
 * Composant Button réutilisable avec plusieurs variantes
 * Supporte l'animation et peut être rendu comme un bouton ou un lien
 *
 * @param {Object} props - Les propriétés du composant
 * @param {string} [props.variant='primary'] - La variante du bouton (primary, secondary, outline, text)
 * @param {string} [props.size='md'] - La taille du bouton (sm, md, lg)
 * @param {boolean} [props.fullWidth=false] - Si le bouton doit prendre toute la largeur disponible
 * @param {string} [props.to] - URL pour les liens internes (utilise React Router)
 * @param {string} [props.href] - URL pour les liens externes
 * @param {Function} [props.onClick] - Fonction appelée lors du clic
 * @param {React.ReactNode} props.children - Le contenu du bouton
 * @param {string} [props.className] - Classes CSS additionnelles
 */
const Button = ({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  href,
  onClick,
  children,
  className = '',
  ...props
}) => {
  // Ajout d'un effet glow/ombre et scale animé au hover
  const variantClasses = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-glow',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white shadow-glow',
    outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary/5 shadow-glow',
    text: 'bg-transparent text-primary hover:bg-primary/5',
    accent: 'bg-accent hover:bg-accent-dark text-background-dark shadow-glow',
    ghost: 'bg-transparent hover:bg-surface dark:hover:bg-surface-dark text-text dark:text-text-dark',
  };

  // Définition des classes selon la taille
  const sizeClasses = {
    sm: 'text-sm py-1.5 px-3 rounded-lg',
    md: 'text-base py-2 px-4 rounded-xl',
    lg: 'text-lg py-3 px-6 rounded-xl',
  };

  // Assemblage des classes
  const buttonClasses = `
    inline-flex items-center justify-center
    font-medium transition-all duration-200
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? 'w-full' : ''}
    shadow-button hover:shadow-lg
    focus:outline-none focus:ring-2 focus:ring-primary/50
    active:scale-[0.98]
    ${className}
  `;

  // Animation au survol
  return (
    to ? (
      <Link to={to} className={buttonClasses} onClick={onClick} {...props}>
        {children}
      </Link>
    ) : href ? (
      <a href={href} className={buttonClasses} onClick={onClick} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    ) : (
      <motion.button
        type="button"
        className={buttonClasses}
        onClick={onClick}
        whileTap={{ scale: 0.97 }}
        {...props}
      >
        {children}
      </motion.button>
    )
  );
};

export default Button;