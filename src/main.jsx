import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('SW registered: ', registration);
      })
      .catch((registrationError) => {
        console.log('SW registration failed: ', registrationError);
      });
  });
}

// Optional: Lenis smooth scroll with better error handling
let LenisInstance;
try {
  // @ts-ignore
  import('lenis').then(({ default: Lenis }) => {
    LenisInstance = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.2,
      lerp: 0.1,
      wheelMultiplier: 1,
      // Performance optimizations
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    function raf(time) {
      LenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }).catch((error) => {
    console.warn('Lenis smooth scroll failed to load:', error);
  });
} catch (error) {
  console.warn('Lenis import failed:', error);
}

// Performance monitoring
if ('performance' in window) {
  window.addEventListener('load', () => {
    // Report Core Web Vitals
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(console.log);
        getFID(console.log);
        getFCP(console.log);
        getLCP(console.log);
        getTTFB(console.log);
      }).catch(() => {
        // Web vitals not available
      });
    }
  });
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
