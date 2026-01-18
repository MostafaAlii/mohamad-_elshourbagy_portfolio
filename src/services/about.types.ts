// Types for About API Response

export interface AboutMedia {
  id: number;
  file_name: string;
  urls: {
    original: string;
  };
}

export interface AboutChild {
  id: number;
  title: string;
  status: 'active' | 'inactive';
  parent_id: number;
  children: AboutChild[];
}

export interface About {
  id: number;
  title: string;
  status: 'active' | 'inactive';
  parent_id: number | null;
  media: AboutMedia[];
  children: AboutChild[];
}

export interface AboutApiResponse {
  success: boolean;
  message: string;
  data: About[];
}
