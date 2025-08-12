import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.css'
import App from './App.jsx'

// Optional: Lenis smooth scroll
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
    });
    function raf(time) {
      LenisInstance.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }).catch(() => { });
} catch { }

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
