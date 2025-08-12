import { FaInstagram, FaDiscord, FaYoutube, FaLinkedin } from "react-icons/fa";
import { socialLinks } from "@utils/constants";

const iconMap = {
  Instagram: <FaInstagram size="1.2em" />,
  Discord: <FaDiscord size="1.2em" />,
  YouTube: <FaYoutube size="1.2em" />,
  LinkedIn: <FaLinkedin size="1.2em" />,
};

const Footer = () => {
  return (
    <footer className="w-screen border-t border-hsla bg-background py-4">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 sm:px-8 md:flex-row">

        {/* COPYRIGHT INFO */}
        <p className="font-ui text-sm text-secondary-text">
          © Chizel {new Date().getFullYear()}. All rights reserved.
        </p>

        {/* SOCIAL MEDIA LINKS */}
        <div className="flex justify-center gap-5">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow Chizel on ${link.name}`}
              className="text-secondary-text transition-colors duration-300 hover:text-accent"
            >
              {iconMap[link.name]}
            </a>
          ))}
        </div>

        {/* LEGAL LINKS */}
        <a
          href="#privacy-policy"
          className="font-ui text-sm text-secondary-text hover:text-accent hover:underline"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
