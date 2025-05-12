import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#0f2549] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="flex flex-col items-center justify-center">
              <div className="relative flex items-center justify-center mb-4">
                <span className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-blue-400/30 via-blue-700/20 to-transparent blur-2xl z-0"></span>
                <img 
                  src={logo} 
                  alt="Baal Krishna Shipping & Logistics Logo" 
                  className="w-32 h-32 object-contain rounded-full bg-white border-4 border-blue-100 shadow-xl z-10 transition-transform duration-300 hover:scale-105" 
                />
              </div>
              <div className="text-center mb-6">
                <span className="block text-white font-extrabold text-2xl tracking-wide drop-shadow-lg">BAAL KRISHNA</span>
                <span className="block text-blue-200 font-semibold text-md tracking-widest">SHIPPING & LOGISTICS</span>
              </div>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming global logistics through innovation, reliability, and exceptional service for over 30 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-start-2 lg:items-center lg:justify-center flex flex-col lg:text-center">
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#who-we-are" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#why-choose-us" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
              <li><a href="#timeline" className="text-gray-300 hover:text-white transition-colors">Our Journey</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe for industry updates and exclusive offers.</p>
            
            <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-white/10 text-white border border-white/20 focus:outline-none focus:border-white/40 transition-colors"
                  required
                />
              </div>
              <button 
                type="submit" 
                className="w-full px-4 py-3 bg-white text-[#0f2549] font-medium rounded-lg hover:bg-white/90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Baal Krishna Shipping & Logistics. All rights reserved. | 
            <a href="#" className="hover:text-white"> Privacy Policy</a> | 
            <a href="#" className="hover:text-white"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
