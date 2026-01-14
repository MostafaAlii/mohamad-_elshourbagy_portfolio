import HeroSection from "../components/Hero";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import GallerySection from "../components/sections/GallerySection";
import ContactUsSection from "../components/sections/ContactUsSection";
export default function Home() {
    return (
        <div className="">
            {/* Hero Section */}
            <HeroSection />

            {/* About Me Section */}
            <AboutSection />

            {/* About Me Section */}
            <ServicesSection />

            {/* Gallery Section */}
            <GallerySection />

            {/* ContactUs Section */}
            <ContactUsSection />
        </div>
    );
}
