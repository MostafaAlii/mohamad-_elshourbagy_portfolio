// src/components/ContactUs.tsx
import { useState } from 'react';

export default function ContactUsSection() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <section id="contact" className="py-16 bg-contact-bg md:py-20">
            <div className="max-w-4xl px-4 mx-auto">
                {/* Title */}
                <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-contact-title">
                    Contact Us.
                </h2>

                {/* Contact Info Cards */}
                <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-3">
                    {/* Address */}
                    <div className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-contact-icon-bg">
                            <svg
                                className="w-6 h-6 text-contact-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-contact-label">Address</h3>
                        <p className="text-sm text-contact-text">
                            6834 Hollywood Blvd - Los Angeles CA
                        </p>
                    </div>

                    {/* Email */}
                    <div className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-contact-icon-bg">
                            <svg
                                className="w-6 h-6 text-contact-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-contact-label">Email</h3>
                        <p className="text-sm text-contact-text">
                            Support@website.com
                        </p>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col items-center p-6 text-center transition-shadow duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-contact-icon-bg">
                            <svg
                                className="w-6 h-6 text-contact-icon"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-contact-label">Phone</h3>
                        <p className="text-sm text-contact-text">
                            +201099327876
                        </p>
                    </div>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder"
                            />
                        </div>
                    </div>

                    {/* Message */}
                    <div>
                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                            className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg resize-none bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="px-8 py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-contact-button hover:bg-contact-button-hover focus:outline-none focus:ring-2 focus:ring-contact-focus focus:ring-offset-2"
                        >
                            submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
