import useFetcher from "../hooks/useFetcher";

export default function Certifications() {
  const { data: certifications, error, loading } = useFetcher("certifications");
  if(loading)
    return (
      <p className="text-center text-text-light dark:text-text-dark text-lg py-16">
        Loading certifications...
      </p>
    );
    if(error || !certifications)
    return (
      <p className="text-center text-red-500 text-lg py-16">
        {error || "Failed to load certifications"}
      </p>
    );
  return (
    <div className="p-6 mt-16">
      <h1 className="text-3xl font-bold text-heading-light dark:text-heading-dark mb-6">
        Certifications
      </h1>

      {certifications.length === 0 ? (
        <p className="text-text-light dark:text-text-dark">No certifications yet.</p>
      ) : (
        <ul className="space-y-4">
          {certifications.map((cert) => (
            <li
              key={cert._id}
              className="p-4 rounded-lg border border-primary-light/20 dark:border-primary-dark/20
                         bg-surface-light dark:bg-surface-dark shadow-sm hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-primary-light dark:text-primary-dark">
                {cert.title}
              </h2>
              <p className="text-text-light dark:text-text-dark">Issued By{cert.issuer}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Issued Date{cert.date}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Expiry Date{cert.expiry}
              </p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-light dark:text-accent-dark hover:underline"
                >
                  View Certificate
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
