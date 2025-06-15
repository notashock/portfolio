import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-heading-light dark:text-heading-dark hover:opacity-90 transition">
          Namaste
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
