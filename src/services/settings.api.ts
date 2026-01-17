import apiClient from "./api.config";
import type { SettingsApiResponse } from "./settings.types";

/**
 * Settings API Service
 */
const settingsAPI = {
  /**
   * Get main settings
   */
  getSettings: async (): Promise<SettingsApiResponse> => {
    try {
      const response = await apiClient.get<SettingsApiResponse>("/main-settings");
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default settingsAPI;
