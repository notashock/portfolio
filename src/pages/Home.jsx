// src/pages/Home.jsx
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react"; // Chat Icon

const quotes = [
  { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "— Harold Abelson" },
  { text: "With great Power Comes the great Responsibility.", author: "— Ben Parker" },
  { text: "A very small man can cast a very long Shadow.", author: "— lord Varys" },
  { text: "Live, Love, Laugh!!, Be the best version of yourself!", author: "— Dhathri Putty", isMine: true },
  { text: "Fall Again, Fail Better!", author: "— Ashok Bavireddy", isMine: true },
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="px-6 md:px-20 flex flex-col items-start justify-start relative pb-24">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 mt-12">
        {/* Left Column */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-heading-light dark:text-heading-dark">
            Ashok Babu <span className="text-primary-light dark:text-primary-dark">Bavireddy</span>
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
              to="/contact"
              className="inline-block px-6 py-3 bg-primary-light dark:bg-primary-dark 
                         text-white dark:text-surface-dark rounded-xl font-semibold 
                         shadow-lg hover:shadow-accent-light/40 dark:hover:shadow-accent-dark/40 
                         hover:scale-105 transition-transform"
            >
              Get in Touch
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Quote Card */}
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
                         dark:to-primary-dark/10 shadow-xl border border-primary-light/20 
                         dark:border-primary-dark/20 backdrop-blur-md"
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
      </div>

      {/* Floating Chat Button */}
      <motion.button
        onClick={() => navigate("/chat")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 p-4 mb-20 rounded-full bg-primary-light dark:bg-primary-dark text-white shadow-xl transition-colors"
      >
        <MessageCircle size={28} />
      </motion.button>
    </section>
  );
}
