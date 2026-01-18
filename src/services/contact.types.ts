// Types for Contact Messages API

export interface ContactMessageData {
  name: string;
  email: string;
  message: string;
}

export interface ContactMessageResponse {
  success: boolean;
  message: string;
  data?: any;
}
