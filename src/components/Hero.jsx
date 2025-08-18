import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const quotes = [
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "— Harold Abelson" },
  { text: "Talk is cheap. Show me the code.", author: "— Linus Torvalds" },
  { text: "First, solve the problem. Then, write the code.", author: "— John Johnson" },
  { text: "Code speaks louder than words.", author: "— Kiddo", isMine: true },
  { text: "I don’t just write code. I craft experiences.", author: "— Kiddo", isMine: true },
];

export default function Hero() {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center 
                 gap-12 px-6 md:px-20 bg-surface-light dark:bg-surface-dark 
                 text-text-light dark:text-text-dark relative overflow-hidden"
    >
      {/* Left Column */}
      <div className="flex-1 text-center md:text-left space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-heading-light dark:text-heading-dark">
          Ashok <span className="text-primary-light dark:text-primary-dark">Babu</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-accent-light dark:text-accent-dark">
          Engineering Student · Full-Stack Builder
        </h2>
        <p className="text-lg max-w-lg">
          I craft digital experiences where design meets code.  
          Always learning. Always building.
        </p>
        <div className="mt-6">
          <Link
            to="/portfolio/contact"
            className="inline-block px-6 py-3 bg-primary-light dark:bg-primary-dark 
                       text-white dark:text-surface-dark rounded-xl font-semibold 
                       shadow-lg hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40 
                       hover:scale-105 transition-transform"
          >
            Get in Touch
          </Link>
        </div>
      </div>

      {/* Right Column: Animated Quote Card */}
      <div className="flex-1 flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuote}
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="relative w-full max-w-md p-8 rounded-2xl bg-gradient-to-tr 
                       from-surface-light/80 to-primary-light/10 dark:from-surface-dark/80 
                       dark:to-primary-dark/10 shadow-xl 
                       border border-primary-light/20 dark:border-primary-dark/20
                       backdrop-blur-md"
          >
            <p
              className={`text-xl leading-relaxed mb-4 ${
                quotes[currentQuote].isMine
                  ? "text-accent-light dark:text-accent-dark font-semibold"
                  : "text-heading-light dark:text-heading-dark"
              }`}
            >
              “{quotes[currentQuote].text}”
            </p>
            <span className="block text-right text-sm text-text-light/70 dark:text-text-dark/70">
              {quotes[currentQuote].author}
            </span>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
