export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[85vh] flex items-center justify-center bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark px-4"
    >
      <div className="text-center max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-heading-light dark:text-heading-dark mb-6">
          Ashok Babu Bavireddy
        </h1>
        <p className="text-xl sm:text-2xl mb-4">
          Engineering Student | Full Stack Developer
        </p>
        <p className="text-base sm:text-lg text-text-light dark:text-text-dark opacity-80">
          Passionate about building beautiful, scalable web apps.<br />
          Exploring the world of <span className="text-primary-light dark:text-primary-dark font-medium">Artificial Intelligence</span> and <span className="text-secondary-light dark:text-secondary-dark font-medium">Machine Learning</span>.
        </p>
        <div className="mt-8">
          <a
            href="#contact"
            className="inline-block px-6 py-3 bg-primary-light dark:bg-primary-dark text-white dark:text-surface-dark rounded-xl font-semibold shadow hover:bg-indigo-600 dark:hover:bg-indigo-300 transition"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
