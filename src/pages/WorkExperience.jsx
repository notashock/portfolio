import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import useFetcher from '../hooks/useFetcher';

function WorkExperience() {
  const { data: experiences, loading, error } = useFetcher('experience');

  if (loading)
    return (
      <p className="text-center py-16 text-accent-light dark:text-accent-dark text-lg font-medium">
        Loading...
      </p>
    );
  if (error || !experiences)
    return (
      <p className="text-center py-16 text-red-500 text-lg font-medium">
        {error || 'Failed to load experience'}
      </p>
    );

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Work Experience" subtitle="Where I’ve Worked" />

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Link key={exp._id} to={`/details/experience/${exp._id}`}>
            <motion.div
              whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
              whileTap={{ scale: 0.98 }}
              className="p-6 rounded-2xl bg-gradient-to-tr from-surface-light/80 to-primary-light/10
                         dark:from-surface-dark/80 dark:to-primary-dark/10
                         border border-primary-light/20 dark:border-primary-dark/20
                         shadow-lg transition-all duration-300 cursor-pointer"
            >
              <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                {exp.jobRole} @ {exp.company}
              </h3>
              <p className="text-sm text-text-light dark:text-text-dark opacity-80 mt-1">
                {exp.duration}
              </p>
              <p className="text-text-light dark:text-text-dark mt-3 line-clamp-3">
                {exp.summary}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
