import SectionTitle from '../components/ui/SectionTitle';
import { motion } from 'framer-motion';

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, duration: 0.8 }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
    hover: { scale: 1.05, boxShadow: "0px 0px 12px rgba(16, 185, 129, 0.5)" },
  };

  return (
    <motion.div
      className="bg-surface-light dark:bg-surface-dark py-16 px-6 sm:px-10 lg:px-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <SectionTitle
        title="Contact Me"
        subtitle="I'd love to hear from you! Whether it's a project, opportunity, or just to say hi."
      />

      <motion.form className="max-w-xl mx-auto mt-8 space-y-6">
        <motion.input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
          variants={itemVariants}
        />
        <motion.input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
          variants={itemVariants}
        />
        <motion.textarea
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-md bg-muted-light dark:bg-muted-dark text-text-light dark:text-text-dark border border-muted-light dark:border-muted-dark focus:outline-none focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark"
          variants={itemVariants}
        />
        <motion.button
          type="submit"
          className="px-6 py-3 rounded-md text-white bg-primary-light dark:bg-primary-dark transition-all"
          variants={buttonVariants}
          whileHover="hover"
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.div>
  );
}
