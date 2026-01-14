import { useState } from 'react';
import LetsTalkSection from "../components/sections/LetsTalkSection";
export default function Certifications() {
    const images = [
        "/reviews/1.jpeg",
        "/reviews/2.jpeg",
        "/reviews/3.jpeg",
        "/reviews/4.jpeg",
        "/reviews/5.jpeg"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };
    return (
        <div className="min-h-screen bg-white">
            {/* Info Section */}
            <section className="pt-60 pb-20">
                <div className="max-w-4xl px-6 mx-auto">
                    {/* Title */}
                    <h1 className="mb-16 text-4xl font-bold tracking-wider">
                        CERTIFICATIONS.
                    </h1>
                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Left Column */}
                        <div className="space-y-6 text-gray-700 leading-relaxed">
                            <p>
                                I'm a paragraph. Click here to add your own text and edit me. It's easy. Just click "Edit Text" or double click me to add your own content and make changes to the font.
                            </p>
                            <p>
                                Feel free to drag and drop me anywhere you like on your page. I'm a great place for you to tell a story and let your users know a little more about you.
                            </p>
                        </div>
                        {/* Right Column - Bullet Points */}
                        <div className="space-y-4 text-gray-700">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    <span>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    <span>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="mr-3 mt-1">•</span>
                                    <span>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Images Section */}
            <section>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Left Image */}
                    <div className="w-full h-[500px] overflow-hidden">
                        <img 
                            src="/meeting/1.jpeg" 
                            alt="Certification 1"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    {/* Right Image */}
                    <div className="w-full h-[500px] overflow-hidden">
                        <img 
                            src="/meeting/2.jpeg" 
                            alt="Certification 2"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            {/* Image Slider Section */}
            <section className="bg-blue-600 py-20">
                <div className="max-w-3xl mx-auto">
                    <div className="bg-white relative h-[300px] flex items-center justify-center">
                        {/* Left Arrow */}
                        <button 
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-4xl z-10"
                        >
                            ‹
                        </button>
                        
                        {/* Image Display */}
                        <div className="w-full h-full flex items-center justify-center">
                            <img 
                                src={images[currentIndex]}
                                alt={`Review ${currentIndex + 1}`}
                                className="max-w-full max-h-full object-contain"
                            />
                        </div>
                        
                        {/* Right Arrow */}
                        <button 
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 text-4xl z-10"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </section>
            <LetsTalkSection />
        </div>
    );
}