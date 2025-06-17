import SectionTitle from '../components/SectionTitle';
import { Link } from 'react-router-dom';
import useFetcher from '../hooks/useFetcher';

function WorkExperience() {
  const { data: experiences, loading, error } = useFetcher('experience');

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error || !experiences) return <p className="text-center text-red-500 py-16">{error || 'Failed to load experience'}</p>;

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Work Experience" subtitle="Where I’ve Worked" />

      <div className="space-y-6">
        {experiences.map((exp) => (
          <Link key={exp._id} to={`/details/experience/${exp._id}`}>
            <div className="p-4 bg-surface-light dark:bg-surface-dark rounded-xl shadow hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-heading-light dark:text-heading-dark">
                {exp.jobRole} @ {exp.company}
              </h3>
              <p className="text-sm text-text-light dark:text-text-dark opacity-80">
                {exp.duration}
              </p>
              <p className="text-text-light dark:text-text-dark mt-2 line-clamp-3">
                {exp.summary}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
