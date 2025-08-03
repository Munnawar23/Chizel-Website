import React from 'react'
import HeroSection from './sections/HeroSection'
import AboutSection from './sections/AboutSection'
import GamesSection from './sections/GamesSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/ui/Footer'
import VisionSection from './sections/VisionSection'
import AppSection from './sections/AppSection'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <HeroSection />
      <AboutSection />
      <VisionSection />
      <GamesSection />
      <AppSection />
      <ContactSection />
      <Footer />
    </main>
  )
}

export default App