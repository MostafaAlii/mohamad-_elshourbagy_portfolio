// src/types/gallery.types.ts
export interface GalleryMedia {
    id: number;
    original: string;
}

export interface GalleryItem {
    id: number;
    title: string;
    description: string;
    is_active: boolean;
    media: GalleryMedia[];
}

export interface GallerySection {
    id: number;
    name: string;
    slug: string;
    is_active: boolean;
    sort_order: number;
    items: GalleryItem[];
}

export interface GalleryResponse {
    success: boolean;
    message: string;
    data: GallerySection[];
    pagination: {
        total: number;
        per_page: number;
        current_page: number;
        last_page: number;
        from: number;
        to: number;
    };
}

export type TabType = 'all' | string;
