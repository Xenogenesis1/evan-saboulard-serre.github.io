import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

/**
 * Composant Card réutilisable avec animations et variantes
 * Idéal pour afficher des projets, compétences ou autres informations
 *
 * @param {Object} props - Les propriétés du composant
 * @param {string} [props.variant='default'] - Variante de la carte (default, bordered, elevated)
 * @param {boolean} [props.interactive=false] - Si la carte doit avoir des effets d'interaction
 * @param {boolean} [props.animateEntry=true] - Si la carte doit s'animer à l'entrée dans la vue
 * @param {number} [props.delay=0] - Délai pour l'animation d'entrée
 * @param {React.ReactNode} props.children - Le contenu de la carte
 * @param {string} [props.className] - Classes CSS additionnelles
 */
const Card = ({
  variant = 'default',
  interactive = false,
  animateEntry = true,
  delay = 0,
  children,
  className = '',
  ...props
}) => {
  // Hook pour détecter quand la carte entre dans la vue
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Accentuer l'ombre et l'effet lift/glow au hover
  const variantClasses = {
    default: 'bg-white dark:bg-surface-dark shadow-card hover:shadow-card-hover',
    bordered: 'bg-white dark:bg-surface-dark border border-gray-200 dark:border-gray-700',
    elevated: 'bg-white dark:bg-surface-dark shadow-lg hover:shadow-card-hover',
    gradient: 'bg-gradient-to-br from-primary/5 to-secondary/5 backdrop-blur-sm dark:from-primary/8 dark:to-secondary/8',
    transparent: 'bg-white/70 dark:bg-surface-dark/70 backdrop-blur-md'
  };

  // Classes de base pour les cartes
  const baseClasses = `
    rounded-2xl p-6 transition-all duration-300
    ${variantClasses[variant]}
    ${interactive ? 'cursor-pointer hover:shadow-card-hover transform hover:-translate-y-1' : ''}
    ${className}
  `;

  // Animation d'entrée
  const entryAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay: delay * 0.1,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      initial={animateEntry ? 'hidden' : false}
      animate={inView ? 'visible' : 'hidden'}
      variants={entryAnimation}
      className={baseClasses}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;