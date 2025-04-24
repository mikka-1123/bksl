import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { ArrowRight, Anchor, MapPin } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={containerRef} className="pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden relative">
      {/* Maritime wave decoration - top */}
      <div className="absolute top-0 left-0 w-full h-8 bg-[#0ea5e9]/5 -z-10">
        <svg className="w-full h-full" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,40 350,-10 500,12 C650,30 700,0 900,12 C1050,22 1150,5 1200,0 L1200,24 L0,24 Z" 
            className="fill-[#0ea5e9]/10"
          />
        </svg>
      </div>
      
      {/* Background gradient effects */}
      {/* Background gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10"></div>
      <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-blue-50/50 to-transparent -z-10"></div>
      <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-[#0f2549]/5 to-transparent -z-10"></div>

      {/* Left side decorative elements */}
      {/* <div className="absolute top-32 left-10 w-64 h-64 opacity-10 -z-5 hidden lg:block">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <circle cx="100" cy="100" r="80" stroke="#0f2549" strokeWidth="1" fill="none" />
          <circle cx="100" cy="100" r="60" stroke="#0ea5e9" strokeWidth="0.5" fill="none" />
          <path d="M100,20 L100,180 M20,100 L180,100" stroke="#0f2549" strokeWidth="0.5" />
          <path d="M30,30 L170,170 M30,170 L170,30" stroke="#0f2549" strokeWidth="0.5" strokeDasharray="4,4" />
        </svg>
      </div> */}
      
      <motion.div 
        className="absolute top-32 left-[22rem] w-50 h-50 opacity-[0.03] -z-5 hidden lg:block"
        animate={{ 
          rotate: -360,
        }}
        transition={{ 
          duration: 180, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" stroke="#0f2549" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="39" stroke="#0ea5e9" strokeWidth="0.5" fill="none" />
          <path d="M50,5 L50,95 M5,50 L95,50" stroke="#0f2549" strokeWidth="1" />
          <path d="M26,26 L74,74 M26,74 L74,26" stroke="#0f2549" strokeWidth="0.5" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="3" fill="#0ea5e9" />
        </svg>
      </motion.div>

      

      <motion.div 
        className="hidden lg:block absolute top-32 right-10 w-40 h-40 opacity-10 -z-5"
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 120, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        
      </motion.div>

      {/* Nautical map grid lines */}
      <div className="absolute top-0 left-0 w-1/3 h-full opacity-5 -z-5 hidden lg:block">
        <div className="grid grid-cols-6 h-full">
          {Array(7).fill(null).map((_, i) => (
            <div key={i} className="border-l border-[#0f2549]/20 h-full" />
          ))}
        </div>
        <div className="grid grid-rows-6 w-full h-full absolute top-0">
          {Array(7).fill(null).map((_, i) => (
            <div key={i} className="border-t border-[#0f2549]/20 w-full" />
          ))}
        </div>
      </div>
      
      {/* Animated compass decorative element */}
      <motion.div 
        className="hidden lg:block absolute top-32 right-10 w-40 h-40 opacity-10 -z-5"
        animate={{ 
          rotate: 360,
        }}
        transition={{ 
          duration: 120, 
          repeat: Infinity, 
          ease: "linear" 
        }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <circle cx="50" cy="50" r="45" stroke="#0f2549" strokeWidth="1" fill="none" />
          <circle cx="50" cy="50" r="39" stroke="#0ea5e9" strokeWidth="0.5" fill="none" />
          <path d="M50,5 L50,95 M5,50 L95,50" stroke="#0f2549" strokeWidth="1" />
          <path d="M26,26 L74,74 M26,74 L74,26" stroke="#0f2549" strokeWidth="0.5" strokeDasharray="2,2" />
          <circle cx="50" cy="50" r="3" fill="#0ea5e9" />
        </svg>
      </motion.div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Maritime anchor icon */}
            <motion.div 
              className="mb-4 text-[#0ea5e9]"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Anchor className="h-10 w-10" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f2549] leading-tight">
            Your Global
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] bg-clip-text text-transparent"> Shipping Solutions</span>
            </h1>
            
            {/* Animated underline */}
            <motion.div 
              className="h-1 w-24 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full mt-4"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            
            <p className="mt-6 text-lg text-gray-600">
              With over 30 years of experience, we've been transforming global logistics with technology-driven solutions that deliver results.
            </p>
            
            {/* Neumorphic-styled stats */}
            <div className="mt-6 grid grid-cols-3 gap-4">
              <div className="bg-white rounded-lg p-3 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-gray-100">
                <p className="text-sm text-gray-500">Countries</p>
                <p className="text-lg font-bold text-[#0f2549]">120+</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-gray-100">
                <p className="text-sm text-gray-500">Shipments</p>
                <p className="text-lg font-bold text-[#0f2549]">1M+</p>
              </div>
              <div className="bg-white rounded-lg p-3 shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)] border border-gray-100">
                <p className="text-sm text-gray-500">Accuracy</p>
                <p className="text-lg font-bold text-[#0f2549]">99.7%</p>
              </div>
            </div>
            
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                </motion.div>
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-white text-[#0f2549] border border-[#0f2549] rounded-full font-medium hover:bg-[#0f2549]/5 transition-colors flex items-center shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.9)]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Us
                <MapPin className="ml-2 h-4 w-4" />
              </motion.a>
            </div>
            
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="Shipping Professional" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="Logistics Expert" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="Supply Chain Manager" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span className="text-sm text-gray-600">Trusted by <span className="font-medium text-[#0f2549]">2,000+</span> businesses worldwide</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ y, opacity }}
          >
            {/* Main image with bow-shaped mask and neumorphic shadow */}
            <div className="relative z-10 overflow-hidden rounded-[24px_24px_60px_24px] shadow-[10px_10px_30px_rgba(0,0,0,0.1),-10px_-10px_30px_rgba(255,255,255,0.8)]">
              <img 
                src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=85"
                alt="Modern Container Ship with Advanced Technology" 
                className="w-full object-cover transform hover:scale-105 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2549]/30 via-[#0ea5e9]/20 to-transparent mix-blend-overlay"></div>
              
              {/* Blinking tracking points */}
              <motion.div 
                className="absolute top-1/4 left-1/3 w-2 h-2 bg-[#0ea5e9] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div 
                className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-[#2563eb] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
              />
              <motion.div 
                className="absolute top-1/2 right-1/3 w-2 h-2 bg-[#fff] rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              />
              
              {/* Animated route path */}
              <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                <motion.path 
                  d="M20,70 C30,60 40,80 60,50 C70,35 80,40 90,35" 
                  stroke="#fff" 
                  strokeWidth="0.5" 
                  fill="none" 
                  strokeDasharray="1,2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 0.6 }}
                  transition={{ duration: 3, delay: 1 }}
                />
              </svg>
            </div>
            
            {/* Decorative data card with maritime accent */}
            <motion.div 
              className="absolute -bottom-10 -right-5 bg-white p-4 rounded-[8px_20px_8px_8px] shadow-lg z-20 border-l-4 border-[#0ea5e9]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 }}
            >
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-[#0ea5e9] mr-2"></div>
                <p className="text-xs font-semibold text-[#0f2549]">SHIPPING DETAILS</p>
              </div>
              <p className="text-sm text-gray-600 mt-1">50 Containers, In Transit (Contact us for updates)</p>
              <div className="w-full bg-gray-200 h-1 rounded-full mt-2">
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full"
                  initial={{ width: '0%' }}
                  animate={{ width: '65%' }}
                  transition={{ duration: 1, delay: 1.5 }}
                ></motion.div>
              </div>
            </motion.div>
            
            {/* Gradient orbs for depth */}
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0ea5e9]/20 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2563eb]/20 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Maritime wave decoration - bottom */}
      <div className="absolute bottom-0 left-0 w-full h-8 bg-[#0ea5e9]/5 -z-10 transform rotate-180">
        <svg className="w-full h-full" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,40 350,-10 500,12 C650,30 700,0 900,12 C1050,22 1150,5 1200,0 L1200,24 L0,24 Z" 
            className="fill-[#0ea5e9]/10"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
