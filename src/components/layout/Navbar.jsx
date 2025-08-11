import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navItems } from "../../constants/index";
import { FaBuromobelexperte } from "react-icons/fa";

const Navbar = () => {
  // State and event handlers are unchanged
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // All GSAP animations are preserved exactly as they were
  useGSAP(() => {
    gsap.to(navbarRef.current, {
      y: isVisible ? 0 : -120,
      duration: 0.5,
      ease: "power2.out",
    });
    const tl = gsap.timeline();
    if (isMenuOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      tl.fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.7, ease: "expo.out" }
      ).fromTo(
        ".menu-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
    } else {
      tl.to(".menu-item", {
        y: -40,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      }).to(
        menuRef.current,
        {
          y: "-100%",
          duration: 0.6,
          ease: "expo.in",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }),
        },
        "-=0.2"
      );
    }
    const duration = 0.4,
      ease = "power2.out";
    gsap.to(".hamburger-line-1", {
      rotation: isMenuOpen ? 45 : 0,
      y: isMenuOpen ? 5 : 0,
      duration,
      ease,
    });
    gsap.to(".hamburger-line-2", {
      opacity: isMenuOpen ? 0 : 1,
      duration: 0.2,
      ease,
    });
    gsap.to(".hamburger-line-3", {
      rotation: isMenuOpen ? -45 : 0,
      y: isMenuOpen ? -5 : 0,
      duration,
      ease,
    });
  }, [isMenuOpen, isVisible]);

  return (
    <>
      {/* ============== MAIN NAVBAR ============== */}
      <nav
        ref={navbarRef}
        className="fixed top-3 left-1/2 -translate-x-1/2 w-auto z-50 bg-light-card/80 backdrop-blur-md rounded-full border border-light-text/10 shadow-lg"
      >
        <div className="px-4 py-2 flex items-center justify-between gap-4">
          <a
            href="#home"
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex-center p-2 bg-gradient-to-br from-light-primary/80 to-light-accent/80 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              <FaBuromobelexperte className="text-light-background text-lg" />
            </div>
            <span className="text-xl font-heading font-bold text-light-text pr-2">
              Menu
            </span>
          </a>
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex-center flex-col gap-1.5 cursor-pointer group z-50 mr-2"
            aria-label="Toggle Menu"
          >
            <div className="hamburger-line-1 w-6 h-0.5 bg-light-text transition-all duration-300 group-hover:bg-light-primary" />
            <div className="hamburger-line-2 w-6 h-0.5 bg-light-text transition-all duration-300 group-hover:bg-light-primary" />
            <div className="hamburger-line-3 w-6 h-0.5 bg-light-text transition-all duration-300 group-hover:bg-light-primary" />
          </button>
        </div>
      </nav>

      {/* ============== FULLSCREEN MENU OVERLAY (LIGHT THEME) ============== */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col items-center justify-center bg-light-background text-light-text overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-light-accent/20 rounded-full" />
          <div className="absolute top-[60%] right-[15%] w-16 h-16 bg-light-primary/20 rounded-lg rotate-45" />
        </div>
        <div className="relative z-10 text-center space-y-5">
          {navItems.map((item) => (
            <div key={item.name} className="menu-item">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.href);
                }}
                className="block text-4xl md:text-5xl font-heading uppercase tracking-wider relative group cursor-pointer hover:text-light-accent transition-colors duration-300"
              >
                {item.name}
                <div className="absolute bottom-[-4px] left-0 w-0 h-1 bg-light-accent transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 text-center menu-item w-full px-4">
          <p className="text-sm font-ui text-light-secondary-text">
            @2025 Chizel · All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
