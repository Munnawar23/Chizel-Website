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
import ChizelVerse from "./pages/ChizelVerse";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

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
          {/* Problem Statement scrollytelling section */}
          <section id="problem" className="content-layer relative w-screen bg-background/80 py-24">
            <div className="container mx-auto px-6">
              <div id="problem-pin" className="relative">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                  <h2 className="font-heading text-5xl md:text-6xl text-text">Why Chizel?</h2>
                  <p className="font-body text-lg text-secondary-text">
                    Kids don’t need more screen time — they need meaning in it. Today’s internet is designed to hijack attention, not build ability.
                  </p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 mt-12">
                  <div className="p-6 rounded-2xl bg-card border-hsla text-center">
                    <p className="font-ui text-sm uppercase text-primary tracking-widest">Problem</p>
                    <h3 className="mt-2 font-heading text-3xl text-text">Mindless Feeds</h3>
                    <p className="mt-2 text-secondary-text">Infinite scroll drains focus and resilience.</p>
                    <p className="mt-3 font-heading text-4xl bg-gradient-to-r from-primary via-accent to-badge-bg bg-clip-text text-transparent">-42% Focus</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border-hsla text-center">
                    <p className="font-ui text-sm uppercase text-primary tracking-widest">Impact</p>
                    <h3 className="mt-2 font-heading text-3xl text-text">Anxious, Distracted</h3>
                    <p className="mt-2 text-secondary-text">Kids lose confidence, creativity, and patience.</p>
                    <p className="mt-3 font-heading text-4xl bg-gradient-to-r from-accent via-primary to-badge-bg bg-clip-text text-transparent">+3x Anxiety</p>
                  </div>
                  <div className="p-6 rounded-2xl bg-card border-hsla text-center">
                    <p className="font-ui text-sm uppercase text-primary tracking-widest">Chizel</p>
                    <h3 className="mt-2 font-heading text-3xl text-text">Play With Purpose</h3>
                    <p className="mt-2 text-secondary-text">Turn taps into brain-building adventures.</p>
                    <p className="mt-3 font-heading text-4xl bg-gradient-to-r from-badge-bg via-accent to-primary bg-clip-text text-transparent">+62% Memory</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <About />
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
