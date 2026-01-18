import apiClient from "./api.config";
import type { ContactMessageData, ContactMessageResponse } from "./contact.types";

/**
 * Contact Messages API Service
 */
const contactAPI = {
  /**
   * Send contact message
   */
  sendMessage: async (data: ContactMessageData): Promise<ContactMessageResponse> => {
    try {
      const response = await apiClient.post<ContactMessageResponse>("/contact-messages/create", data);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default contactAPI;
