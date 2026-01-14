export default function SeparatedSection() {
    return (
        <section
            id="contact"
            className="relative flex items-center justify-center min-h-[80vh]"
        >
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-center bg-cover"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1600)",
                }}
            />

            {/* White Overlay */}
            <div className="absolute inset-0 bg-white/80" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-4xl px-8">
                <p className="text-3xl font-bold leading-snug text-center text-gray-800 md:text-4xl">
                    “If we did all the things we are <br />
                    capable of, we would literally <br />
                    astound ourselves.”
                </p>

                <div className="mt-6 text-right">
                    <span className="text-sm text-gray-500">
                        — Thomas Edison
                    </span>
                </div>
            </div>

        </section>
    );
}
