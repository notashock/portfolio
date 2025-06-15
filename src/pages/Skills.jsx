import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import SkillBadge from '../components/SkillBadge';
import skills from '../data/Skills';

function Skills() {
  return (
    <section className="px-4 sm:px-8 lg:px-16 py-8">
      <SectionTitle title="Skills" subtitle="What I Know" />

      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <Link key={skill.id} to={`/details/skills/${skill.id}`}>
            <SkillBadge name={skill.title} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Skills;
