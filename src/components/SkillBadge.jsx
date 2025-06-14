import React from "react";

const skills = [
  "HTML5", "CSS3", "JavaScript", "React", "TailwindCSS",
  "Node.js", "Express", "MongoDB", "MySQL", "C",
  "Python", "Git & GitHub", "Vite", "PowerShell", "SQL"
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 px-6 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Skills</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, idx) => (
            <span key={idx} className="px-4 py-2 bg-gray-200 dark:bg-gray-800 text-sm rounded-full hover:bg-primary hover:text-white dark:hover:bg-primary transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
