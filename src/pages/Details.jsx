import { useParams, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import useFetcher from '../hooks/useFetcher';
import DetailsLayout from '../layout/DetailsLayout';

export default function Details() {
  const { type, id } = useParams();

  const allowedTypes = ['projects', 'skills', 'experience'];
  if (!allowedTypes.includes(type)) return <Navigate to="/" replace />;

  const { data, loading, error } = useFetcher(`${type}/${id}`);

  if (loading) 
    return (
      <div className="flex justify-center items-center py-32">
        <p className="text-lg text-text-light dark:text-text-dark animate-pulse">
          Loading...
        </p>
      </div>
    );

  if (error || !data) 
    return (
      <div className="flex justify-center items-center py-32">
        <p className="text-lg text-red-500 animate-pulse">{error || 'Item not found'}</p>
      </div>
    );

  const title = data.title || data.jobRole || data.name || 'Details';
  const subtitle = data.subtitle || data.company || data.role || '';
  const summary = data.summary || data.description?.[0] || '';
  const links = data.links || [];

  return (
    <DetailsLayout
      title={
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-light to-accent-light dark:from-primary-dark dark:to-accent-dark bg-clip-text text-transparent"
        >
          {title}
        </motion.h1>
      }
      subtitle={
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: 'easeOut' }}
          className="text-xl md:text-2xl font-semibold text-accent-light dark:text-accent-dark"
        >
          {subtitle}
        </motion.h2>
      }
      summary={summary}
      links={links.map((link, idx) => (
        <motion.a
          key={idx}
          href={link.url}
          target="_blank"
          rel="noreferrer"
          whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          className="inline-block px-5 py-2 rounded-xl bg-primary-light/20 dark:bg-primary-dark/20 text-primary-light dark:text-primary-dark font-medium shadow-md hover:shadow-lg transition-all duration-300"
        >
          {link.label}
        </motion.a>
      ))}
    >
      <motion.div
        className="space-y-4 text-base leading-relaxed text-text-light dark:text-text-dark mt-6"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <AnimatePresence>
          {data.description?.map((para, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-lg"
            >
              {para}
            </motion.p>
          ))}
          {data.source && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-secondary-light dark:text-secondary-dark"
            >
              <strong>Source:</strong> {data.source}
            </motion.p>
          )}
          {data.confidence && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm text-secondary-light dark:text-secondary-dark"
            >
              <strong>Confidence:</strong> {data.confidence}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </DetailsLayout>
  );
}
