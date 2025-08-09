import { useState } from 'react';
import Footer from "./components/layout/Footer";
import Loader from "./components/layout/Loader";
import Navbar from "./components/layout/Navbar";
import About from "./pages/About";
import ChizelApp from "./pages/ChizelApp";
import Contact from "./pages/Contact";
import Games from "./pages/Games";
import Vision from "./pages/Vision";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <main className='relative min-h-screen w-full overflow-x-hidden'>
      <Loader setIsLoading={setIsLoading} />
      {!isLoading && (
        <>
        <Navbar />
          <About />
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