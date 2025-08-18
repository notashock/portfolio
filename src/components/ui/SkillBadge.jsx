function SkillBadge({ name }) {
  return (
    <span className="inline-block px-4 py-2 bg-secondary-light dark:bg-secondary-dark text-white text-sm rounded-full shadow-sm hover:opacity-90 transition">
      {name}
    </span>
  );
}

export default SkillBadge;
