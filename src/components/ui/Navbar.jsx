// src/components/layout/Navbar.jsx

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef } from "react";

const navLinks = [
  { name: "Home", href: "#" },
  { name: "About", href: "#about" },
  { name: "Games", href: "#games" },
  { name: "Contact", href: "#contact" },
];

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navRef = useRef(null);
  const menuRef = useRef(null);
  // This ref prevents the closing animation from running on the very first render
  const isInitialRender = useRef(true);

  // Animate the navbar itself into view after the loader is gone
  useGSAP(() => {
    gsap.from(navRef.current, {
      yPercent: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      delay: 0.5, // This delay should match the hero content's entrance
    });
  });

  // GSAP animations for the full-screen menu
  useEffect(() => {
    if (isInitialRender.current) {
      isInitialRender.current = false;
      return;
    }

    const tl = gsap.timeline();
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling when menu is open
      tl.to(menuRef.current, { yPercent: 0, duration: 0.6, ease: "power3.inOut" })
        .from(".menu-item", { opacity: 0, y: 30, stagger: 0.1, duration: 0.4, ease: "power2.out" }, "-=0.3");
    } else {
      document.body.style.overflow = "auto";
      // Animate items out first, then slide the menu up
      tl.to(".menu-item", { opacity: 0, y: 30, stagger: { amount: 0.3, from: "end" }, duration: 0.3, ease: "power2.in" })
        .to(menuRef.current, { yPercent: -100, duration: 0.6, ease: "power3.inOut" }, "-=0.3");
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-8">
        {/* The floating navbar container */}
        <div className="flex items-center justify-between h-20 bg-card/50 backdrop-blur-md rounded-2xl mt-4 px-6 border border-secondary-text/10">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-background font-black text-sm">C</span>
            </div>
            <span className="font-heading font-bold text-xl text-text">Chizel</span>
          </a>

          {/* Animated Hamburger Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative w-8 h-8 flex flex-col justify-center items-center group z-50"
            aria-label="Open Menu"
          >
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text my-1.5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-text transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu that animates from the top */}
      <div
        ref={menuRef}
        className="fixed top-0 left-0 w-full h-screen bg-background z-40 transform -translate-y-full flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/menu-bg.webp')", // A cool background image for your menu
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <ul className="relative z-10 text-center space-y-4">
          {navLinks.map((link) => (
            <li key={link.name} className="menu-item opacity-0">
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="font-heading text-4xl text-text hover:text-primary transition-colors duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;