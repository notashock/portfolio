// src/components/ExperienceCard.jsx
const ExperienceCard = ({ company, role, duration, description }) => (
  <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-xl shadow-md">
    <h3 className="text-heading-light dark:text-heading-dark text-xl font-semibold">{company}</h3>
    <p className="text-secondary-light dark:text-secondary-dark italic">{role} — {duration}</p>
    <p className="text-text-light dark:text-text-dark mt-2">{description}</p>
  </div>
);

export default ExperienceCard;
