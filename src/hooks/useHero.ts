import { useState, useEffect } from "react";
import heroAPI from "../services/hero.api";
import type { Hero } from "../services/hero.types";

interface UseHeroReturn {
  hero: Hero | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom Hook لجلب الـ Hero الأول (Active)
 */
export const useHero = (): UseHeroReturn => {
  const [hero, setHero] = useState<Hero | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchHero();
  }, []);

  const fetchHero = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await heroAPI.getAll();

      if (response.success && response.data && response.data.length > 0) {
        // أخذ أول hero (أو أول hero active)
        const activeHero = response.data.find(h => h.status === 'active') || response.data[0];
        setHero(activeHero);
      }
    } catch (err) {
      console.error("Error fetching hero:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch hero");
    } finally {
      setLoading(false);
    }
  };

  return { hero, loading, error, refetch: fetchHero };
};
