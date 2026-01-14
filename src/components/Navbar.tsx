import { useState } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
// 🎨 Menu Icon Component
const MenuIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
);

// 🎨 Close Icon Component
const CloseIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('#home');

    // 🎨 Typewriter effect
    const { displayText: logoText, isComplete } = useTypewriter({
        text: 'Dr Mohamad Elshourbagy',
        speed: 100,
        delay: 500,
        loop: false,
    });

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Certification', href: '#certification' },
        { name: 'Gallery', href: '#gallery' },
        { name: 'Contact Us', href: '#contact' },
    ];

    // Smooth scroll function
    const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setIsOpen(false);
        setActiveLink(href);

        const targetId = href.replace('#', '');
        const element = document.getElementById(targetId);

        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <nav className="sticky top-0 z-50 border-b shadow-md bg-navbar-bg border-navbar-border">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">

                    {/* Logo - Left Side */}
                    <div className="flex-shrink-0">
                        <a
                            href="#home"
                            onClick={(e) => handleScroll(e, '#home')}
                            className="text-2xl font-bold transition-colors duration-200 text-navbar-text"
                        >
                            {logoText}
                            {!isComplete && <span className="animate-pulse">|</span>}
                        </a>
                    </div>

                    {/* Desktop Navigation - Right Side */}
                    <div className="items-center hidden space-x-1 lg:flex">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className="relative px-4 py-2 text-sm font-medium transition-colors duration-200 text-navbar-text hover:text-navbar-text-hover group"
                            >
                                {link.name}
                                {/* Underline on hover and active */}
                                <span
                                    className={`absolute bottom-0 left-0 h-0.5 bg-navbar-text-hover transition-all duration-300 ${activeLink === link.href
                                            ? 'w-full'
                                            : 'w-0 group-hover:w-full'
                                        }`}
                                ></span>
                            </a>
                        ))}
                    </div>

                    {/* Mobile menu button - Right Side */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 transition-colors duration-200 text-navbar-text hover:text-navbar-text-hover focus:outline-none"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isOpen && (
                <div className="border-t lg:hidden bg-navbar-bg border-navbar-border">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleScroll(e, link.href)}
                                className={`block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md border-l-4 ${activeLink === link.href
                                        ? 'text-navbar-text-hover border-navbar-text-hover bg-bg-accent'
                                        : 'text-navbar-text border-transparent hover:text-navbar-text-hover hover:border-navbar-text-hover hover:bg-bg-accent'
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
