import { useState, useEffect } from "react";
import journeysAPI from "../services/journeys.api";
import type { Journey } from "../services/journeys.types";

interface UseJourneysByTypeReturn {
  services: Journey | null;
  certificates: Journey | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

/**
 * Custom Hook لجلب Services و Certificates منفصلين
 */
export const useJourneysByType = (): UseJourneysByTypeReturn => {
  const [services, setServices] = useState<Journey | null>(null);
  const [certificates, setCertificates] = useState<Journey | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchJourneysByType();
  }, []);

  const fetchJourneysByType = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await journeysAPI.getAll();

      if (response.success && response.data) {
        const journeysData = response.data.data || [];

        // فصل الـ services عن الـ certificates
        const servicesItem = journeysData.find(
          (item) => item.type === "service"
        );
        const certificatesItem = journeysData.find(
          (item) => item.type === "certificate"
        );

        setServices(servicesItem || null);
        setCertificates(certificatesItem || null);
      }
    } catch (err) {
      console.error("Error fetching journeys by type:", err);
      setError(err instanceof Error ? err.message : "Failed to fetch journeys");
    } finally {
      setLoading(false);
    }
  };

  return {
    services,
    certificates,
    loading,
    error,
    refetch: fetchJourneysByType,
  };
};
