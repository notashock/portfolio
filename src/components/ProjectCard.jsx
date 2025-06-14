export default function ProjectCard({ title, description, imageUrl, liveLink, githubLink }) {
  return (
    <div className="bg-muted-light dark:bg-muted-dark p-6 rounded-2xl shadow hover:shadow-lg transition">
      <img src={imageUrl} alt={title} className="rounded-xl mb-4 w-full h-40 object-cover" />
      <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">{title}</h3>
      <p className="text-text-light dark:text-text-dark mt-2 mb-4">{description}</p>
      <div className="flex gap-4">
        {liveLink && (
          <a href={liveLink} target="_blank" rel="noopener noreferrer" className="text-primary-light dark:text-primary-dark hover:underline">
            Live
          </a>
        )}
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="text-secondary-light dark:text-secondary-dark hover:underline">
            Code
          </a>
        )}
      </div>
    </div>
  );
}
