import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';

function WorkExperience() {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/experience');
        if (!res.ok) throw new Error('Failed to fetch experience data');
        const data = await res.json();
        setExperiences(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return <div className="text-center py-16 text-lg">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-16 text-red-500">{error}</div>;
  }

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Work Experience" subtitle="Where I've Worked" />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <Link to={`/details/experience/${exp._id}`} key={exp._id}>
            <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl shadow hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold text-heading-light dark:text-heading-dark">
                {exp.role} @ {exp.company}
              </h3>
              <p className="text-text-light dark:text-text-dark text-sm opacity-80">{exp.duration}</p>
              <p className="text-text-light dark:text-text-dark mt-2">{exp.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default WorkExperience;
