import { useInView } from '../../hooks/useInView';
import { useAbout } from '../../hooks/useAbout';
import { useState, useEffect } from 'react';

const AboutUs = () => {
    const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });
    const { about, loading, error } = useAbout();

    const subtitle = about?.title || 'Certified life & addiction recovery coach';
    const image = about?.media && about.media.length > 0
        ? about.media[0].urls.original
        : '/about-me.jpeg';

    const firstChild = about?.children && about.children.length > 0
        ? about.children[0].title
        : 'I am Dr Mohamad Elshourbagy';

    const otherChildren = about?.children && about.children.length > 1
        ? about.children.slice(1)
        : [
            {
                id: 1,
                title: 'Certified Life & Addiction Recovery Coach (ICF) with a diploma in Cognitive Behaviour Therapy (CBT) and certification in Positive Discipline. With over 9,000 hours of coaching experience and a background of 10+ years in pharmacy, I provide structured, science-based support — not just emotional guidance.',
                status: 'active' as const,
                parent_id: 1,
                children: []
            },
            {
                id: 2,
                title: 'I work with relationships, youth & adolescents, addiction recovery, and support cancer survivors and people living with chronic illness, helping them heal, grow, and reclaim their strength.\nWe conducted a course for youth and adolescents called "5S", consisting of 6 rounds',
                status: 'active' as const,
                parent_id: 1,
                children: []
            }
        ];

    // ✅ Typewriter Effect
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);
    const [started, setStarted] = useState(false);

    useEffect(() => {
        if (!loading && !started && firstChild) {
            setStarted(true);
        }
    }, [loading, started, firstChild]);

    useEffect(() => {
        if (!started || !firstChild) {
            return;
        }

        if (currentIndex < firstChild.length) {
            const timeout = setTimeout(() => {
                setDisplayText(firstChild.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 100);

            return () => clearTimeout(timeout);
        }
    }, [started, currentIndex, firstChild]);

    // Loading State
    if (loading) {
        return (
            <section id="about" className="relative flex items-center min-h-screen overflow-hidden bg-about-bg">
                <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center min-h-[400px]">
                        <div className="w-12 h-12 mb-4 border-4 border-gray-300 rounded-full border-t-gray-800 animate-spin"></div>
                        <p className="text-gray-600">Loading...</p>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        console.error('About error:', error);
    }

    return (
        <section id="about" ref={ref} className="relative flex items-center min-h-screen overflow-hidden bg-about-bg">
            <div className="w-full max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid items-center gap-4 lg:grid-cols-5 lg:gap-6">
                    {/* Image Side */}
                    <div className="relative flex justify-center lg:col-span-2 lg:justify-start">
                        <div className="relative w-full max-w-md">
                            <div className="absolute z-0 -bottom-4 -left-4 opacity-5">
                                {Array.from({ length: 45 }).map((_, lineIndex) => {
                                    const dotsCount = lineIndex + 1;
                                    return (
                                        <div key={lineIndex} className="flex gap-0.5 mb-0.5">
                                            {Array.from({ length: dotsCount }).map((_, dotIndex) => (
                                                <div
                                                    key={dotIndex}
                                                    className="w-1.5 h-1.5 rounded-full bg-about-title"
                                                />
                                            ))}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl max-h-[400px]">
                                <img
                                    src={image}
                                    alt={firstChild}
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 lg:col-span-3">
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-about-title">
                                About Me.
                            </h2>
                            <p className="mt-2 text-lg text-about-subtitle">
                                {subtitle}
                            </p>
                        </div>

                        <div className="text-about-text">
                            <p className="mb-4 leading-relaxed">
                                <span className="font-semibold">
                                    {displayText || firstChild}
                                </span>
                                {' '}
                                {otherChildren.length > 0 && otherChildren[0].title}
                            </p>

                            {otherChildren.slice(1).map((child) => (
                                <p key={child.id} className="mb-4 leading-relaxed">
                                    {child.title.split('\n').map((line, index) => (
                                        <span key={index}>
                                            {line}
                                            {index < child.title.split('\n').length - 1 && <br />}
                                        </span>
                                    ))}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
