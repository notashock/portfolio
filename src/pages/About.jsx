// src/components/About.jsx
import React from 'react';

const About = () => {
  return (
    <section
      id="about"
      className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark py-16 px-6 md:px-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-heading-light dark:text-heading-dark mb-6">
          About Me
        </h2>
        <p className="text-lg leading-relaxed">
          Hey there! 👋 I’m <span className="text-primary-light dark:text-primary-dark font-semibold">Kiddo</span>,
          an engineering student passionate about building thoughtful digital experiences.
          I enjoy solving problems through code and expressing creativity in design.
        </p>

        <p className="text-lg leading-relaxed mt-4">
          Whether I’m developing full-stack applications, diving into algorithms, or exploring the
          world of machine learning and AI, I love pushing boundaries and learning by doing. My journey
          is fueled by curiosity and a constant drive to improve. 🚀
        </p>
      </div>
    </section>
  );
};

export default About;
