import { Link, useLocation, useNavigate } from 'react-router-dom';
import ThemeToggle from './ui/ThemeToggle';
import profilePic from '../assets/profile.jpg';
import { useEffect, useState, useRef } from 'react';
import { FaBars, FaTimes, FaArrowLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  const greetings = [
    { text: "నమస్తే", lang: "Telugu" },
    { text: "வணக்கம்", lang: "Tamil" },
    { text: "ನಮಸ್ಕಾರ", lang: "Kannada" },
    { text: "नमस्ते", lang: "Hindi" },
    { text: "നമസ്കാരം", lang: "Malayalam" },
    { text: "こんにちは", lang: "Japanese" },
    { text: "안녕하세요", lang: "Korean" },
    { text: "Hello", lang: "English" },
  ];

  const [index, setIndex] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Close menu on clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    else document.removeEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const MenuLinks = ({ closeMenu }) => {
    const links = [
      { name: "Projects", link: "/projects" },
      { name: "Skills", link: "/skills" },
      { name: "Experience", link: "/experience" },
      { name: "Contact", link: "/contact" },
      { name: "Certifications", link: "/certifications"}
    ];

    // Add Home link dynamically if not on home page
    if (location.pathname !== "/") {
      links.unshift({ name: "Home", link: "/" });
    }

    return (
      <div className="flex flex-col items-center gap-4">
        {links.map((item) => (
          <Link
            key={item.name}
            to={item.link}
            onClick={closeMenu}
            className="text-primary-light dark:text-primary-dark font-semibold hover:underline hover:scale-110 transition-transform"
          >
            {item.name}
          </Link>
        ))}
      </div>
    );
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 flex items-center justify-between
                 backdrop-blur-lg bg-surface-light/80 dark:bg-surface-dark/80
                 text-text-light dark:text-text-dark
                 border-b rounded-b-lg border-white/10
                 shadow-[0_2px_8px_-2px] shadow-accent-light/30 dark:shadow-accent-dark/30
                 px-4 py-3"
    >
      <div className="flex items-center gap-4">
        {/* Back Button */}
        {location.pathname !== '/' && (
          <button
            className="text-xl text-primary-light dark:text-primary-dark hover:scale-110 transition"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft />
          </button>
        )}

        {/* Menu Icon */}
        <button
          className="text-xl text-primary-light dark:text-primary-dark hover:scale-110 transition md:text-2xl z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Rolling Greeting */}
      <Link to="/" className="overflow-hidden h-10 flex items-center mx-6">
        <div
          key={index}
          className={`text-2xl font-extrabold transition-all duration-700 ease-in-out animate-slide
            ${greetings[index].lang === "Telugu"
              ? "text-accent-light dark:text-accent-dark"
              : "text-heading-light dark:text-heading-dark"
            }`}
        >
          {greetings[index].text}
        </div>
      </Link>

      {/* Right: Profile + Theme Toggle */}
      <div className="flex items-center gap-6 ml-auto">
        <ThemeToggle />
        <Link to="/about" title="About Me" className="relative group">
          <div className="absolute inset-0 rounded-full bg-primary-light/30 dark:bg-primary-dark/30 blur-xl opacity-60 group-hover:opacity-100 animate-pulse-glow" />
          <img
            src={profilePic}
            alt="Profile"
            className="relative w-12 h-12 rounded-full border-2 border-primary-light dark:border-primary-dark shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-in-out"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-light/40 to-transparent dark:from-primary-dark/40 opacity-0 group-hover:opacity-60 animate-shimmer" />
        </Link>
      </div>

      {/* Popup Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="absolute top-full left-0 w-44 md:w-72 m-2 bg-surface-light/90 dark:bg-surface-dark/90
                       backdrop-blur-md shadow-lg rounded-xl flex flex-col items-center gap-4 py-4 z-50 border border-primary-light/20 dark:border-primary-dark/20"
          >
            <MenuLinks closeMenu={() => setMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
