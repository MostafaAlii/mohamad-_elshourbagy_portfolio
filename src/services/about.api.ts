import apiClient from "./api.config";
import type { AboutApiResponse } from "./about.types";

/**
 * About API Service
 */
const aboutAPI = {
  /**
   * Get about data
   */
  getAbout: async (): Promise<AboutApiResponse> => {
    try {
      const response = await apiClient.get<AboutApiResponse>("/about");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default aboutAPI;
