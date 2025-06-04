import React from 'react';

const SOCIALS = [
  { label: 'GitHub', url: 'https://github.com/username', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.48 2.87 8.28 6.84 9.63.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05A9.38 9.38 0 0112 6.84c.85.004 1.71.12 2.51.35 1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0022 12.26C22 6.58 17.52 2 12 2z" fill="currentColor"/></svg>
  ) },
  { label: 'LinkedIn', url: 'https://linkedin.com/in/username', icon: (
    <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v5h-4v-5a2 2 0 00-4 0v5h-4v-9h4v1.34A4 4 0 0116 8zM2 9h4v12H2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="4" cy="4" r="2" stroke="currentColor" strokeWidth="2"/></svg>
  ) },
];

const Footer = () => {
  return (
    <footer className="w-full bg-white/80 dark:bg-surface-dark/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-700 py-6 mt-auto">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4">
        <div className="flex gap-4">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="text-text/70 dark:text-text-dark/70 hover:text-primary dark:hover:text-primary transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <div className="text-center text-sm text-text/70 dark:text-text-dark/70">
          <p>evan.saboulard-serre@etu.univ-lyon1.fr</p>
          <p>07 81 78 51 49</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
