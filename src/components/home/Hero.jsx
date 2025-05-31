<<<<<<< HEAD
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

/**
 * Composant Hero pour la page d'accueil
 * Présentation de l'étudiant en informatique DACS
 */
const Hero = () => {
  // Animation pour les éléments qui apparaissent depuis le bas
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  // Animation pour les éléments décoratifs qui flottent
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 px-4 sm:px-6 md:py-20 lg:py-24">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl shadow-card p-10 border border-primary/20"
          >
            <motion.p 
              className="inline-block mb-4 text-secondary font-medium text-lg tracking-wide"
              custom={0}
              variants={fadeInUp}
            >
              Étudiant en Informatique DACS
            </motion.p>
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-heading-xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-glow animate-gradient"
              custom={1}
              variants={fadeInUp}
            >
              Evan Saboulard-Serre
            </motion.h1>
            <motion.p 
              className="text-lg text-text/90 dark:text-text-dark/90 mb-8 drop-shadow-glow leading-relaxed"
              custom={2}
              variants={fadeInUp}
            >
              Étudiant en 2ème année de BUT Informatique, spécialité DACS<br/>
              (Déploiement d'Applications Communicantes et Sécurisées)<br/>
              <span className="mt-2 block text-secondary">
                Administration système et développement sécurisé, Finance quantitative
              </span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              custom={3}
              variants={fadeInUp}
            >
              <Button to="/projets" size="lg">
                Découvrir mes projets
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

=======
import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';

/**
 * Composant Hero pour la page d'accueil
 * Présentation de l'étudiant en informatique DACS
 */
const Hero = () => {
  // Animation pour les éléments qui apparaissent depuis le bas
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: { 
        delay: custom * 0.1,
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0]
      }
    })
  };

  // Animation pour les éléments décoratifs qui flottent
  const floatingAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut'
      }
    }
  };

  return (
    <section className="relative overflow-hidden pt-10 pb-16 px-4 sm:px-6 md:py-20 lg:py-24">
      {/* Éléments décoratifs d'arrière-plan */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute -top-20 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute -bottom-40 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"
          animate={{ rotate: -360 }}
          transition={{ duration: 100, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center justify-center gap-8">
          <motion.div 
            initial="hidden"
            animate="visible"
            className="max-w-2xl mx-auto text-center bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl shadow-card p-10 border border-primary/20"
          >
            <motion.p 
              className="inline-block mb-4 text-secondary font-medium text-lg tracking-wide"
              custom={0}
              variants={fadeInUp}
            >
              Étudiant en Informatique DACS
            </motion.p>
            <motion.h1 
              className="text-5xl sm:text-6xl md:text-heading-xl font-heading font-extrabold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent drop-shadow-glow animate-gradient"
              custom={1}
              variants={fadeInUp}
            >
              Evan Saboulard-Serre
            </motion.h1>
            <motion.p 
              className="text-lg text-text/90 dark:text-text-dark/90 mb-8 drop-shadow-glow leading-relaxed"
              custom={2}
              variants={fadeInUp}
            >
              Étudiant en 2ème année de BUT Informatique, spécialité DACS<br/>
              (Déploiement d'Applications Communicantes et Sécurisées)<br/>
              <span className="mt-2 block text-secondary">
                Administration système et développement sécurisé, Finance quantitative
              </span>
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              custom={3}
              variants={fadeInUp}
            >
              <Button to="/projets" size="lg">
                Découvrir mes projets
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

>>>>>>> 9118f070158da87ce42521e3257c6926681040c9
export default Hero;