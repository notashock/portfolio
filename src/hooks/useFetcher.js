// src/hooks/useFetcher.js
import { useEffect, useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function useFetcher(endpoint, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!endpoint) return;

    const controller = new AbortController();
    const url = `${BASE_URL}/${endpoint.replace(/^\/+/, "")}`; // cleans leading slashes

    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          signal: controller.signal,
          headers: {
            "Content-Type": "application/json",
            ...options.headers,
          },
          ...options,
        });

        if (!res.ok) {
          const text = await res.text();
          throw new Error(`Fetch failed: ${res.status} - ${text}`);
        }

        const result = await res.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          console.error("Fetcher error:", err);
          setError(err.message || "Something went wrong");
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
