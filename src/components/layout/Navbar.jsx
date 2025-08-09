import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const hamburgerRef = useRef(null);
  const logoRef = useRef(null);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Vision", href: "#vision" },
    { name: "Games", href: "#games" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.documentElement.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useGSAP(() => {
    if (isVisible) {
      gsap.to(navbarRef.current, {
        y: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      gsap.to(navbarRef.current, {
        y: -100,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [isVisible]);

  useGSAP(() => {
    if (isMenuOpen) {
      gsap.set(menuRef.current, { display: "flex" });
      const tl = gsap.timeline();
      tl.fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.8, ease: "expo.out" }
      ).fromTo(
        ".menu-item",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );

      gsap.to(".hamburger-line-1", {
        rotation: 45,
        y: 6,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".hamburger-line-2", {
        opacity: 0,
        duration: 0.2,
        ease: "power2.out",
      });
      gsap.to(".hamburger-line-3", {
        rotation: -45,
        y: -6,
        duration: 0.4,
        ease: "power2.out",
      });
    } else {
      const tl = gsap.timeline({
        onComplete: () => gsap.set(menuRef.current, { display: "none" }),
      });
      tl.to(".menu-item", {
        y: -50,
        opacity: 0,
        duration: 0.4,
        stagger: 0.05,
        ease: "power2.in",
      }).to(
        menuRef.current,
        { y: "-100%", duration: 0.6, ease: "expo.in" },
        "-=0.2"
      );

      gsap.to(".hamburger-line-1", {
        rotation: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(".hamburger-line-2", {
        opacity: 1,
        duration: 0.2,
        delay: 0.1,
        ease: "power2.out",
      });
      gsap.to(".hamburger-line-3", {
        rotation: 0,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  }, [isMenuOpen]);

  useGSAP(() => {
    const logo = logoRef.current;
    logo.addEventListener("mouseenter", () => {
      gsap.to(logo, {
        scale: 1.1,
        rotation: 5,
        duration: 0.3,
        ease: "power2.out",
      });
    });
    logo.addEventListener("mouseleave", () => {
      gsap.to(logo, {
        scale: 1,
        rotation: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      navbarRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 }
    );
    gsap.fromTo(
      logoRef.current,
      { x: -50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
    gsap.fromTo(
      hamburgerRef.current,
      { x: 50, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.8, ease: "power2.out", delay: 0.4 }
    );
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (href) => {
    setIsMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-3 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50 bg-[#dfdff0] backdrop-blur-md rounded-2xl border border-gray-200/30 shadow-2xl overflow-hidden"
      >
        <div className="px-6 py-3 flex items-center justify-between">
          <div
            ref={logoRef}
            className="text-2xl font-medium uppercase cursor-pointer text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            Chizel
          </div>
          <button
            ref={hamburgerRef}
            onClick={toggleMenu}
            className="relative w-8 h-8 flex flex-col justify-center items-center space-y-1 cursor-pointer group"
            aria-label="Toggle menu"
          >
            <div className="hamburger-line-1 w-6 h-0.5 bg-gray-800 transition-colors duration-300 group-hover:bg-blue-600" />
            <div className="hamburger-line-2 w-6 h-0.5 bg-gray-800 transition-colors duration-300 group-hover:bg-blue-600" />
            <div className="hamburger-line-3 w-6 h-0.5 bg-gray-800 transition-colors duration-300 group-hover:bg-blue-600" />
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col items-center justify-center bg-[#2a1d4e] text-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-pink-500/20 rounded-full" />
          <div className="absolute top-[60%] right-[15%] w-16 h-16 bg-cyan-400/20 rounded-lg rotate-45" />
          <div className="absolute bottom-[30%] left-[20%] w-12 h-12 bg-pink-500/20 rounded-full" />
        </div>

        <div className="relative z-10 text-center space-y-6">
          {navItems.map((item, index) => (
            <div key={index} className="menu-item">
              <a
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleMenuClick(item.href);
                }}
                className="block text-4xl md:text-6xl lg:text-7xl font-bold uppercase tracking-wider relative group cursor-pointer text-white hover:text-pink-400 transition-all duration-300 hover:-translate-y-1"
              >
                {item.name}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-pink-400 transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          ))}
        </div>

        {/* Updated Footer */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-center menu-item w-full px-4">
          <p className="text-sm md:text-base text-gray-300">
            Chizel 2025 © All rights reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
