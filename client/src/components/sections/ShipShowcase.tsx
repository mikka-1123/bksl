import { motion } from 'framer-motion';
import ShipAnimation from '../3d/ShipAnimation';
import { Package, Anchor, Ship, CloudRain } from 'lucide-react';

const ShipShowcase = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-white to-sky-50">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute -top-10 right-10 text-[#0ea5e9]/5 opacity-30"
          animate={{ 
            y: [0, 20, 0],
            rotateZ: [0, 5, 0]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
        >
          <Ship size={200} />
        </motion.div>
        
        <motion.div 
          className="absolute top-20 -left-10 text-[#0f2549]/5 opacity-20"
          animate={{ 
            y: [0, -10, 0],
            x: [0, 5, 0]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        >
          <CloudRain size={100} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-20 right-20 text-[#0ea5e9]/5 opacity-20"
          animate={{ 
            y: [0, 8, 0],
            rotateZ: [0, -5, 0]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Anchor size={80} />
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-20 text-[#0f2549]/5 opacity-20"
          animate={{ 
            y: [0, -15, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        >
          <Package size={120} />
        </motion.div>
      </div>
      
      {/* Main content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block p-2 bg-[#0ea5e9]/10 rounded-xl mb-4">
            <Ship className="h-8 w-8 text-[#0ea5e9]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549] leading-tight">
            Cutting-Edge 
            <span className="bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] bg-clip-text text-transparent"> Global Shipping</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Our state-of-the-art logistics technology allows real-time tracking and monitoring across every ocean, ensuring your cargo arrives safely and on schedule.
          </p>
        </motion.div>
        
        {/* Ship animation container with bow-shaped top */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 -top-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none">
            <svg className="w-full absolute -top-1" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <path 
                d="M0,40 C300,0 600,40 900,0 C1050,20 1150,0 1200,20 L1200,0 L0,0 Z" 
                className="fill-white"
              />
            </svg>
          </div>
          
          {/* The 3D ship animation */}
          <ShipAnimation />
          
          {/* Animated dots suggesting global tracking */}
          <div className="absolute inset-0 pointer-events-none">
            <motion.div 
              className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#0ea5e9] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.2, 1, 0.2] 
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute top-1/3 right-1/3 w-2 h-2 bg-[#2563eb] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.2, 1, 0.2] 
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: 0.5,
                ease: "easeInOut" 
              }}
            />
            <motion.div 
              className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-[#f59e0b] rounded-full"
              animate={{ 
                scale: [1, 1.5, 1], 
                opacity: [0.2, 1, 0.2] 
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                delay: 1,
                ease: "easeInOut" 
              }}
            />
          </div>
          
          {/* Bottom decorative wave */}
          <div className="absolute inset-x-0 -bottom-8 h-16 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none">
            <svg className="w-full absolute bottom-0" viewBox="0 0 1200 40" preserveAspectRatio="none">
              <path 
                d="M0,20 C300,40 600,0 900,40 C1050,0 1150,40 1200,0 L1200,40 L0,40 Z" 
                className="fill-white"
              />
            </svg>
          </div>
        </div>
        
        {/* Stats and features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#0ea5e9]/10 flex items-center justify-center mb-4">
              <Ship className="h-6 w-6 text-[#0ea5e9]" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-2">Global Fleet Network</h3>
            <p className="text-gray-600">Operate with a network of over 200 vessels and strategic port partnerships across 120+ countries.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#2563eb]/10 flex items-center justify-center mb-4">
              <CloudRain className="h-6 w-6 text-[#2563eb]" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-2">Weather Prediction AI</h3>
            <p className="text-gray-600">Advanced AI algorithms forecast weather patterns and adjust routes for optimal delivery times.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            whileHover={{ y: -5, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          >
            <div className="w-12 h-12 rounded-lg bg-[#f59e0b]/10 flex items-center justify-center mb-4">
              <Package className="h-6 w-6 text-[#f59e0b]" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-2">Container Integrity</h3>
            <p className="text-gray-600">IoT sensors monitor temperature, humidity, and shock to ensure cargo integrity throughout transit.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ShipShowcase;