import { motion } from 'framer-motion';

const ExperienceCard = ({ company, role, duration, description }) => (
  <motion.div
    whileHover={{ scale: 1.02, y: -2, boxShadow: '0 10px 25px rgba(0,0,0,0.1)' }}
    whileTap={{ scale: 0.98 }}
    className="p-6 rounded-2xl bg-gradient-to-tr from-surface-light/80 to-primary-light/10
               dark:from-surface-dark/80 dark:to-primary-dark/10
               border border-primary-light/20 dark:border-primary-dark/20
               shadow-lg transition-all duration-300 cursor-pointer"
  >
    <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
      {company}
    </h3>
    <p className="text-sm text-accent-light dark:text-accent-dark italic mt-1">
      {role} — {duration}
    </p>
    <p className="text-text-light dark:text-text-dark mt-3 line-clamp-3">
      {description}
    </p>
  </motion.div>
);

export default ExperienceCard;
