import DotPattern from '../ui/decorative/DotPattern/DotPattern';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useInView } from '../../hooks/useInView';
const AboutUs = () => {
    const { ref, isInView } = useInView({ threshold: 0.3, triggerOnce: true });
    const { displayText } = useTypewriter({
        text: isInView ? 'Dr Mohamad Elshourbagy' : '',
        speed: 100,
        delay: 500,
        loop: false,
        deleteSpeed: 50,
        pauseTime: 2000
    });
    return (
        <section id="about" ref={ref} className="relative flex items-center min-h-screen overflow-hidden bg-about-bg">
            <div className="w-full px-4 mx-auto max-w-6xl sm:px-6 lg:px-8">
                <div className="grid items-center gap-4 lg:grid-cols-5 lg:gap-6">

                    {/* Image Side */}
                    <div className="relative flex justify-center lg:col-span-2 lg:justify-start">
                        {/* Container for dots */}
                        <div className="relative w-full max-w-md">
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
                                I am <span className="font-semibold">{displayText || '\u00A0'}</span>.
                                Certified Life & Addiction Recovery Coach (ICF) with a diploma in Cognitive Behaviour Therapy (CBT) and certification in Positive Discipline.
                                With over 9,000 hours of coaching experience and a background of 10+ years in pharmacy, I provide structured, science-based support — not just emotional guidance.
                            </p>
                            <p className="leading-relaxed">
                                I work with relationships, youth & adolescents, addiction recovery, and support cancer survivors and people living with chronic illness, helping them heal, grow, and reclaim their strength.
                                <br />
                                We conducted a course for youth and adolescents called "5S", consisting of 6 rounds
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
