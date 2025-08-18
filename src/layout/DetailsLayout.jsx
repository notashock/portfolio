import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DetailsLayout = ({ title, subtitle, summary, children, links }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark min-h-screen flex flex-col transition-colors duration-300">
      <Header />

      <main className="flex-grow pt-16 pb-24 px-4 sm:px-8 lg:px-20 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-5xl p-8 rounded-2xl bg-gradient-to-tr from-surface-light/80 to-primary-light/10 dark:from-surface-dark/80 dark:to-primary-dark/10 shadow-xl border border-primary-light/20 dark:border-primary-dark/20 backdrop-blur-md"
        >
          {/* Title & Subtitle */}
          <section className="mb-8">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent"
            >
              {title}
            </motion.h1>
            {subtitle && (
              <motion.p
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-text-light/80 dark:text-text-dark/80 max-w-3xl mt-1"
              >
                {subtitle}
              </motion.p>
            )}
          </section>

          {/* Summary */}
          {summary && (
            <section className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-2xl font-semibold mb-2 text-heading-light dark:text-heading-dark"
              >
                Summary
              </motion.h2>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-base leading-relaxed text-text-light dark:text-text-dark max-w-4xl"
              >
                {summary}
              </motion.p>
            </section>
          )}

          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="space-y-4 text-base leading-relaxed text-text-light dark:text-text-dark"
          >
            {children}
          </motion.div>

          {/* Links Section */}
          {links && links.length > 0 && (
            <section className="mt-12">
              <motion.h2
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-2xl font-semibold mb-4 text-heading-light dark:text-heading-dark"
              >
                Relevant Links
              </motion.h2>
              <div className="flex flex-wrap gap-4">
                {links.map((link, idx) => (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="px-5 py-2 rounded-xl bg-primary-light/20 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark font-medium shadow-md hover:shadow-lg transition-all duration-300"
                  >
                    {link.label || link.url}
                  </motion.a>
                ))}
              </div>
            </section>
          )}
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default DetailsLayout;
