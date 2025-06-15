// src/pages/WorkExperience.jsx
import ExperienceCard from '../components/ExperienceCard';
import SectionTitle from '../components/SectionTitle';
import experience from '../data/experience';

const WorkExperience = () => {
  return (
    <section className="px-4 py-8 max-w-5xl mx-auto space-y-6">
      <SectionTitle title="Work Experience" />
      {experience.map((exp, idx) => (
        <ExperienceCard key={idx} {...exp} />
      ))}
    </section>
  );
};

export default WorkExperience;
