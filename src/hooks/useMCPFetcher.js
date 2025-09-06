// src/hooks/useMCPFetcher.js
import { useState, useEffect, useCallback, useRef } from "react";

export default function useMCPFetcher() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);
  const controllerRef = useRef(null);

  const sendQuery = useCallback(async (prompt) => {
    if (!prompt) return;

    if (controllerRef.current) {
      controllerRef.current.abort(); // cancel any ongoing request
    }
    controllerRef.current = new AbortController();

    setLoading(true);
    setError("");
    setData(null);

    try {
      const res = await fetch(`https://portfolio-oxcr.onrender.com/mcp/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tool: "gemini",
          action: "chat",
          params: { prompt },
        }),
        signal: controllerRef.current.signal,
      });

      if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
      const result = await res.json();

      if (result.success && result.data) {
        // return only Gemini's reply for frontend chat
        setData(result.data.response);

        // optional: log planner decision + dbData for debugging
        console.log("Planner:", result.data.plannerDecision);
        console.log("DB Data:", result.data.dbData);
      } else {
        throw new Error(result.error || "Unexpected response from server");
      }
    } catch (err) {
      if (err.name !== "AbortError") {
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    return () => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }
    };
  }, []);

  return { data, loading, error, sendQuery };
}
