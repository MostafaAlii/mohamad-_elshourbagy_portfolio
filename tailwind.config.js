// tailwind.config.js
import { baseColors, semanticColors } from "./src/styles/resources/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                ...baseColors,

                // Navbar Colors
                "navbar-bg": semanticColors.navbar.background,
                "navbar-text": semanticColors.navbar.text,
                "navbar-text-hover": semanticColors.navbar.textHover,
                "navbar-border": semanticColors.navbar.border,
                "navbar-logo-text": semanticColors.navbar.logoText,

                // Button Colors
                "btn-primary": semanticColors.button.primary.bg,
                "btn-primary-hover": semanticColors.button.primary.bgHover,
                "btn-primary-text": semanticColors.button.primary.text,

                "btn-secondary": semanticColors.button.secondary.bg,
                "btn-secondary-hover": semanticColors.button.secondary.bgHover,
                "btn-secondary-text": semanticColors.button.secondary.text,

                // Text Colors
                "text-heading": semanticColors.text.heading,
                "text-body": semanticColors.text.body,
                "text-muted": semanticColors.text.muted,

                // Background Colors
                "bg-primary": semanticColors.background.primary,
                "bg-secondary": semanticColors.background.secondary,
                "bg-accent": semanticColors.background.accent,

                // Footer Colors
                "footer-bg": semanticColors.footer.background,
                "footer-text": semanticColors.footer.text,

                "about-bg": semanticColors.aboutUs.background,
                "about-title": semanticColors.aboutUs.title,
                "about-subtitle": semanticColors.aboutUs.subtitle,
                "about-text": semanticColors.aboutUs.text,

                "service-bg": semanticColors.service.background,
                "service-title": semanticColors.service.title,
                "service-subtitle": semanticColors.service.subtitle,
                "service-text": semanticColors.service.text,

                "gallery-bg": semanticColors.gallery.background,
                "gallery-title": semanticColors.gallery.title,
                "gallery-subtitle": semanticColors.gallery.subtitle,
                "gallery-text": semanticColors.gallery.text,

                "contact-bg": semanticColors.contact.background,
                "contact-title": semanticColors.contact.title,
                "contact-label": semanticColors.contact.label,
                "contact-text": semanticColors.contact.text,
                "contact-input": semanticColors.contact.input,
                "contact-placeholder": semanticColors.contact.placeholder,
                "contact-icon-bg": semanticColors.contact.iconBg,
                "contact-icon": semanticColors.contact.icon,
                "contact-button": semanticColors.contact.button,
                "contact-button-hover": semanticColors.contact.buttonHover,
                "contact-focus": semanticColors.contact.focus,
            },
        },
    },
    plugins: [],
};