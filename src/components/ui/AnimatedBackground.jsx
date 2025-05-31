<<<<<<< HEAD
import React from 'react';

/**
 * Composant AnimatedBackground
 * Ajoute un arrière-plan animé subtil (dégradé mesh et flou) inspiré de n8n.io
 * Version améliorée avec des teintes plus douces pour un meilleur confort visuel
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 w-full h-full min-h-screen overflow-hidden"
    >
      {/* Overlay radial couvrant toute la page, moins saturé pour moins fatiguer l'œil */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 200% at 50% 0%, rgba(104,66,185,0.12) 0%, rgba(26,34,58,0.95) 80%, rgba(16,18,26,1) 100%)',
        opacity: 0.6, // Opacité réduite
        zIndex: 1
      }} />
      {/* Blobs mesh animés avec des couleurs plus douces */}
      <svg className="absolute -top-80 -left-80 w-[2000px] h-[2000px] animate-spin-slow" style={{filter:'blur(140px)'}} viewBox="0 0 2000 2000" fill="none">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6842B9" stopOpacity="0.12" />
            <stop offset="1" stopColor="#21A8F3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="1000" cy="1000" rx="900" ry="900" fill="url(#blob1)" />
      </svg>
      <svg className="absolute top-1/3 right-0 w-[1400px] h-[1400px] animate-float" style={{filter:'blur(120px)',animationDelay:'2s'}} viewBox="0 0 1400 1400" fill="none">
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20D9D2" stopOpacity="0.08" />
            <stop offset="1" stopColor="#41CAFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="700" cy="700" rx="650" ry="650" fill="url(#blob2)" />
      </svg>
      <svg className="absolute bottom-0 left-1/4 w-[1200px] h-[1200px] animate-float" style={{filter:'blur(100px)',animationDelay:'4s'}} viewBox="0 0 1200 1200" fill="none">
        <defs>
          <radialGradient id="blob3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#21A8F3" stopOpacity="0.06" />
            <stop offset="1" stopColor="#4A3485" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="600" cy="600" rx="550" ry="550" fill="url(#blob3)" />
      </svg>
      {/* Overlay mesh gradient animé avec opacité réduite */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradient" />
      {/* Motif mesh SVG subtil, taille augmentée et opacité réduite */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 2400 1800" fill="none">
        <defs>
          <radialGradient id="bgMesh" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A3485" stopOpacity="0.10" />
            <stop offset="1" stopColor="#21A8F3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="2400" height="1800" fill="url(#bgMesh)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
=======
import React from 'react';

/**
 * Composant AnimatedBackground
 * Ajoute un arrière-plan animé subtil (dégradé mesh et flou) inspiré de n8n.io
 * Version améliorée avec des teintes plus douces pour un meilleur confort visuel
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 w-full h-full min-h-screen overflow-hidden"
    >
      {/* Overlay radial couvrant toute la page, moins saturé pour moins fatiguer l'œil */}
      <div className="absolute inset-0" style={{
        background: 'radial-gradient(ellipse 120% 200% at 50% 0%, rgba(104,66,185,0.12) 0%, rgba(26,34,58,0.95) 80%, rgba(16,18,26,1) 100%)',
        opacity: 0.6, // Opacité réduite
        zIndex: 1
      }} />
      {/* Blobs mesh animés avec des couleurs plus douces */}
      <svg className="absolute -top-80 -left-80 w-[2000px] h-[2000px] animate-spin-slow" style={{filter:'blur(140px)'}} viewBox="0 0 2000 2000" fill="none">
        <defs>
          <radialGradient id="blob1" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6842B9" stopOpacity="0.12" />
            <stop offset="1" stopColor="#21A8F3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="1000" cy="1000" rx="900" ry="900" fill="url(#blob1)" />
      </svg>
      <svg className="absolute top-1/3 right-0 w-[1400px] h-[1400px] animate-float" style={{filter:'blur(120px)',animationDelay:'2s'}} viewBox="0 0 1400 1400" fill="none">
        <defs>
          <radialGradient id="blob2" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#20D9D2" stopOpacity="0.08" />
            <stop offset="1" stopColor="#41CAFF" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="700" cy="700" rx="650" ry="650" fill="url(#blob2)" />
      </svg>
      <svg className="absolute bottom-0 left-1/4 w-[1200px] h-[1200px] animate-float" style={{filter:'blur(100px)',animationDelay:'4s'}} viewBox="0 0 1200 1200" fill="none">
        <defs>
          <radialGradient id="blob3" cx="50%" cy="50%" r="50%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#21A8F3" stopOpacity="0.06" />
            <stop offset="1" stopColor="#4A3485" stopOpacity="0" />
          </radialGradient>
        </defs>
        <ellipse cx="600" cy="600" rx="550" ry="550" fill="url(#blob3)" />
      </svg>
      {/* Overlay mesh gradient animé avec opacité réduite */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-40 animate-gradient" />
      {/* Motif mesh SVG subtil, taille augmentée et opacité réduite */}
      <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 2400 1800" fill="none">
        <defs>
          <radialGradient id="bgMesh" cx="50%" cy="50%" r="80%" fx="50%" fy="50%" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4A3485" stopOpacity="0.10" />
            <stop offset="1" stopColor="#21A8F3" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="2400" height="1800" fill="url(#bgMesh)" />
      </svg>
    </div>
  );
};

export default AnimatedBackground;
>>>>>>> 9118f070158da87ce42521e3257c6926681040c9
