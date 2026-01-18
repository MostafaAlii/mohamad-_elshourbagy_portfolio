import { useState } from 'react';
import { useSettings } from '../../hooks/useSettings';
import contactAPI from '../../services/contact.api';

export default function ContactUsSection() {
    const { settings, loading } = useSettings();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [submitting, setSubmitting] = useState(false);
    const [notification, setNotification] = useState<{
        show: boolean;
        type: 'success' | 'error';
        message: string;
    }>({
        show: false,
        type: 'success',
        message: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            setSubmitting(true);

            const response = await contactAPI.sendMessage(formData);

            if (response.success) {
                // Success notification
                setNotification({
                    show: true,
                    type: 'success',
                    message: 'Message sent successfully! We will contact you soon.'
                });

                // Reset form
                setFormData({ name: '', email: '', message: '' });

                // Hide notification after 5 seconds
                setTimeout(() => {
                    setNotification({ show: false, type: 'success', message: '' });
                }, 5000);
            }
        } catch (error) {
            // Error notification
            setNotification({
                show: true,
                type: 'error',
                message: 'Failed to send message. Please try again.'
            });

            // Hide notification after 5 seconds
            setTimeout(() => {
                setNotification({ show: false, type: 'error', message: '' });
            }, 5000);

            console.error('Contact form error:', error);
        } finally {
            setSubmitting(false);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // البيانات من الـ API أو fallback
    const contactInfo = {
        address: settings?.address || '6834 Hollywood Blvd - Los Angeles CA',
        email: settings?.email || 'Support@website.com',
        phone: settings?.phone || '+201099327876'
    };

    return (
        <section id="contact" className="relative py-16 bg-contact-bg md:py-20">
            {/* Notification */}
            {notification.show && (
                <div className="fixed z-50 top-4 right-4 animate-slide-in-right">
                    <div className={`px-6 py-4 rounded-lg shadow-lg ${notification.type === 'success'
                            ? 'bg-green-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}>
                        <div className="flex items-center gap-3">
                            {notification.type === 'success' ? (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                            <p className="font-medium">{notification.message}</p>
                        </div>
                    </div>
                </div>
            )}

            <div className="max-w-4xl px-4 mx-auto">
                {/* Title */}
                <h2 className="mb-12 text-4xl font-bold text-center md:text-5xl text-contact-title">
                    Contact Us.
                </h2>

                {/* Contact Info Cards */}
                {loading ? (
                    <div className="flex justify-center mb-12">
                        <div className="w-12 h-12 border-4 border-gray-300 rounded-full border-t-gray-800 animate-spin"></div>
                    </div>
                ) : (
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
                                {contactInfo.address}
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
                                {contactInfo.email}
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
                                {contactInfo.phone}
                            </p>
                        </div>
                    </div>
                )}

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
                                disabled={submitting}
                                className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
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
                                disabled={submitting}
                                className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
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
                            disabled={submitting}
                            rows={6}
                            className="w-full px-4 py-3 transition-colors duration-200 border-0 rounded-lg resize-none bg-contact-input focus:outline-none focus:ring-2 focus:ring-contact-focus placeholder:text-contact-placeholder disabled:opacity-50 disabled:cursor-not-allowed"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            disabled={submitting}
                            className="flex items-center gap-2 px-8 py-3 font-semibold text-white transition-all duration-200 rounded-lg bg-contact-button hover:bg-contact-button-hover focus:outline-none focus:ring-2 focus:ring-contact-focus focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {submitting ? (
                                <>
                                    <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                    </svg>
                                    Sending...
                                </>
                            ) : (
                                'Submit'
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
