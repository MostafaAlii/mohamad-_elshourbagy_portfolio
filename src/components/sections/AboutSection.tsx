import DotPattern from '../ui/decorative/DotPattern/DotPattern';

const AboutUs = () => {
    return (
        <section id="about" className="relative flex items-center min-h-screen overflow-hidden bg-about-bg">
            <div className="w-full px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                <div className="grid items-center gap-4 lg:grid-cols-5 lg:gap-6">

                    {/* Image Side */}
                    <div className="relative flex justify-center lg:col-span-2 lg:justify-start">
                        {/* Container for dots */}
                        <div className="relative w-full max-w-md">
                            {/*<div className="absolute -bottom-4 -left-4 opacity-5 z-0">
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
                            </div>*/}
                            <DotPattern
                                variant="staircase"
                                color="bg-about-title"
                                opacity="opacity-5"
                                vertical="bottom"
                                horizontal="left"
                                offset={4}
                                lines={45}
                                className="z-0"
                            />

                            {/* Image Container */}
                            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl max-h-[400px]">
                                <img
                                    src="/about-me.jpeg"
                                    alt="Dr Mohamad Elshourbagy"
                                    className="object-cover w-full h-full"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 lg:col-span-3">
                        {/* Title */}
                        <div>
                            <h2 className="text-4xl font-bold md:text-5xl text-about-title">
                                About Me.
                            </h2>
                            <p className="mt-2 text-lg text-about-subtitle">
                                Certified life & addiction recovery coach
                            </p>
                        </div>

                        {/* Description */}
                        <div className="space-y-4 text-about-text">
                            <p className="leading-relaxed">
                                I am <span className="font-semibold">Dr Mohamad Elshourbagy</span>.
                                I'm a Certified life & addiction recovery coach and certified positive
                                discipline educator. I have studied cognitive behaviour therapy diploma
                                and dedicated my career to helping individuals achieve personal growth
                                and overcome life's challenges.
                            </p>
                            <p className="leading-relaxed">
                                With years of experience in coaching and therapy, I've helped numerous
                                clients transform their lives through evidence-based practices and
                                compassionate guidance. My approach combines professional expertise
                                with genuine care for each person's unique journey.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUs;
