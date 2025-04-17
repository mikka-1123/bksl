import { motion } from 'framer-motion';
import { Globe, Ship, Anchor, BarChart3 } from 'lucide-react';

const WhoWeAre = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  const floatingIconVariants = {
    animate: (i: number) => ({
      y: [0, -10, 0],
      transition: {
        delay: i * 0.2,
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="who-we-are" className="py-24 relative overflow-hidden">
      {/* Maritime-inspired background with wave pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-50 to-white -z-10"></div>
      
      {/* Decorative wave svg at the top */}
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden -z-5">
        <svg className="w-full h-full" viewBox="0 0 1200 24" preserveAspectRatio="none">
          <path 
            d="M0,0 C150,20 350,0 500,12 C650,20 700,0 900,12 C1050,20 1150,5 1200,10 L1200,24 L0,24 Z" 
            className="fill-[#0ea5e9]/10"
          />
        </svg>
      </div>
      
      {/* Floating maritime decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 right-[15%] opacity-5 text-[#0f2549]"
          variants={floatingIconVariants}
          animate="animate"
          custom={0}
        >
          <Ship size={100} />
        </motion.div>
        
        <motion.div
          className="absolute bottom-20 left-[10%] opacity-5 text-[#0ea5e9]"
          variants={floatingIconVariants}
          animate="animate"
          custom={1}
        >
          <Anchor size={80} />
        </motion.div>
        
        <motion.div
          className="absolute top-1/2 right-[5%] opacity-5 text-[#0f2549]"
          variants={floatingIconVariants}
          animate="animate"
          custom={2}
        >
          <BarChart3 size={70} />
        </motion.div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-3 bg-[#0ea5e9]/10 rounded-full mb-4">
            <Anchor className="h-6 w-6 text-[#0ea5e9]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Who We Are</h2>
          <motion.div 
            className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 80, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600 leading-relaxed">
            Baal Krishna Shipping & Logistics is a pioneer in global shipping and logistics, providing comprehensive solutions tailored to your business needs. With a focus on innovation and customer satisfaction, we transform complex supply chains into competitive advantages.
          </p>
        </motion.div>
        
        {/* Bow-shaped top border for the cards section */}
        <div className="relative mt-16 mb-8">
          <svg className="w-full h-8 text-white" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path 
              d="M0,48 L1440,48 L1440,0 C1320,16 1200,24 1080,24 C960,24 840,16 720,0 C600,-16 480,-24 360,-24 C240,-24 120,-16 0,0 L0,48 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100 overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0ea5e9]/10 to-transparent rounded-bl-3xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Global Coverage</h3>
            <p className="text-gray-600">Operating in over 120 countries with strategic partners worldwide to ensure seamless delivery anywhere.</p>
            
            {/* Animated progress indicator */}
            <div className="mt-6 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '95%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Coverage</span>
              <span className="font-medium">95%</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100 overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#2563eb]/10 to-transparent rounded-bl-3xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
              <Ship className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Robust Fleet</h3>
            <p className="text-gray-600">200+ vessels, 10,000+ containers, and an extensive ground fleet ensures we meet any shipping requirement.</p>
            
            {/* Animated progress indicator */}
            <div className="mt-6 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '88%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              ></motion.div>
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>Capacity</span>
              <span className="font-medium">88%</span>
            </div>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-2xl shadow-[5px_5px_15px_rgba(0,0,0,0.05),-5px_-5px_15px_rgba(255,255,255,0.8)] border border-gray-100 overflow-hidden relative"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
            whileHover={{ 
              y: -10,
              boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            }}
          >
            {/* Decorative corner accent */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-[#0ea5e9]/10 to-transparent rounded-bl-3xl"></div>
            
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-2xl flex items-center justify-center mb-6 relative z-10 shadow-lg">
              <BarChart3 className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Speed & Efficiency</h3>
            <p className="text-gray-600">Cutting-edge tracking and logistics technology ensures 98.7% on-time delivery with real-time visibility.</p>
            
            {/* Animated progress indicator */}
            <div className="mt-6 w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
              <motion.div 
                className="h-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: '98.7%' }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.7 }}
              ></motion.div>
            </div>
            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>On-time rate</span>
              <span className="font-medium">98.7%</span>
            </div>
          </motion.div>
        </div>
        
        {/* Bow-shaped bottom border for the cards section */}
        <div className="relative mt-8">
          <svg className="w-full h-8 text-white transform rotate-180" viewBox="0 0 1440 48" preserveAspectRatio="none">
            <path 
              d="M0,48 L1440,48 L1440,0 C1320,16 1200,24 1080,24 C960,24 840,16 720,0 C600,-16 480,-24 360,-24 C240,-24 120,-16 0,0 L0,48 Z" 
              fill="currentColor"
            />
          </svg>
        </div>
        
        {/* Maritime and shipping fact */}
        <motion.div 
          className="mt-16 max-w-4xl mx-auto bg-gradient-to-r from-[#0f2549] to-[#0f2549]/90 p-8 rounded-2xl text-white relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#0ea5e9]/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#2563eb]/20 rounded-full blur-3xl"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
            <div className="flex-shrink-0 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Anchor className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Did you know?</h3>
              <p className="text-white/80">Over 90% of world trade is carried by sea, with more than 50,000 merchant ships trading internationally. Our fleet contributes to this global network, connecting businesses across continents.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
