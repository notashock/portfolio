import { motion } from 'framer-motion';

function SkillBadge({ name }) {
  return (
    <motion.span
      whileHover={{ scale: 1.1, rotate: 2 }}
      whileTap={{ scale: 0.95 }}
      className="inline-block px-4 py-2 bg-gradient-to-tr 
                 from-surface-light/80 to-primary-light/20 
                 dark:from-surface-dark/80 dark:to-primary-dark/20
                 text-heading-light dark:text-heading-dark 
                 text-sm font-medium rounded-full 
                 shadow-md hover:shadow-xl cursor-pointer 
                 transition-all duration-300"
    >
      {name}
    </motion.span>
  );
}

export default SkillBadge;
