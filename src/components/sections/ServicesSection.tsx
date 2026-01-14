import DotPattern from '../ui/decorative/DotPattern/DotPattern';

export default function ServicesSection() {
    return (
        <section
            id="services"
            className="relative flex items-center justify-center min-h-[80vh] bg-service-bg py-3"
        >
            <div className="relative w-full max-w-6xl px-4 pt-12 pb-20">

                {/* Title Container */}
                <div className="relative mb-12">
                    <h2 className="text-3xl font-bold tracking-[0.3em] text-center">
                        SERVICES.
                    </h2>
                    {/* Horizontal dots line */}
                    <div className="w-full overflow-hidden">
                        <div className="flex justify-center gap-0.5">
                            {Array.from({ length: 38 }).map((_, i) => (
                                <div
                                    key={i}
                                    className="w-1 h-1 rounded-full bg-about-title opacity-5"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 gap-24 md:grid-cols-2">
                    {/* Service 1 */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="block w-8 h-px bg-black" />
                            <h3 className="text-lg font-medium">
                                One on one.
                            </h3>
                        </div>

                        <p className="mb-6 text-gray-600 leading-relaxed">
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your
                            own content and make changes to the font. I’m a great place for
                            you to tell a story and let your users know a little more about you.
                        </p>

                        <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                            <li>Click here to add your own text and edit me.</li>
                            <li>Click here to add your own text and edit me.</li>
                            <li>Click here to add your own text and edit me.</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div>
                        <div className="flex items-center gap-4 mb-6">
                            <span className="block w-8 h-px bg-black" />
                            <h3 className="text-lg font-medium">
                                Workshops.
                            </h3>
                        </div>

                        <p className="mb-6 text-gray-600 leading-relaxed">
                            I'm a paragraph. Click here to add your own text and edit me.
                            It’s easy. Just click “Edit Text” or double click me to add your
                            own content and make changes to the font. I’m a great place for
                            you to tell a story and let your users know a little more about you.
                        </p>

                        <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                            <li>Click here to add your own text and edit me.</li>
                            <li>Click here to add your own text and edit me.</li>
                            <li>Click here to add your own text and edit me.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
