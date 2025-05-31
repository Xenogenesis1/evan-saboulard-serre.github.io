import React from 'react';
import { motion } from 'framer-motion';

/**
 * Composant Badge pour afficher des étiquettes, des tags ou des indicateurs
 * Parfait pour montrer les technologies utilisées dans les projets
 * 
 * @param {Object} props - Les propriétés du composant
 * @param {string} [props.variant='default'] - Variante du badge (default, outline, dot)
 * @param {string} [props.color='primary'] - Couleur du badge (primary, secondary, accent, success, warning, danger)
 * @param {boolean} [props.interactive=false] - Si le badge doit être interactif (cliquable)
 * @param {Function} [props.onClick] - Fonction appelée lors du clic (pour les badges interactifs)
 * @param {boolean} [props.active=false] - État actif du badge (pour filtrage)
 * @param {React.ReactNode} props.children - Le contenu du badge
 * @param {string} [props.className] - Classes CSS additionnelles
 */
const Badge = ({
  variant = 'default',
  color = 'primary',
  interactive = false,
  onClick,
  active = false,
  children,
  className = '',
  ...props
}) => {
  // Définition des classes de couleur avec meilleur contraste
  const colorClasses = {
    primary: {
      default: 'bg-primary/20 text-white dark:bg-primary/30 dark:text-white',
      outline: 'border border-primary/50 text-primary dark:text-white',
      dot: 'text-primary dark:text-white',
    },
    secondary: {
      default: 'bg-secondary/20 text-secondary-dark dark:bg-secondary/30 dark:text-white',
      outline: 'border border-secondary/50 text-secondary dark:text-white',
      dot: 'text-secondary dark:text-white',
    },
    accent: {
      default: 'bg-accent/20 text-accent-dark dark:bg-accent/30 dark:text-black',
      outline: 'border border-accent/50 text-accent-dark dark:text-accent',
      dot: 'text-accent-dark dark:text-accent',
    },
    success: {
      default: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
      outline: 'border border-green-300 text-green-800 dark:border-green-800 dark:text-green-300',
      dot: 'text-green-800 dark:text-green-300',
    },
    warning: {
      default: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
      outline: 'border border-amber-300 text-amber-800 dark:border-amber-800 dark:text-amber-300',
      dot: 'text-amber-800 dark:text-amber-300',
    },
    danger: {
      default: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
      outline: 'border border-red-300 text-red-800 dark:border-red-800 dark:text-red-300',
      dot: 'text-red-800 dark:text-red-300',
    },
    neutral: {
      default: 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200',
      outline: 'border border-gray-300 text-gray-800 dark:border-gray-500 dark:text-gray-200',
      dot: 'text-gray-800 dark:text-gray-200',
    },
  };

  // Ajout de classes pour l'état actif
  const activeClasses = active
    ? 'ring-2 ring-primary/50 dark:ring-primary/70 font-medium'
    : '';

  // Classes de base pour tous les badges
  const baseClasses = `
    inline-flex items-center justify-center
    text-xs font-medium
    rounded-full py-1 px-3
    transition-all duration-200
    ${interactive ? 'cursor-pointer hover:shadow-sm' : ''}
    ${activeClasses}
    ${className}
  `;

  // Classes spécifiques pour la variante avec point
  const dotVariantClasses = variant === 'dot'
    ? `pl-2 ${colorClasses[color][variant]}`
    : colorClasses[color][variant];

  // Animation de clic pour les badges interactifs
  const clickAnimation = interactive
    ? {
        whileHover: { scale: 1.05 },
        whileTap: { scale: 0.95 },
        transition: { duration: 0.2 }
      }
    : {};

  return (
    <motion.span
      className={`${baseClasses} ${dotVariantClasses}`}
      onClick={interactive ? onClick : undefined}
      {...clickAnimation}
      {...props}
    >
      {variant === 'dot' && (
        <span 
          className={`inline-block w-2 h-2 rounded-full mr-1.5 ${colorClasses[color].default.split(' ')[0]}`} 
        />
      )}
      {children}
    </motion.span>
  );
};

export default Badge;