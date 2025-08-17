// src/hooks/useFetcher.js
import { useEffect, useState } from 'react';

export default function useFetcher(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`https://portfolio-oxcr.onrender.com/${endpoint}`, {
          signal: controller.signal,
        });
        if (!res.ok) throw new Error('Failed to fetch data');
        const result = await res.json();
        setData(result);
        setError('');
      } catch (err) {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setData(null);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort();
  }, [endpoint]);

  return { data, loading, error };
}
