import apiClient from "./api.config";
import type { JourneysResponse, Journey } from "./journeys.types";

// Helper type for simple responses
interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/**
 * Journeys API Service
 */
const journeysAPI = {
  /**
   * Get all journeys (services and certificates)
   */
  getAll: async (): Promise<JourneysResponse> => {
    try {
      const response = await apiClient.get<JourneysResponse>("/journeys?status=active");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get active journeys only
   */
  getActive: async (): Promise<ApiResponse<Journey[]>> => {
    try {
      const response = await apiClient.get<ApiResponse<Journey[]>>(
        "/journeys?status=active"
      );
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default journeysAPI;
