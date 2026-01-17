import apiClient from "./api.config";
import type { HeroApiResponse } from "./hero.types";

/**
 * Hero API Service
 */
const heroAPI = {
  /**
   * Get all heroes
   */
  getAll: async (): Promise<HeroApiResponse> => {
    try {
      const response = await apiClient.get<HeroApiResponse>("/hero");
      return response.data;
    } catch (error) {
      throw error;
    }
  },

  /**
   * Get active hero only (usually the first active one)
   */
  getActive: async (): Promise<HeroApiResponse> => {
    try {
      const response = await apiClient.get<HeroApiResponse>("/hero");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default heroAPI;
