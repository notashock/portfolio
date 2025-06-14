import SectionTitle from '../components/SectionTitle';

export default function Contact() {
  return (
    <div className="bg-surface-light dark:bg-surface-dark py-16 px-6 sm:px-10 lg:px-20">
      <SectionTitle
        title="Contact Me"
        subtitle="I'd love to hear from you! Whether it's a project, opportunity, or just to say hi."
      />
      <form className="max-w-xl mx-auto mt-8 space-y-6">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-md text-white bg-primary-light dark:bg-primary-dark hover:opacity-90 transition-all"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
