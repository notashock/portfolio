import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  if (!project) return null;

  const handleClick = () => {
    navigate(`/portfolio/details/projects/${project._id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="cursor-pointer bg-surface-light dark:bg-surface-dark p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300"
    >
      <h3 className="text-heading-light dark:text-heading-dark text-xl font-semibold mb-2">
        {project.title}
      </h3>
      <p className="text-text-light dark:text-text-dark text-sm mb-2">
        {project.summary}
      </p>
      <div className="flex flex-wrap gap-2 mt-2">
        {project.tags?.map((tag, index) => (
          <span
            key={index}
            className="text-xs px-2 py-1 bg-accent-light dark:bg-accent-dark text-white rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
