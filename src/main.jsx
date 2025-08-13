import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// Service Worker Registration for offline support
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

// Optimized Lenis smooth scroll with better performance
let LenisInstance;
try {
  // @ts-ignore
  import('lenis').then(({ default: Lenis }) => {
    LenisInstance = new Lenis({
      smoothWheel: true,
      smoothTouch: true,
      touchMultiplier: 1.0, // Reduced for better performance
      lerp: 0.08, // Reduced for smoother scrolling
      wheelMultiplier: 0.8, // Reduced for better performance
      // Performance optimizations
      duration: 1.0, // Reduced duration
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)), // Simplified easing
      // Better performance settings
      infinite: false,
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      // Throttle for better performance
      throttle: 16, // 60fps
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

// Performance monitoring with reduced overhead
if ('performance' in window) {
  window.addEventListener('load', () => {
    // Report Core Web Vitals with reduced logging
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        // Only log in development
        if (process.env.NODE_ENV === 'development') {
          getCLS(console.log);
          getFID(console.log);
          getFCP(console.log);
          getLCP(console.log);
          getTTFB(console.log);
        }
      }).catch(() => {
        // Web vitals not available
      });
    }
  });
}

// Optimize for low-end devices
if ('connection' in navigator) {
  const connection = navigator.connection;
  if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
    // Disable heavy animations on slow connections
    document.documentElement.classList.add('low-bandwidth');
  }
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
