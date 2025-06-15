import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const DetailsLayout = ({ title, subtitle, summary, children, links }) => {
  return (
    <div className="bg-surface text-text min-h-screen flex flex-col transition-colors duration-300">
      
      <main className="flex-grow pt-6 pb-12 px-4 sm:px-8 lg:px-24">
        {/* Title & Subtitle */}
        <section className="mb-8">
          <h1 className="text-4xl font-bold text-heading mb-2">{title}</h1>
          {subtitle && (
            <p className="text-lg text-text/80 max-w-3xl">{subtitle}</p>
          )}
        </section>

        {/* Summary */}
        {summary && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-heading mb-2">Summary</h2>
            <p className="text-base text-text/90 leading-relaxed max-w-4xl">
              {summary}
            </p>
          </section>
        )}

        {/* Main Content */}
        {children}

        {/* Links Section */}
        {links && links.length > 0 && (
          <section className="mt-12">
            <h2 className="text-2xl font-semibold text-heading mb-3">Relevant Links</h2>
            <ul className="list-disc pl-6 space-y-2 text-primary underline">
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.label || link.url}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </div>
  );
};

export default DetailsLayout;
