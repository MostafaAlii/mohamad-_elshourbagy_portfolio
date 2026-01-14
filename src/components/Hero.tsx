// src/components/Hero.tsx
import { useTypewriter } from '../hooks/useTypewriter';

const Hero = () => {
    const { displayText: titleText, isComplete: titleComplete } = useTypewriter({
        text: 'Dr Mohamad Elshourbagy',
        speed: 100,
        delay: 300,
        loop: false,
    });

    const { displayText: descText, isComplete: descComplete } = useTypewriter({
        text: "I'm Certified life & addiction recovery coach & certified positive discipline educator. Studied cognitive behaviour therapy diploma.",
        speed: 30,
        delay: 2500,
        loop: false,
    });

    return (
        <section
            id="home"
            className="relative flex items-center justify-center h-screen overflow-hidden -mt-16"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: "url('/bg/land.jpeg')",
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8 pt-16">
                <div className="max-w-4xl mx-auto">
                    {/* Title */}
                    <h1 className="mb-6 text-5xl font-bold text-navbar-text md:text-6xl lg:text-7xl">
                        {titleText}
                        {!titleComplete && <span className="animate-pulse">|</span>}
                    </h1>

                    {/* Description */}
                    <p className="text-xl leading-relaxed text-navbar-text md:text-2xl">
                        {descText}
                        {!descComplete && titleComplete && <span className="animate-pulse">|</span>}
                    </p>
                </div>
            </div>
        </section>
    );
};
export default Hero;
