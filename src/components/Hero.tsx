import { useTypewriter } from '../hooks/useTypewriter';
import { useHero } from '../hooks/useHero';

const Hero = () => {
    const { hero, loading, error } = useHero();
    const title = hero?.title || 'Dr Mohamad Elshourbagy';
    const description = hero?.description || "I'm Certified life & addiction recovery coach & certified positive discipline educator. Studied cognitive behaviour therapy diploma.";
    const backgroundImage = hero?.media && hero.media.length > 0
        ? hero.media[0].urls.original
        : '/bg/land.jpeg';

    const { displayText: titleText, isComplete: titleComplete } = useTypewriter({
        text: title,
        speed: 100,
        delay: 300,
        loop: false,
    });

    const { displayText: descText, isComplete: descComplete } = useTypewriter({
        text: description,
        speed: 30,
        delay: 2500,
        loop: false,
    });

    // Loading State
    if (loading) {
        return (
            <section
                id="home"
                className="relative flex items-center justify-center h-screen -mt-16 overflow-hidden"
            >
                <div className="absolute inset-0 bg-black/90"></div>
                <div className="relative z-10 flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 border-4 border-gray-300 rounded-full border-t-white animate-spin"></div>
                    <p className="text-lg text-white">Loading...</p>
                </div>
            </section>
        );
    }
    if (error) {
        console.error('Hero error:', error);
    }

    return (
        <section
            id="home"
            className="relative flex items-center justify-center h-screen -mt-16 overflow-hidden"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage: `url('${backgroundImage}')`,
                }}
            >
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/70"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 px-4 pt-16 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
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
