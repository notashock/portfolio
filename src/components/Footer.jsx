import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  const iconVariants = {
    hover: { scale: 1.3, y: -3, transition: { type: "spring", stiffness: 300 } },
    initial: { scale: 1, y: 0 },
  };

  const pulseVariants = {
    animate: {
      scale: [1, 1.1, 1],
      opacity: [0.6, 1, 0.6],
      transition: { repeat: Infinity, duration: 2, ease: "easeInOut" },
    },
  };

  return (
    <footer className="relative py-4 px-6 bg-surface-light/80 dark:bg-surface-dark/80 
                       shadow-[2px_-2px_8px_-2px] shadow-accent-light/30
                       dark:shadow-[2px_-2px_8px_-2px] dark:shadow-accent-dark/30
                       backdrop-blur-md rounded-t-lg overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Copyright */}
        <div className="text-center md:text-left">
          <p className="font-medium text-heading-light dark:text-heading-dark">
            © {new Date().getFullYear()} Kiddo. All rights reserved.
          </p>
          <p className="text-xs text-text-light/70 dark:text-text-dark/70 mt-1">
            Built with React + TailwindCSS + Vite
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          {[
            { href: "https://github.com/notashock", icon: <FaGithub /> },
            { href: "https://www.linkedin.com/in/ashok-babu-bavireddy-346846258/", icon: <FaLinkedin /> },
            { href: "mailto:ashubavireddy2015@gmail.com", icon: <FaEnvelope /> },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="text-heading-light dark:text-heading-dark"
              variants={iconVariants}
              initial="initial"
              whileHover="hover"
            >
              {item.icon}
            </motion.a>
          ))}
        </div>
      </div>

      {/* Pulsing Accent Glow */}
      <motion.div
        className="absolute -top-10 -right-10 w-24 h-24 rounded-full 
                   bg-accent-light/20 dark:bg-accent-dark/20 blur-3xl"
        variants={pulseVariants}
        animate="animate"
      />
    </footer>
  );
}
