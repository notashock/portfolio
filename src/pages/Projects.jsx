import useFetcher from '../hooks/useFetcher';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { motion } from 'framer-motion';

function Projects() {
  const { data: projects, loading, error } = useFetcher('projects');

  if (loading)
    return (
      <p className="text-center text-text-light dark:text-text-dark text-lg mt-10">
        Loading...
      </p>
    );
  if (error)
    return (
      <p className="text-center text-red-500 text-lg mt-10">
        {error}
      </p>
    );

  // Container variants for staggered children
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Projects" subtitle="Some things I've built" />

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
