import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/logo.png";
import { useIsMobile } from "../../hooks/use-mobile";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  
  // Animation values based on scroll position
  const logoSize = useTransform(scrollY, [0, 100], 
    isMobile ? [120, 100] : [160, 104]
  );
  
  const logoPosition = useTransform(scrollY, [0, 100], 
    isMobile ? [-31, -25] : [-30, -27]
  );
    
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      ref={navRef}
      className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'py-3 shadow-md' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Logo container - positioned absolutely to go outside navbar */}
        <motion.div 
          className="absolute left-4 md:left-6 top-0 z-10"
          style={{ 
            width: logoSize,
            top: logoPosition,
            // opacity: logoOpacity,
            scale: logoScale,
            // filter: scrolled 
            //   ? 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' 
            //   : 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.15))'
          }}
          initial={{ y: -50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
        >
          <img 
            src={logoImage} 
            alt="BAAL KRISHNA SHIPPING & LOGISTICS" 
            className="w-full h-auto object-contain"
          />
        </motion.div>
        
        <div className="flex items-center justify-between">
          {/* Spacer for the logo area */}
          <div className="w-28 md:w-44 lg:w-48 h-10 invisible">{/* Spacer that matches logo width */}</div>
          
          <nav className="hidden md:flex items-center space-x-8 pl-2">
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
        {/* Add space at the top of mobile menu to avoid overlapping with logo */}
        <div className="h-14 md:h-0"></div>
        
        <nav className="flex flex-col space-y-4 mt-4">
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
            className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full hover:shadow-lg transition-all text-center mt-2"
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
