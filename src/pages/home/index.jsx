import { useState } from "react";
import Loader from "@components/ui/Loader";
import HeroSection from "@/pages/home/sections/HeroSection";
import AboutSection from "@/pages/home/sections/AboutSection";
import FeatureSection from "@/pages/home/sections/FeatureSection";
import VisionSection from "@/pages/home/sections/VisionSection";
import GameSection from "@/pages/home/sections/GameSection";
import ChizelAppSection from "@/pages/home/sections/ChizelAppSection";
import ChizelWebSection from "./sections/ChizelWebSection";
import ContactSection from "@/pages/home/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";

const HomePage = () => {
  const [isPageLoading, setIsPageLoading] = useState(true);
  if (isPageLoading) {
    return <Loader setIsLoading={setIsPageLoading} />;
  }
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <FeatureSection />
      <VisionSection />
      <GameSection />
      <ChizelAppSection />
      <ChizelWebSection />
      <ContactSection />
      <Footer />
    </>
  );
};

export default HomePage;
