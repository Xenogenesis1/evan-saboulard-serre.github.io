/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    darkMode: 'class', // Pour permettre le mode sombre
    safelist: [
      // Couleurs dynamiques utilisées dans les composants (badges, backgrounds, etc.)
      'bg-primary', 'bg-primary/10', 'bg-primary/20', 'bg-primary/5', 'bg-primary-dark',
      'bg-secondary', 'bg-secondary/10', 'bg-secondary/20', 'bg-secondary/5', 'bg-secondary-dark',
      'bg-accent', 'bg-accent/10', 'bg-accent/20', 'bg-accent/5', 'bg-accent-dark',
      'bg-success', 'bg-success/10', 'bg-success/20', 'bg-success/5', 'bg-success-dark',
      'bg-warning', 'bg-warning/10', 'bg-warning/20', 'bg-warning/5', 'bg-warning-dark',
      'bg-danger', 'bg-danger/10', 'bg-danger/20', 'bg-danger/5', 'bg-danger-dark',
      'bg-neutral', 'bg-neutral/10', 'bg-neutral/20', 'bg-neutral/5', 'bg-neutral-dark',
      'bg-surface', 'bg-surface-dark', 'bg-background', 'bg-background-dark',
      'text-primary', 'text-secondary', 'text-accent', 'text-success', 'text-warning', 'text-danger', 'text-neutral', 'text-surface', 'text-background', 'text-background-dark',
      'border-primary', 'border-secondary', 'border-accent', 'border-success', 'border-warning', 'border-danger', 'border-neutral',
      'ring-primary', 'ring-secondary', 'ring-accent', 'ring-success', 'ring-warning', 'ring-danger', 'ring-neutral',
      'from-primary', 'from-secondary', 'from-accent', 'from-success', 'from-warning', 'from-danger', 'from-neutral',
      'to-primary', 'to-secondary', 'to-accent', 'to-success', 'to-warning', 'to-danger', 'to-neutral',
      // Classes utilitaires utilisées dynamiquement
      'shadow-card', 'shadow-card-hover', 'shadow-button', 'rounded-xl', 'rounded-2xl', 'rounded-3xl',
      'dark:bg-primary', 'dark:bg-secondary', 'dark:bg-accent', 'dark:bg-surface-dark', 'dark:bg-background-dark',
      'dark:text-primary', 'dark:text-secondary', 'dark:text-accent', 'dark:text-success', 'dark:text-warning', 'dark:text-danger', 'dark:text-neutral',
      'dark:text-surface', 'dark:text-background', 'dark:text-background-dark',
      'dark:border-primary', 'dark:border-secondary', 'dark:border-accent', 'dark:border-success', 'dark:border-warning', 'dark:border-danger', 'dark:border-neutral',
      'dark:ring-primary', 'dark:ring-secondary', 'dark:ring-accent', 'dark:ring-success', 'dark:ring-warning', 'dark:ring-danger', 'dark:ring-neutral',
      'bg-white', 'bg-gray-100', 'bg-gray-700', 'bg-gray-800', 'bg-gray-900',
      'text-white', 'text-gray-800', 'text-gray-900', 'text-gray-300', 'text-gray-600',
      'border-gray-200', 'border-gray-300', 'border-gray-600', 'border-gray-700',
      'focus:ring-primary/50', 'focus:ring-primary/40',
      'hover:bg-primary/10', 'hover:bg-primary/20', 'hover:bg-primary-dark', 'hover:bg-secondary/10', 'hover:bg-secondary-dark', 'hover:bg-accent/10', 'hover:bg-accent-dark',
      'hover:text-primary', 'hover:text-secondary', 'hover:text-accent',
      'active:scale-[0.98]',
      'bg-gradient-mesh', 'bg-gradient-to-r', 'bg-gradient-to-b', 'bg-gradient-to-br',
      'from-primary', 'to-secondary',
      'blur-3xl', 'aspect-video',
      'prose', 'dark:prose-invert',
      'line-clamp-2', 'line-clamp-3',
    ],
    theme: {
      extend: {
        colors: {
          // Palette modifiée pour plus de confort visuel
          primary: {
            light: '#8051FF', // Violet plus doux et lumineux
            DEFAULT: '#6842B9', // Violet moyen moins agressif
            dark: '#4A3485', // Violet foncé plus facile pour les yeux
          },
          secondary: {
            light: '#41CAFF',
            DEFAULT: '#21A8F3',
            dark: '#0E86D4',
          },
          accent: {
            light: '#37EBE5',
            DEFAULT: '#20D9D2',
            dark: '#10C5BE',
          },
          warning: {
            light: '#37EBE5', // Remplacé le jaune par turquoise
            DEFAULT: '#20D9D2', // Turquoise moyen
            dark: '#10C5BE', // Turquoise foncé
          },
          background: {
            light: '#FFFFFF',
            DEFAULT: '#F9FAFC',
            dark: '#121826',
          },
          surface: {
            light: '#FFFFFF',
            DEFAULT: '#F0F4F9',
            dark: '#1E293B',
          },
          text: {
            light: '#8B949E',
            DEFAULT: '#4A5568',
            dark: '#E6EDF3',
          }
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          heading: ['Poppins', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        fontSize: {
          'heading-xl': ['3.5rem', { lineHeight: '1.1', fontWeight: '700' }],
          'heading-lg': ['2.5rem', { lineHeight: '1.2', fontWeight: '700' }],
          'heading-md': ['2rem', { lineHeight: '1.25', fontWeight: '600' }],
          'heading-sm': ['1.5rem', { lineHeight: '1.375', fontWeight: '600' }],
        },
        animation: {
          'float': 'float 6s ease-in-out infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'gradient': 'gradient 15s ease infinite',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          gradient: {
            '0%': { backgroundPosition: '0% 50%' },
            '50%': { backgroundPosition: '100% 50%' },
            '100%': { backgroundPosition: '0% 50%' },
          },
        },
        backgroundImage: {
          'gradient-mesh': 'radial-gradient(at 100% 0%, rgb(109, 51, 255, 0.15) 0px, transparent 50%), radial-gradient(at 0% 100%, rgba(33, 168, 243, 0.15) 0px, transparent 50%)',
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        },
        boxShadow: {
          'card': '0 4px 20px -2px rgba(0, 0, 0, 0.1)',
          'card-hover': '0 10px 30px -3px rgba(0, 0, 0, 0.15)',
          'button': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          'inner-glow': 'inset 0 0 20px rgba(109, 51, 255, 0.15)',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
      },
    },
    plugins: [],
  }