import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DetailsLayout from '../layout/DetailsLayout';

function Details() {
  const { type, id } = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!type || !id) {
      setError('Invalid route parameters');
      setLoading(false);
      return;
    }

    const controller = new AbortController();

    const fetchDetails = async () => {
      try {
        setLoading(true);
        const res = await fetch(`http://localhost:5000/api/${type}/${id}`, {
          signal: controller.signal,
        });

        if (!res.ok) throw new Error(`Failed to fetch ${type} data`);

        const result = await res.json();
        setData(result);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message || 'Something went wrong');
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();

    return () => controller.abort();
  }, [id, type]); // ✅ Corrected dependency array

  if (loading) {
    return (
      <div className="text-center py-16 text-lg text-text-light dark:text-text-dark">
        Loading...
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="text-center py-16 text-red-500 text-xl">
        {error || 'Invalid ID or Type'}
      </div>
    );
  }

  return (
    <DetailsLayout
      title={data.title}
      subtitle={data.subtitle}
      summary={data.summary}
      links={data.links}
    >
      <div className="space-y-4 text-base leading-relaxed text-text-light dark:text-text-dark">
        {data.description?.map((para, index) => (
          <p key={index}>{para}</p>
        ))}
        {data.source && (
          <p>
            <strong>Source:</strong> {data.source}
          </p>
        )}
        {data.confidence && (
          <p>
            <strong>Confidence:</strong> {data.confidence}
          </p>
        )}
      </div>
    </DetailsLayout>
  );
}

export default Details;
