import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'py-2 shadow-md' : 'py-3'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center">
              <span className="text-white font-bold text-xl">OW</span>
            </div>
            <span className="text-[#0f2549] font-bold text-xl">OceanWay</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#who-we-are" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Who We Are</a>
            <a href="#why-choose-us" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Why Choose Us</a>
            <a href="#timeline" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Timeline</a>
            <a href="#testimonials" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Testimonials</a>
            <a href="#contact" className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Contact</a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <a href="#contact" className="hidden md:block px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full hover:shadow-lg transition-all">
              Talk to Us
            </a>
            <button 
              className="md:hidden text-[#0f2549]" 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <motion.div 
        id="mobile-menu" 
        className="md:hidden bg-white px-4 py-4 shadow-md"
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
          display: isOpen ? 'block' : 'none'
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="flex flex-col space-y-4">
          <a 
            href="#who-we-are" 
            className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Who We Are
          </a>
          <a 
            href="#why-choose-us" 
            className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Why Choose Us
          </a>
          <a 
            href="#timeline" 
            className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Timeline
          </a>
          <a 
            href="#testimonials" 
            className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a 
            href="#contact" 
            className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full hover:shadow-lg transition-all text-center"
            onClick={() => setIsOpen(false)}
          >
            Talk to Us
          </a>
        </nav>
      </motion.div>
    </header>
  );
};

export default Navbar;
