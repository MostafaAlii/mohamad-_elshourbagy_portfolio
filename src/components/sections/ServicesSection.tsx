import { useJourneysByType } from "../../hooks/useJourneys";

export default function ServicesSection() {
    const { services, certificates, loading, error } = useJourneysByType();

    // Loading State
    if (loading) {
        return (
            <section
                id="services"
                className="relative flex items-center justify-center min-h-[55vh] bg-service-bg py-3"
            >
                <div className="relative w-full max-w-6xl px-4 pt-12 pb-20">
                    <div className="flex flex-col items-center justify-center min-h-[200px]">
                        <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin mb-4"></div>
                        <p className="text-gray-600">Loading...</p>
                    </div>
                </div>
            </section>
        );
    }

    // Error State
    if (error) {
        return (
            <section
                id="services"
                className="relative flex items-center justify-center min-h-[55vh] bg-service-bg py-3"
            >
                <div className="relative w-full max-w-6xl px-4 pt-12 pb-20">
                    <div className="flex flex-col items-center justify-center min-h-[200px]">
                        <p className="text-red-600 mb-4">❌ {error}</p>
                        <button
                            onClick={() => window.location.reload()}
                            className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
                        >
                            Retry
                        </button>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section
            id="services"
            className="relative flex items-center justify-center min-h-[55vh] bg-service-bg py-3"
        >
            <div className="relative w-full max-w-6xl px-4 pt-12 pb-20">
                {/* Title Container */}
                <div className="relative mb-12">
                    <h2 className="text-3xl font-bold tracking-[0.3em] text-center">
                        Coaching Journeys.
                    </h2>
                    {/* Horizontal dots line */}
                    <div className="w-full overflow-hidden">
                        <div className="flex justify-center gap-0.5">
                            {Array.from({ length: 70 }).map((_, i) => (
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
                    {/* Services */}
                    {services && (
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="block w-8 h-px bg-black" />
                                <h3 className="text-lg font-medium">{services.title}.</h3>
                            </div>
                            {services.description && (
                                <p className="mb-6 leading-relaxed text-gray-600">
                                    {services.description}
                                </p>
                            )}
                            {services.points && services.points.length > 0 && (
                                <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                                    {services.points.map((point) => (
                                        <li key={point.id}>{point.title} .</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}

                    {/* Certificates */}
                    {certificates && (
                        <div>
                            <div className="flex items-center gap-4 mb-6">
                                <span className="block w-8 h-px bg-black" />
                                <h3 className="text-lg font-medium">{certificates.title}.</h3>
                            </div>
                            {certificates.description && (
                                <p className="mb-6 leading-relaxed text-gray-600">
                                    {certificates.description}
                                </p>
                            )}
                            {certificates.points && certificates.points.length > 0 && (
                                <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                                    {certificates.points.map((point) => (
                                        <li key={point.id}>{point.title} .</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    )}
                </div>

                {/* Empty State - لو مفيش بيانات خالص */}
                {!services && !certificates && (
                    <div className="text-center py-12">
                        <p className="text-gray-500">
                            No services or certificates available at the moment.
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
}
