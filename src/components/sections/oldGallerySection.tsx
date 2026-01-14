// src/components/Gallery.tsx
import { useState } from 'react';

type TabType = 'all' | 'courses' | 'camps' | 'feedback';

interface GalleryItem {
    id: number;
    category: 'courses' | 'camps' | 'feedback';
    image: string;
    title: string;
}

export default function GallerySection() {
    const [activeTab, setActiveTab] = useState<TabType>('all');
    const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

    const tabs: { id: TabType; label: string }[] = [
        { id: 'all', label: 'All' },
        { id: 'courses', label: 'Courses' },
        { id: 'camps', label: 'Camps' },
        { id: 'feedback', label: 'Feedback' },
    ];

    // البيانات - غير الصور حسب صورك
    const galleryItems: GalleryItem[] = [
        // Courses
        { id: 1, category: 'courses', image: '/gallery/courses/1.jpeg', title: 'Course Session 1' },
        { id: 2, category: 'courses', image: '/gallery/courses/2.jpeg', title: 'Course Session 2' },
        { id: 3, category: 'courses', image: '/gallery/courses/3.jpeg', title: 'Course Session 3' },

        // Camps
        { id: 4, category: 'camps', image: '/gallery/camps/1.jpeg', title: 'Summer Camp 2024' },
        { id: 5, category: 'camps', image: '/gallery/camps/2.jpeg', title: 'Winter Camp 2024' },
        { id: 6, category: 'camps', image: '/gallery/camps/3.jpeg', title: 'Adventure Camp' },
        { id: 7, category: 'camps', image: '/gallery/camps/4.jpeg', title: 'Training Camp' },

        // Feedback
        { id: 8, category: 'feedback', image: '/gallery/feedback/1.jpeg', title: 'Client Testimonial 1' },
        { id: 9, category: 'feedback', image: '/gallery/feedback/2.jpeg', title: 'Client Testimonial 2' },
        { id: 10, category: 'feedback', image: '/gallery/feedback/3.jpeg', title: 'Client Testimonial 3' },
        { id: 11, category: 'feedback', image: '/gallery/feedback/4.jpeg', title: 'Client Testimonial 4' },
    ];

    // فلترة الصور حسب الـ Tab
    const getFilteredItems = () => {
        if (activeTab === 'all') {
            // من كل قسم صورتين
            const courses = galleryItems.filter(item => item.category === 'courses').slice(0, 2);
            const camps = galleryItems.filter(item => item.category === 'camps').slice(0, 2);
            const feedback = galleryItems.filter(item => item.category === 'feedback').slice(0, 2);
            return [...courses, ...camps, ...feedback];
        }
        // إرجاع الصور المفلترة حسب الفئة
        return galleryItems.filter(item => item.category === activeTab);
    };

    const displayedItems = getFilteredItems();

    // Close modal
    const closeModal = () => setSelectedImage(null);

    return (
        <>
            <section id="gallery" className="py-10 bg-gallery-bg md:py-14">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="mb-6 text-center md:mb-8">
                        <h2 className="text-2xl font-bold tracking-wider md:text-3xl text-gallery-title">
                            Gallery.
                        </h2>

                        {/* Tabs */}
                        <div className="flex justify-center mt-6 space-x-6">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative px-2 py-1 font-medium transition-colors duration-200 ${activeTab === tab.id
                                        ? 'text-gallery-title'
                                        : 'text-gallery-subtitle hover:text-gallery-title'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <span className="absolute left-0 w-full h-0.5 -bottom-1 bg-gallery-title"></span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Gallery Grid */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {displayedItems.map((item) => (
                            <div
                                key={item.id}
                                className="relative overflow-hidden transition-transform duration-300 rounded-lg shadow-lg cursor-pointer group hover:scale-105"
                                onClick={() => setSelectedImage(item)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-64"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
                                    {/* Zoom Icon */}
                                    <div className="mb-3">
                                        <svg
                                            className="w-12 h-12 text-white"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                                            />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-semibold text-white">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-200">
                                        Click to view
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* No items message */}
                    {displayedItems.length === 0 && (
                        <div className="py-20 text-center">
                            <p className="text-xl text-gallery-subtitle">
                                No items to display
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90"
                    onClick={closeModal}
                >
                    <div className="relative max-w-5xl max-h-screen">
                        {/* Close Button */}
                        <button
                            onClick={closeModal}
                            className="absolute z-10 p-2 text-white transition-colors bg-black rounded-full -top-12 -right-2 hover:bg-gray-800"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>

                        {/* Image */}
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="object-contain w-full h-auto max-h-screen rounded-lg"
                            onClick={(e) => e.stopPropagation()}
                        />

                        {/* Image Info */}
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-center bg-gradient-to-t from-black/80 to-transparent">
                            <p className="text-xl font-semibold text-white">
                                {selectedImage.title}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
