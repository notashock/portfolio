// src/components/Header.jsx
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
    <header className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

        {/* Rolling Greeting */}
        <Link to="/" className="overflow-hidden h-10 flex items-center">
          <div
            key={index}
            className={`text-2xl font-bold transition-all duration-700 ease-in-out animate-slide 
              ${greetings[index].lang === "Telugu" 
                ? "text-accent-light dark:text-accent-dark" 
                : "text-heading-light dark:text-heading-dark"
              }`}
          >
            {greetings[index].text}
          </div>
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link to="/about" title="About Me" className="relative group">
            {/* Glowing animated ring */}
            <div className="absolute inset-0 rounded-full border-2 
                           border-primary-light dark:border-primary-dark 
                           animate-pulse opacity-60 group-hover:opacity-100 transition" />

            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Profile"
              className="w-12 h-12 rounded-full border-2 
                         border-primary-light dark:border-primary-dark 
                         shadow-md group-hover:scale-110 
                         group-hover:rotate-3 
                         group-hover:shadow-xl 
                         transition-all duration-500 ease-in-out"
            />

            {/* Overlay glow effect */}
            <div className="absolute inset-0 rounded-full bg-primary-light/20 dark:bg-primary-dark/20 
                            opacity-0 group-hover:opacity-50 transition duration-500" />
          </Link>
        </div>
      </div>
    </header>
  );
}
