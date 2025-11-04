import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useAppContext } from "../context/AppContext";

const quotes = [
  {
    text: "Programs must be written for people to read, and only incidentally for machines to execute.",
    author: "— Harold Abelson",
  },
  { text: "With great Power Comes the great Responsibility.", author: "— Ben Parker" },
  { text: "A very small man can cast a very long Shadow.", author: "— Lord Varys" },
  { text: "Live, Love, Laugh!! Be the best version of yourself!", author: "— Dhathri Putty", isMine: true },
  { text: "Fall Again, Fail Better!", author: "— Ashok Bavireddy", isMine: true },
];

export default function Home() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const navigate = useNavigate();
  const { isMobile, isTablet } = useAppContext();

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentQuote((prev) => (prev + 1) % quotes.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  const isCompact = isMobile || isTablet;
  const headingSize = isMobile ? "text-4xl" : isTablet ? "text-5xl" : "text-6xl";
  const subHeadingSize = isMobile ? "text-xl" : isTablet ? "text-2xl" : "text-3xl";
  const paddingX = isMobile ? "px-4" : isTablet ? "px-10" : "px-20";

  return (
    <section
      className={`${paddingX} flex flex-col items-center justify-center min-h-[calc(100vh-12rem)] 
                  text-center transition-all duration-500`}
    >
      <div
        className={`max-w-6xl w-full flex ${
          isCompact ? "flex-col items-center text-center" : "flex-row items-center text-left"
        } justify-center gap-12`}
      >
        {/* LEFT COLUMN */}
        <motion.div
          className={`flex-1 space-y-6 ${isCompact ? "" : "pr-8"}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className={`${headingSize} font-bold text-heading-light dark:text-heading-dark`}>
            Ashok Babu{" "}
            <span className="text-primary-light dark:text-primary-dark">Bavireddy</span>
          </h1>

          <h2 className={`${subHeadingSize} font-semibold text-accent-light dark:text-accent-dark`}>
            Engineering Student · Full-Stack Enthusiast 
          </h2>

          <p
            className={`text-lg max-w-lg ${
              isCompact ? "mx-auto" : ""
            } text-text-light dark:text-text-dark`}
          >
            Passionate about crafting seamless full-stack applications that balance design and functionality.
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

        {/* RIGHT COLUMN — QUOTE CARD */}
        <div className={`flex-1 flex ${isCompact ? "justify-center mt-10" : "justify-end"}`}>
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

      {/* FLOATING CHAT BUTTON */}
      <motion.button
        onClick={() => navigate("/chat")}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className={`fixed bottom-40 right-6 p-4 rounded-full bg-primary-light dark:bg-primary-dark 
                   text-white shadow-xl transition-colors ${isMobile ? "scale-90" : ""}`}
      >
        <MessageCircle size={28} />
      </motion.button>
    </section>
  );
}
