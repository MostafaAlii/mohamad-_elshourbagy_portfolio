// src/components/Gallery.tsx
import { useState, useEffect } from 'react';
import { useGallery } from '../../hooks/useGallery';

export default function GallerySection() {
    const { loading, error, getTabs, getFilteredItems } = useGallery();
    const [activeTab, setActiveTab] = useState<string>('all');
    const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

    const tabs = getTabs();
    const displayedItems = getFilteredItems(activeTab);

    const goToNext = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex((selectedImageIndex + 1) % displayedItems.length);
        }
    };

    const goToPrevious = () => {
        if (selectedImageIndex !== null) {
            setSelectedImageIndex(
                selectedImageIndex === 0 ? displayedItems.length - 1 : selectedImageIndex - 1
            );
        }
    };

    const closeModal = () => setSelectedImageIndex(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyPress = (e: KeyboardEvent) => {
            if (selectedImageIndex === null) return;

            if (e.key === 'ArrowRight') goToNext();
            if (e.key === 'ArrowLeft') goToPrevious();
            if (e.key === 'Escape') closeModal();
        };

        window.addEventListener('keydown', handleKeyPress);
        return () => window.removeEventListener('keydown', handleKeyPress);
    }, [selectedImageIndex, displayedItems.length]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedImageIndex !== null) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [selectedImageIndex]);

    const selectedImage = selectedImageIndex !== null ? displayedItems[selectedImageIndex] : null;

    // Loading state
    if (loading) {
        return (
            <section id="gallery" className="py-10 bg-gallery-bg md:py-14">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="py-20 text-center">
                        <p className="text-xl text-gallery-subtitle">Loading gallery...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Error state
    if (error) {
        return (
            <section id="gallery" className="py-10 bg-gallery-bg md:py-14">
                <div className="max-w-6xl px-4 mx-auto">
                    <div className="py-20 text-center">
                        <p className="text-xl text-red-500">{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <>
            {/* Add animations to global styles */}
            <style>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }

                @keyframes scaleIn {
                    from {
                        opacity: 0;
                        transform: scale(0.9);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }

                .animate-fadeIn {
                    animation: fadeIn 0.3s ease-out;
                }

                .animate-scaleIn {
                    animation: scaleIn 0.3s ease-out;
                }
            `}</style>

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
                        {displayedItems.map((item, index) => (
                            <div
                                key={item.id}
                                className="relative overflow-hidden transition-transform duration-300 rounded-lg shadow-lg cursor-pointer group hover:scale-105"
                                onMouseEnter={() => setSelectedImageIndex(index)}
                                onClick={() => setSelectedImageIndex(index)}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="object-cover w-full h-64 transition-transform duration-500 group-hover:scale-110"
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

            {/* Fullscreen Image Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fadeIn"
                    onClick={closeModal}
                >
                    {/* Close Button */}
                    <button
                        onClick={closeModal}
                        className="absolute z-20 p-3 text-white transition-all duration-200 rounded-full bg-white/10 backdrop-blur-md top-6 right-6 hover:bg-white/20 hover:scale-110 hover:rotate-90"
                        aria-label="Close"
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

                    {/* Previous Arrow */}
                    {displayedItems.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToPrevious();
                            }}
                            className="absolute z-20 p-4 text-white transition-all duration-200 rounded-full bg-white/10 backdrop-blur-md left-6 hover:bg-white/20 hover:scale-110"
                            aria-label="Previous image"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 19l-7-7 7-7"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Next Arrow */}
                    {displayedItems.length > 1 && (
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                goToNext();
                            }}
                            className="absolute z-20 p-4 text-white transition-all duration-200 rounded-full bg-white/10 backdrop-blur-md right-6 hover:bg-white/20 hover:scale-110"
                            aria-label="Next image"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M9 5l7 7-7 7"
                                />
                            </svg>
                        </button>
                    )}

                    {/* Image Container */}
                    <div
                        className="relative flex items-center justify-center w-full h-full p-4 md:p-12"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.image}
                            alt={selectedImage.title}
                            className="object-contain w-full h-full max-w-7xl max-h-[90vh] rounded-lg shadow-2xl animate-scaleIn"
                        />

                        {/* Image Counter & Title */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-center rounded-b-lg bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                            {displayedItems.length > 1 && (
                                <p className="mb-2 text-sm font-medium text-gray-300">
                                    {selectedImageIndex + 1} / {displayedItems.length}
                                </p>
                            )}
                            <p className="text-xl font-semibold text-white md:text-2xl">
                                {selectedImage.title}
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
