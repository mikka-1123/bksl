import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, ChevronUp } from "lucide-react";
import logoImage from "../../assets/logo.png";
import { useIsMobile } from "../../hooks/use-mobile";

const logoShineAnimation = `
@keyframes logo-shine {
  0% {
    left: -40%;
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  60% {
    opacity: 0.7;
  }
  100% {
    left: 110%;
    opacity: 0;
  }
}
.logo-shine-effect {
  position: absolute;
  top: 0;
  left: -40%;
  width: 40%;
  height: 75%;
  background: linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 50%, transparent 100%);
  pointer-events: none;
  filter: blur(1px);
  opacity: 0;
  animation: logo-shine 2.5s infinite;
}
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const { scrollY } = useScroll();
  const isMobile = useIsMobile();
  
  // Animation values based on scroll position
  const logoSize = useTransform(scrollY, [0, 100], 
    isMobile ? [150, 100] : [200, 145]
  );
  
  const logoPosition = useTransform(scrollY, [0, 100], 
    isMobile ? [-50, -25] : [-50, -48]
  );
    
  const logoOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowScrollButton(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation click
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Find the element to scroll to
    const element = document.querySelector(id);
    if (element) {
      // Wait for menu close animation before scrolling
      setTimeout(() => {
        window.scrollTo({
          top: element.getBoundingClientRect().top + window.scrollY - 100,
          behavior: 'smooth'
        });
      }, 300);
    }
  };

  // Scroll to top/hero section
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <header 
        ref={navRef}
        className={`fixed w-full bg-white/95 backdrop-blur-sm z-50 transition-all duration-300 ${scrolled ? 'py-5 shadow-md' : 'py-[40px]'}`}
      >
        <div className="container mx-auto px-4 md:px-6 relative">
          <motion.div 
            className="absolute left-4 md:left-20 top-0 z-10"
            style={{ 
              width: logoSize,
              top: logoPosition,
              scale: logoScale,
            }}
            initial={{ y: -50, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
          >
            <a href="#" onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}>
              <div className="relative">
                <img 
                  src={logoImage} 
                  alt="BAAL KRISHNA SHIPPING & LOGISTICS" 
                  className="w-full h-auto object-contain"
                />
                <div className="logo-shine-effect" />
              </div>
            </a>
          </motion.div>
          
          <div className="flex items-center justify-between">
            {/* Spacer for the logo area */}
            <div className="w-28 md:w-44 lg:w-48 h-10 invisible">{/* Spacer that matches logo width */}</div>
            
            <nav className="hidden md:flex items-center space-x-8 pl-2">
              <a href="#who-we-are" className="text-m font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Who We Are</a>
              <a href="#why-choose-us" className="text-m font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Why Choose Us</a>
              <a href="#timeline" className="text-m font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Timeline</a>
              <a href="#testimonials" className="text-m font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Testimonials</a>
              <a href="#contact" className="text-m font-medium text-gray-600 hover:text-[#2563eb] transition-colors">Contact</a>
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
          <div className="h-5 md:h-0"></div>
          
          <nav className="flex flex-col space-y-4 mt-4">
            <a 
              href="#who-we-are" 
              className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              onClick={(e) => handleNavClick(e, "#who-we-are")}
            >
              Who We Are
            </a>
            <a 
              href="#why-choose-us" 
              className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              onClick={(e) => handleNavClick(e, "#why-choose-us")}
            >
              Why Choose Us
            </a>
            <a 
              href="#timeline" 
              className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              onClick={(e) => handleNavClick(e, "#timeline")}
            >
              Timeline
            </a>
            <a 
              href="#testimonials" 
              className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              onClick={(e) => handleNavClick(e, "#testimonials")}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-sm font-medium text-gray-600 hover:text-[#2563eb] transition-colors"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Contact
            </a>
            <a 
              href="#contact" 
              className="px-5 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full hover:shadow-lg transition-all text-center mt-2"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Talk to Us
            </a>
          </nav>
        </motion.div>
      </header>

      {/* Scroll to top button */}
      <motion.button
        className="fixed bottom-28 right-6 z-40 p-3 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white shadow-md hover:shadow-lg focus:outline-none transition-all duration-300"
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: showScrollButton ? 1 : 0,
          scale: showScrollButton ? 1 : 0.8,
          pointerEvents: showScrollButton ? 'auto' : 'none'
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </motion.button>

      <style>{logoShineAnimation}</style>
    </>
  );
};

export default Navbar;
