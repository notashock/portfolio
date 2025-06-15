// src/pages/Home.jsx
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

function Home() {
  return (
    <main className="px-4 sm:px-8 lg:px-16 py-8 space-y-16">
      <Hero />

      {/* Projects Preview */}
      <section>
        <SectionTitle title="Projects" subtitle="Things I've Built" />
        <p className="text-muted-light dark:text-muted-dark max-w-2xl">
          I’ve worked on a variety of full-stack projects that reflect both creativity and technical depth. Each project taught me something new.
        </p>
        <Link
          to="/projects"
          className="inline-block mt-4 text-primary-light dark:text-primary-dark underline"
        >
          Explore Projects →
        </Link>
      </section>

      {/* Skills Preview */}
      <section>
        <SectionTitle title="Skills" subtitle="Tech I Use" />
        <p className="text-muted-light dark:text-muted-dark max-w-2xl">
          From frontend finesse to backend architecture, my skillset covers tools and frameworks I use to bring ideas to life.
        </p>
        <Link
          to="/skills"
          className="inline-block mt-4 text-primary-light dark:text-primary-dark underline"
        >
          See All Skills →
        </Link>
      </section>

      {/* Work Experience Preview */}
      <section>
        <SectionTitle title="Experience" subtitle="Where I've Worked" />
        <p className="text-muted-light dark:text-muted-dark max-w-2xl">
          My professional journey spans across impactful internships and freelance work, shaping the way I build software.
        </p>
        <Link
          to="/experience"
          className="inline-block mt-4 text-primary-light dark:text-primary-dark underline"
        >
          View Work Experience →
        </Link>
      </section>

      {/* Contact Preview */}
      <section>
        <SectionTitle title="Get In Touch" subtitle="Let’s Connect" />
        <p className="text-muted-light dark:text-muted-dark max-w-2xl">
          Whether it's a potential collaboration or just a hello, I’d love to hear from you. Feel free to drop a message.
        </p>
        <Link
          to="/contact"
          className="inline-block mt-4 text-primary-light dark:text-primary-dark underline"
        >
          Contact Me →
        </Link>
      </section>
    </main>
  );
}

export default Home;
