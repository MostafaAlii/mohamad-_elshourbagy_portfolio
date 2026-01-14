import LetsTalkSection from "../components/sections/LetsTalkSection";

export default function Plans() {
    const plans = [
        {
            title: "6 Sessions Plan",
            price: "450",
            description: "Ideal for business development",
            validity: "Valid for 3 months",
            benefits: [
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit"
            ]
        },
        {
            title: "3 Sessions Plan",
            price: "225",
            description: "Short-term consultation",
            validity: "Valid for one month",
            benefits: [
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit"
            ]
        },
        {
            title: "12 Sessions Plan",
            price: "850",
            description: "Perfect for ongoing mentorship",
            validity: "Valid for 6 months",
            bestValue: true,
            benefits: [
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit",
                "I'm a benefit"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-0">
            <div className="max-w-6xl px-6 mx-auto">
                {/* Header */}
                <h1 className="mb-16 text-4xl font-bold text-center text-blue-600 tracking-wider">
                    CHOOSE YOUR PRICING PLAN
                </h1>

                {/* Plans Grid */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl mx-auto mb-20">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className="relative bg-white rounded-sm overflow-hidden shadow-md"
                        >
                            {/* Best Value Badge */}
                            {plan.bestValue && (
                                <div className="absolute -top-3 right-8 bg-blue-600 text-white px-4 py-1 text-xs font-semibold">
                                    Best Value
                                </div>
                            )}

                            {/* Blue Header Section */}
                            <div className="bg-blue-600 text-white text-center py-8 px-6">
                                <h3 className="text-xl font-normal mb-6">
                                    {plan.title}
                                </h3>
                                
                                <div className="mb-6">
                                    <span className="text-2xl">$</span>
                                    <span className="text-6xl font-bold">{plan.price}</span>
                                </div>

                                <p className="text-sm mb-6 font-light">
                                    {plan.description}
                                </p>

                                <p className="text-xs mb-6 opacity-90">
                                    {plan.validity}
                                </p>

                                <button className="w-full bg-white text-blue-600 py-3 px-6 font-semibold hover:bg-gray-50 transition-colors">
                                    Join Now
                                </button>
                            </div>

                            {/* Benefits Section */}
                            <div className="bg-gray-50 py-8 px-6 min-h-[240px]">
                                <ul className="space-y-4">
                                    {plan.benefits.map((benefit, idx) => (
                                        <li
                                            key={idx}
                                            className="text-sm text-blue-600 text-center"
                                        >
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Contact Section */}
            <LetsTalkSection />
        </div>
    );
}