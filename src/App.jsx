import { useState, useEffect } from "react";
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import ChizelApp from "./pages/ChizelApp";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Vision from "./pages/Vision";
import CustomCursor from "./components/layout/CustomCursor";
import Home from "./pages/Home";
import ChizelVerse from "./pages/ChizelVerse";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS only when needed and with better error handling
    const initAOS = async () => {
      try {
        const AOS = (await import('aos')).default;
        await import('aos/dist/aos.css');
        AOS.init({
          duration: 500, // Reduced for better performance
          once: true,
          easing: 'ease-out',
          offset: 50, // Reduced offset for faster triggering
          delay: 0,
          disable: 'mobile', // Disable on mobile for better performance
          throttleDelay: 99, // Throttle scroll events for better performance
        });
      } catch (error) {
        console.warn('AOS initialization failed:', error);
      }
    };

    // Only initialize AOS after loading is complete
    if (!isLoading) {
      // Delay AOS initialization for better performance
      setTimeout(initAOS, 100);
    }
  }, [isLoading]);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Optimized simple background instead of heavy starfield */}
      <div className="lightweight-bg" />

      <Loader setIsLoading={setIsLoading} />

      {!isLoading && (
        <>
          <CustomCursor />
          <Navbar />
          <Home />
          <Problem />
          <About />
          <Solution />
          <ChizelVerse />
          <Vision />
          <Games />
          <ChizelApp />
          <Contact />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
