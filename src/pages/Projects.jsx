import useFetcher from '../hooks/useFetcher';
import SectionTitle from '../components/ui/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';

function Projects() {
  const { data: projects, loading, error } = useFetcher('projects');

  if (loading) return <p className="text-center">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Projects" subtitle="Some things I've built" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
