import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

function Projects() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Projects" subtitle="Some things I've built" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
