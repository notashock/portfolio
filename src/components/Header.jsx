import { Link } from 'react-scroll'; // Smooth scroll for single-page
import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h1 className="text-2xl font-bold text-heading-light dark:text-heading-dark">
          Namaste
        </h1>
        <nav className="space-x-6 hidden md:block">
          <Link to="about" smooth duration={500} className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">
            About
          </Link>
          <Link to="projects" smooth duration={500} className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">
            Projects
          </Link>
          <Link to="skills" smooth duration={500} className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">
            Skills
          </Link>
          <Link to="contact" smooth duration={500} className="cursor-pointer hover:text-primary-light dark:hover:text-primary-dark">
            Contact
          </Link>
        </nav>
        <div className="ml-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
