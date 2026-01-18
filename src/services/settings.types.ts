// Types for Main Settings API Response

export interface SettingsLogo {
  id: number;
  file_name: string;
  urls: {
    original: string;
  };
}

export interface Settings {
  id: number;
  name: string;
  phone: string;
  address: string;
  email: string;
  logo: SettingsLogo;
}

export interface SettingsApiResponse {
  success: boolean;
  message: string;
  data: Settings;
}
