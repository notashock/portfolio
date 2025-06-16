import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';

function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch projects');
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setError('');
      })
      .catch((err) => {
        console.error('Error fetching projects:', err);
        setError('Unable to load projects.');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-lg text-text-light dark:text-text-dark">
        Loading projects...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16 text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Projects" subtitle="Some things I've built" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link key={project._id} to={`/details/projects/${project._id}`}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Projects;
