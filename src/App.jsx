import { useState } from "react";
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
import { useEffect } from "react";
import ChizelVerse from "./pages/ChizelVerse";
import Problem from "./pages/Problem";
import Solution from "./pages/Solution";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize AOS if present
    (async () => {
      try {
        const AOS = (await import('aos')).default;
        await import('aos/dist/aos.css');
        AOS.init({ duration: 700, once: true, easing: 'ease-out' });
      } catch { }
    })();
  }, []);

  return (
    <main className="relative min-h-screen w-full overflow-x-hidden">
      {/* Global starfield background */}
      <div className="starfield">
        <div className="starfield-layer stars-1" />
        <div className="starfield-layer stars-2" />
        <div className="starfield-layer stars-3" />
      </div>
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
