// Types for API Response
export interface JourneyPoint {
  id: number;
  title: string;
  type: "service" | "certificate";
  status: "active" | "inactive";
  description?: string;
}

export interface Journey {
  id: number;
  title: string;
  type: "service" | "certificate";
  status: "active" | "inactive";
  description?: string;
  points: JourneyPoint[];
}

export interface PaginationLink {
  url: string | null;
  label: string;
  page: number | null;
  active: boolean;
}

export interface PaginationMeta {
  current_page: number;
  from: number;
  last_page: number;
  links: PaginationLink[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface JourneysData {
  data: Journey[];
  links: {
    first: string;
    last: string;
    prev: string | null;
    next: string | null;
  };
  meta: PaginationMeta;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export type JourneysResponse = ApiResponse<JourneysData>;
export type SingleJourneyResponse = ApiResponse<Journey>;
