import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const getDefaultTheme = () => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved === 'dark';

    const hour = new Date().getHours();
    return !(hour >= 6 && hour < 18); // Dark if before 6AM or after 6PM
  };

  const [darkMode, setDarkMode] = useState(getDefaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className="relative w-10 h-10 flex items-center justify-center rounded-full
                 transition-all duration-300 hover:scale-110 group"
    >
      {/* Moon Icon */}
      <div
        className={`absolute transition-transform duration-500 ease-out
          ${darkMode ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}
      >
        <MoonIcon className="w-6 h-6 text-gray-300" />
      </div>

      {/* Sun Icon */}
      <div
        className={`absolute transition-transform duration-500 ease-out
          ${darkMode ? '-rotate-180 scale-0' : 'rotate-0 scale-100'}`}
      >
        <SunIcon className="w-6 h-6 text-yellow-400" />
      </div>
    </button>
  );
}
