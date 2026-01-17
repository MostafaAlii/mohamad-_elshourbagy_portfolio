import { useState, useEffect } from "react";
import aboutAPI from "../services/about.api";
import type { About } from "../services/about.types";
interface UseAboutReturn {
  about: About | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useAbout = (): UseAboutReturn => {
  const [about, setAbout] = useState<About | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAbout();
  }, []);

  const fetchAbout = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await aboutAPI.getAbout();

      if (response.success && response.data && response.data.length > 0) {
        const parentAbout = response.data.find(item => item.parent_id === null) || response.data[0];
        setAbout(parentAbout);
      }
    } catch (err) {
      console.error("Error fetching about:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch about");
    } finally {
      setLoading(false);
    }
  };

  return { about, loading, error, refetch: fetchAbout };
};
