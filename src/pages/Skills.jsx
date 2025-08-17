import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import { Link } from 'react-router-dom';
import useFetcher from '../hooks/useFetcher';

function Skills() {
  const { data: skills, loading, error } = useFetcher('skills');

  if (loading) return <p className="text-center py-16">Loading...</p>;
  if (error || !skills) return <p className="text-center text-red-500 py-16">{error || 'Failed to load skills'}</p>;

  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Skills" subtitle="What I Know" />

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <Link key={skill._id} to={`/portfolio/details/skills/${skill._id}`}>
            <SkillBadge name={skill.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Skills;
