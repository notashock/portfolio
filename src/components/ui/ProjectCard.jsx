import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();
  if (!project) return null;

  const handleClick = () => {
    navigate(`/details/projects/${project._id}`);
  };

  // Card fade-up animation
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.div
      onClick={handleClick}
      variants={cardVariants}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="cursor-pointer relative p-6 rounded-2xl 
                 shadow-xl hover:shadow-2xl transition-shadow duration-300
                 border border-primary-light/20 dark:border-primary-dark/20
                 backdrop-blur-md
                 bg-gradient-to-tr from-surface-light/80 to-primary-light/10 
                 dark:from-surface-dark/80 dark:to-primary-dark/10
                 flex flex-col justify-between"
    >
      <div>
        <h3 className="text-heading-light dark:text-heading-dark text-2xl font-semibold mb-3 leading-snug">
          {project.title}
        </h3>
        <p className="text-text-light dark:text-text-dark text-sm mb-4 leading-relaxed">
          {project.summary}
        </p>
      </div>

      {project.tags?.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-3">
          {project.tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 bg-primary-light/20 dark:bg-primary-dark/30 
                         text-primary-light dark:text-primary-dark 
                         rounded-lg font-medium hover:bg-primary-light/30 dark:hover:bg-primary-dark/50
                         transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default ProjectCard;
