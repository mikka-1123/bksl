import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import AboutUs from "@/components/sections/AboutUs";
import OurVision from "@/components/sections/OurVision";
import OurLegendary from "@/components/sections/OurLegendary";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import ClientLogos from "@/components/sections/ClientLogos";
import GoldDirection from "@/components/sections/GoldDirection";
import ContactUs from "@/components/sections/ContactUs";

export default function Home() {
  useEffect(() => {
    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.substring(1);
        const element = document.getElementById(id || '');
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80,
            behavior: 'smooth',
          });
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
    };
  }, []);

  return (
    <motion.div 
      className="font-sans text-gray-800 overflow-x-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <WhyChooseUs />
        <AboutUs />
        <OurVision />
        <OurLegendary />
        <Timeline />
        <Testimonials />
        <ClientLogos />
        <GoldDirection />
        <ContactUs />
      </main>
      <Footer />
    </motion.div>
  );
}
