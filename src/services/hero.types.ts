// Types for Hero API Response

export interface HeroMedia {
  id: number;
  file_name: string;
  urls: {
    original: string;
  };
}

export interface Hero {
  id: number;
  title: string;
  description: string;
  status: 'active' | 'inactive';
  media: HeroMedia[];
}

export interface HeroApiResponse {
  success: boolean;
  message: string;
  data: Hero[];
}
