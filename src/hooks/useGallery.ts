// src/hooks/useGallery.ts
import { useState, useEffect } from 'react';
import { galleryService } from '../services/gallery.service';
import type { GallerySection } from '../types/gallery.types';

interface TransformedItem {
    id: number;
    category: string;
    image: string;
    title: string;
    description: string;
}

export const useGallery = () => {
    const [sections, setSections] = useState<GallerySection[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchSections();
    }, []);

    const fetchSections = async () => {
        try {
            setLoading(true);
            const response = await galleryService.getSections();
            setSections(response.data);
        } catch (err) {
            setError('Failed to load gallery');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const transformToGalleryItems = (): TransformedItem[] => {
        const items: TransformedItem[] = [];

        sections.forEach(section => {
            section.items.forEach(item => {
                if (item.media && item.media.length > 0) {
                    items.push({
                        id: item.id,
                        category: section.slug,
                        image: item.media[0].original,
                        title: item.title,
                        description: item.description
                    });
                }
            });
        });

        return items;
    };

    const getTabs = () => {
        return [
            { id: 'all', label: 'All' },
            ...sections.map(section => ({
                id: section.slug,
                label: section.name
            }))
        ];
    };

    const getFilteredItems = (activeTab: string): TransformedItem[] => {
        const allItems = transformToGalleryItems();

        if (activeTab === 'all') {
            const itemsByCategory: { [key: string]: TransformedItem[] } = {};

            sections.forEach(section => {
                itemsByCategory[section.slug] = allItems
                    .filter(item => item.category === section.slug)
                    .slice(0, 2);
            });

            return Object.values(itemsByCategory).flat();
        }

        return allItems.filter(item => item.category === activeTab);
    };

    return {
        sections,
        loading,
        error,
        getTabs,
        getFilteredItems,
        refetch: fetchSections
    };
};
