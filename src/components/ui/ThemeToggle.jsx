import { useAppContext } from '../../context/AppContext';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useAppContext();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      aria-label="Toggle Dark Mode"
      className="relative w-10 h-10 flex items-center justify-center rounded-full
                 transition-all duration-300 hover:scale-110 group"
    >
      <div
        className={`absolute transition-transform duration-500 ease-out
          ${darkMode ? 'rotate-0 scale-100' : 'rotate-180 scale-0'}`}
      >
        <MoonIcon className="w-6 h-6 text-gray-300" />
      </div>

      <div
        className={`absolute transition-transform duration-500 ease-out
          ${darkMode ? '-rotate-180 scale-0' : 'rotate-0 scale-100'}`}
      >
        <SunIcon className="w-6 h-6 text-yellow-400" />
      </div>
    </button>
  );
}
