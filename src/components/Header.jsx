// src/components/Header.jsx
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import profilePic from '../assets/profile.jpg'; // Replace with your image

export default function Header() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold text-heading-light dark:text-heading-dark"
        >
          Namaste
        </Link>

        <div className="flex items-center gap-4">
          <ThemeToggle />

          <Link to="/about" title="About Me">
            <img
              src={profilePic}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-primary-light dark:border-primary-dark hover:opacity-90 transition"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
