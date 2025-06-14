import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

export default function Projects() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark py-16 px-6 sm:px-10 lg:px-20">
      <SectionTitle
        title="Projects"
        subtitle="A glimpse into some of my technical creations and contributions."
      />
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </div>
  );
}
