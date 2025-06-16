import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';

function Skills() {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:5000/api/skills')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to fetch skills');
        return res.json();
      })
      .then((data) => {
        setSkills(data);
        setError('');
      })
      .catch((err) => {
        setError(err.message || 'Something went wrong');
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center py-16 text-lg text-text-light dark:text-text-dark">
        Loading skills...
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
      <SectionTitle title="Skills" subtitle="What I Know" />
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <Link key={skill._id} to={`/details/skills/${skill._id}`}>
            <SkillBadge name={skill.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Skills;
