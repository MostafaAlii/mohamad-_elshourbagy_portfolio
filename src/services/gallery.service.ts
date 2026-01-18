// src/services/gallery.service.ts
import axios from 'axios';
import type { GalleryResponse } from '../types/gallery.types';

const API_URL = 'http://127.0.0.1:8000/api/v1';

export const galleryService = {
    getSections: async (): Promise<GalleryResponse> => {
        const response = await axios.get(`${API_URL}/gallery-sections`);
        return response.data;
    }
};
