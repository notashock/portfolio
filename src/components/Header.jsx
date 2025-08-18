import { Link } from 'react-router-dom';
import ThemeToggle from './ui/ThemeToggle';
import profilePic from '../assets/profile.jpg';
import { useEffect, useState } from 'react';

export default function Header() {
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

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [greetings.length]);

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 
             backdrop-blur-lg bg-surface-light/80 dark:bg-surface-dark/80
             text-text-light dark:text-text-dark 
             border-b rounded-b-lg border-white/10 
             animate-fadeSlideDown
             shadow-[0_2px_8px_-2px] shadow-accent-light/30 
             dark:shadow-accent-dark/30"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Rolling Greeting */}
        <Link to="/" className="overflow-hidden h-10 flex items-center group">
          <div
            key={index}
            className={`text-2xl font-extrabold transition-all duration-700 ease-in-out animate-slide 
              ${greetings[index].lang === "Telugu" 
                ? "text-accent-light dark:text-accent-dark" 
                : "text-heading-light dark:text-heading-dark"
              } 
              group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]`}
          >
            {greetings[index].text}
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <ThemeToggle />
          <Link to="/about" title="About Me" className="relative group">
            {/* Glowing animated halo */}
            <div className="absolute inset-0 rounded-full 
                            bg-primary-light/30 dark:bg-primary-dark/30
                            blur-xl opacity-60 
                            group-hover:opacity-100 
                            animate-pulse-glow" />

            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Profile"
              className="relative w-12 h-12 rounded-full border-2 
                         border-primary-light dark:border-primary-dark 
                         shadow-lg group-hover:scale-110 
                         group-hover:rotate-3 
                         transition-all duration-500 ease-in-out"
            />

            {/* Overlay shimmer effect */}
            <div className="absolute inset-0 rounded-full 
                            bg-gradient-to-r from-primary-light/40 to-transparent 
                            dark:from-primary-dark/40
                            opacity-0 group-hover:opacity-60 
                            animate-shimmer" />
          </Link>
        </div>
      </div>
    </header>
  );
}
