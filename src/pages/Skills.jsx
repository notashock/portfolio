import SectionTitle from '../components/ui/SectionTitle';
import SkillBadge from '../components/ui/SkillBadge';
import { Link } from 'react-router-dom';
import useFetcher from '../hooks/useFetcher';
import { motion } from 'framer-motion';

function Skills() {
  const { data: skills, loading, error } = useFetcher('skills');

  if (loading)
    return (
      <p className="text-center text-text-light dark:text-text-dark text-lg py-16">
        Loading...
      </p>
    );

  if (error || !skills)
    return (
      <p className="text-center text-red-500 text-lg py-16">
        {error || 'Failed to load skills'}
      </p>
    );

  // Container variants for staggered fade-up effect
  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.1 } },
  };

  const badgeVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
  };

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Skills" subtitle="What I Know" />

      <motion.div
        className="flex flex-wrap gap-4 mt-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {skills.map((skill) => (
          <motion.div key={skill._id} variants={badgeVariants} whileHover={{ scale: 1.05 }}>
            <Link to={`/details/skills/${skill._id}`}>
              <SkillBadge
                name={skill.title}
                className="bg-gradient-to-tr from-surface-light/80 to-primary-light/10 
                           dark:from-surface-dark/80 dark:to-primary-dark/10 
                           text-heading-light dark:text-heading-dark 
                           hover:shadow-xl hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Skills;
