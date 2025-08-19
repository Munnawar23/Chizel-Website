import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { navItems } from "@utils/constants";
import { FaBuromobelexperte } from "react-icons/fa";
import { useScrollDirection } from "@hooks/useScrollDirection";
import { useNavigate, Link } from "react-router-dom"; // Import Link for the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isVisible = useScrollDirection();
  const navigate = useNavigate();

  const navbarRef = useRef(null);
  const menuRef = useRef(null);
  const tl = useRef(); // Use a ref to hold the timeline instance

  // All logic is preserved exactly as it was.
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const handleLinkClick = (href) => {
    setIsMenuOpen(false);
    if (href.startsWith("/")) {
      navigate(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    const html = document.documentElement;
    const preventScroll = (e) => e.preventDefault();
    if (isMenuOpen) {
      html.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    } else {
      html.style.overflow = "";
      document.body.style.overflow = "";
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    }
    return () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, [isMenuOpen]);
  useGSAP(() => {
    tl.current = gsap
      .timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set(menuRef.current, { display: "none" });
        },
      })
      .set(menuRef.current, { display: "flex" })
      .fromTo(
        menuRef.current,
        { y: "-100%" },
        { y: "0%", duration: 0.7, ease: "expo.out" }
      )
      .fromTo(
        ".menu-item",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "power2.out" },
        "-=0.3"
      );
  }, []);
  useEffect(() => {
    if (isMenuOpen) {
      tl.current.play();
    } else {
      tl.current.reverse();
    }
  }, [isMenuOpen]);
  useGSAP(() => {
    gsap.to(navbarRef.current, {
      y: isVisible ? 0 : -120,
      duration: 0.5,
      ease: "power2.out",
    });
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
        className="fixed top-3 left-1/2 -translate-x-1/2 w-auto z-50 bg-card/80 backdrop-blur-md rounded-full border border-text/10 shadow-lg"
      >
        <div className="px-4 py-2 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 group cursor-pointer">
            <div className="flex-center p-2 bg-gradient-to-br from-primary/80 to-accent/80 rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-md">
              <FaBuromobelexperte className="text-text text-lg" />
            </div>
            <span className="text-xl font-heading font-bold text-text pr-2">
              MENU
            </span>
          </Link>
          <button
            onClick={toggleMenu}
            className="relative w-8 h-8 flex-center flex-col gap-1.5 cursor-pointer group z-50 mr-2"
            aria-label="Toggle Menu"
          >
            <div className="hamburger-line-1 w-6 h-0.5 bg-text transition-all duration-300 group-hover:bg-primary" />
            <div className="hamburger-line-2 w-6 h-0.5 bg-text transition-all duration-300 group-hover:bg-primary" />
            <div className="hamburger-line-3 w-6 h-0.5 bg-text transition-all duration-300 group-hover:bg-primary" />
          </button>
        </div>
      </nav>

      {/* ============== FULLSCREEN MENU OVERLAY ============== */}
      <div
        ref={menuRef}
        className="fixed inset-0 z-40 hidden flex-col items-center justify-center bg-overlay text-text overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[20%] left-[10%] w-20 h-20 bg-accent/20 rounded-full" />
          <div className="absolute top-[60%] right-[15%] w-16 h-16 bg-primary/20 rounded-lg rotate-45" />
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
                className="block text-4xl md:text-5xl font-heading uppercase tracking-wider relative group cursor-pointer hover:text-accent transition-colors duration-300"
              >
                {item.name}
                <div className="absolute bottom-[-4px] left-0 w-0 h-1 bg-accent transition-all duration-500 group-hover:w-full" />
              </a>
            </div>
          ))}
        </div>
        <div className="absolute bottom-6 text-center menu-item w-full px-4">
          <p className="text-sm font-ui text-secondary-text">
            Chizel © 2025 — All Rights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
