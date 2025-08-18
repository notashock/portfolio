// src/components/About.jsx
import React from "react";
import profilePic from "../assets/profile.jpg";
import {
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import {
  SiLeetcode,
  SiCodechef,
  SiReddit
} from "react-icons/si";

const About = () => {
  return (
    <section
      id="about"
      className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark 
                 py-20 px-6 md:px-20"
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Profile Image with Glow */}
        <div className="relative group flex justify-center">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent-light/40 to-primary-light/40 
                          dark:from-accent-dark/40 dark:to-primary-dark/40 blur-2xl opacity-60 
                          group-hover:opacity-90 transition duration-500" />
          <img
            src={profilePic}
            alt="Kiddo"
            className="relative w-64 h-64 rounded-full object-cover shadow-lg 
                       border-4 border-primary-light dark:border-primary-dark 
                       transition-transform duration-500 group-hover:scale-105 
                       group-hover:rotate-3"
          />
        </div>

        {/* Content */}
        <div className="text-center md:text-left space-y-6 animate-fadeSlideUp">
          <h2 className="text-4xl font-bold text-heading-light dark:text-heading-dark mb-4">
            About Me
          </h2>
          <p className="text-lg leading-relaxed">
            Hey there! 👋 I’m{" "}
            <span className="text-primary-light dark:text-primary-dark font-semibold">
              Kiddo
            </span>
            , an engineering student passionate about building thoughtful digital
            experiences. I enjoy solving problems through code and expressing
            creativity in design.
          </p>

          <p className="text-lg leading-relaxed">
            Whether I’m developing full-stack applications, diving into
            algorithms, or exploring the world of machine learning and AI, I
            love pushing boundaries and learning by doing. 🚀
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-6">
            <a
              href="https://github.com/notashock"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-primary-light dark:hover:text-primary-dark 
                         transform hover:scale-125 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/ashok-babu-bavireddy-346846258/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-primary-light dark:hover:text-primary-dark 
                         transform hover:scale-125 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://leetcode.com/u/ashokbabu_bavireddy/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-primary-light dark:hover:text-primary-dark 
                         transform hover:scale-125 transition"
            >
              <SiLeetcode />
            </a>
            <a
              href="https://www.codechef.com/users/ashokbabu_bavi"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-primary-light dark:hover:text-primary-dark 
                         transform hover:scale-125 transition"
            >
              <SiCodechef />
            </a>
            <a
              href="https://www.reddit.com/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl hover:text-primary-light dark:hover:text-primary-dark 
                         transform hover:scale-125 transition"
            >
              <SiReddit />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
