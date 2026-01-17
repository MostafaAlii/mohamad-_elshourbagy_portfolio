import { useState, useEffect } from "react";
import settingsAPI from "../services/settings.api";
import type { Settings } from "../services/settings.types";

interface UseSettingsReturn {
  settings: Settings | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom Hook لجلب الـ Main Settings
 */
export const useSettings = (): UseSettingsReturn => {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await settingsAPI.getSettings();

      if (response.success && response.data) {
        setSettings(response.data);
      }
    } catch (err) {
      console.error("Error fetching settings:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch settings");
    } finally {
      setLoading(false);
    }
  };

  return { settings, loading, error, refetch: fetchSettings };
};
