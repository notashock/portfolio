export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-heading-light dark:text-heading-dark">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-base sm:text-lg text-text-light dark:text-text-dark opacity-70">
          {subtitle}
        </p>
      )}
    </div>
  );
}
