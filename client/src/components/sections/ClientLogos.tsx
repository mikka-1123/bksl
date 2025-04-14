import { motion } from 'framer-motion';

const clientLogos = [
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/800px-Apple_logo_black.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Firefox_logo%2C_2019.svg/1200px-Firefox_logo%2C_2019.svg.png",
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Samsung_Logo.svg/1200px-Samsung_Logo.svg.png"
];

const ClientLogos = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h3 
          className="text-center text-lg font-medium text-gray-500 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          Trusted by industry leaders worldwide
        </motion.h3>
        
        <div className="relative">
          <motion.div 
            className="flex space-x-16 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex space-x-16 animate-marquee">
              {clientLogos.map((logo, index) => (
                <div key={index} className="flex-shrink-0 w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                  <img src={logo} alt={`Client logo ${index + 1}`} className="h-8" />
                </div>
              ))}
              {/* Duplicate logos for seamless looping */}
              {clientLogos.map((logo, index) => (
                <div key={`dup-${index}`} className="flex-shrink-0 w-32 h-16 grayscale hover:grayscale-0 transition-all duration-300 flex items-center justify-center">
                  <img src={logo} alt={`Client logo ${index + 1}`} className="h-8" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
