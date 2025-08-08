import Footer from "./components/layout/Footer"
import About from "./pages/About"
import ChizelApp from "./pages/ChizelApp"
import Contact from "./pages/Contact"
import Games from "./pages/Games"
import Vision from "./pages/Vision"

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <About />
      <Vision />
      <Games />
      <ChizelApp />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
