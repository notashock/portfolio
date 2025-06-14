import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
  return (
    <>
      <Hero />

      <section className="px-6 sm:px-10 lg:px-20 py-12 bg-surface-light dark:bg-surface-dark">
        <SectionTitle title="About Me" />
        <p className="text-text-light dark:text-text-dark mb-4">
          Learn about my journey, passions, and how I became a full-stack developer with a deep interest in AI & ML.
        </p>
        <Link
          to="/about"
          className="text-primary-light dark:text-primary-dark underline hover:opacity-80"
        >
          Read more →
        </Link>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-12 bg-muted-light dark:bg-muted-dark">
        <SectionTitle title="Projects" />
        <p className="text-text-light dark:text-text-dark mb-4">
          Explore a curated list of my personal and collaborative projects showcasing my skills and problem-solving approach.
        </p>
        <Link
          to="/projects"
          className="text-primary-light dark:text-primary-dark underline hover:opacity-80"
        >
          View projects →
        </Link>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-12 bg-surface-light dark:bg-surface-dark">
        <SectionTitle title="Skills" />
        <p className="text-text-light dark:text-text-dark mb-4">
          Check out the technologies and tools I'm proficient with, from frontend frameworks to backend systems.
        </p>
        <Link
          to="/skills"
          className="text-primary-light dark:text-primary-dark underline hover:opacity-80"
        >
          See skills →
        </Link>
      </section>

      <section className="px-6 sm:px-10 lg:px-20 py-12 bg-muted-light dark:bg-muted-dark">
        <SectionTitle title="Contact" />
        <p className="text-text-light dark:text-text-dark mb-4">
          Got a question or opportunity? Reach out and let’s connect!
        </p>
        <Link
          to="/contact"
          className="text-primary-light dark:text-primary-dark underline hover:opacity-80"
        >
          Contact me →
        </Link>
      </section>
    </>
  );
}
