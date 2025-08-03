import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

// An array of social media links. You can customize these with your actual URLs.
const socialLinks = [
  { name: "Discord", href: "#", icon: <FaDiscord size="1.2em" /> },
  { name: "Twitter", href: "#", icon: <FaTwitter size="1.2em" /> },
  { name: "YouTube", href: "#", icon: <FaYoutube size="1.2em" /> },
  { name: "Medium", href: "#", icon: <FaMedium size="1.2em" /> },
];

/**
 * The main footer component for the website.
 */
const Footer = () => {
  return (
    // The main footer container. Using the site's primary background color.
    // A top border helps to visually separate it from the content above.
    <footer className="w-screen border-t border-text/10 bg-background py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        
        {/* Copyright Information */}
        <p className="font-body text-sm font-light text-secondary-text">
          {/* Updated the copyright name and year. */}
          © Chizel {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center gap-5 md:justify-start">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Chizel on ${link.name}`}
              // The text color uses secondary-text, and hovers to the bright accent color.
              className="text-secondary-text transition-colors duration-300 hover:text-accent"
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <a
          href="#privacy-policy"
          className="font-body text-sm font-light text-secondary-text hover:text-accent hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;