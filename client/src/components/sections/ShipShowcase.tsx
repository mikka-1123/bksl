import { motion } from 'framer-motion';
import { ArrowRight, Ship, Anchor, Navigation } from 'lucide-react';
import ShipAnimation from '@/components/3d/ShipAnimation';

const ShipShowcase = () => {
  const statsVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i + 0.8, // Start animations after the ship appears
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-b from-[#0f2549] to-[#1a365d]">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Radar style concentric circles */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] opacity-5">
          <motion.div 
            className="absolute inset-0 rounded-full border-2 border-white"
            animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          ></motion.div>
          <motion.div 
            className="absolute inset-[100px] rounded-full border-2 border-white"
            animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          ></motion.div>
          <motion.div 
            className="absolute inset-[200px] rounded-full border-2 border-white"
            animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          ></motion.div>
        </div>
        
        {/* Satellite tracking blips */}
        <motion.div 
          className="absolute top-[35%] right-[20%] w-4 h-4 rounded-full bg-[#0ea5e9]"
          animate={{ 
            scale: [1, 1.8, 1],
            boxShadow: [
              '0 0 0 0 rgba(14, 165, 233, 0.7)', 
              '0 0 0 10px rgba(14, 165, 233, 0)', 
              '0 0 0 0 rgba(14, 165, 233, 0)'
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
        
        <motion.div 
          className="absolute bottom-[25%] left-[30%] w-3 h-3 rounded-full bg-[#0ea5e9]"
          animate={{ 
            scale: [1, 1.8, 1],
            boxShadow: [
              '0 0 0 0 rgba(14, 165, 233, 0.7)', 
              '0 0 0 10px rgba(14, 165, 233, 0)', 
              '0 0 0 0 rgba(14, 165, 233, 0)'
            ],
          }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.7 }}
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
            <Ship className="h-6 w-6 text-white" />
          </div>
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Advanced Fleet Technology
          </motion.h2>
          <motion.p 
            className="text-lg text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Our state-of-the-art vessels are equipped with satellite tracking, advanced navigation systems, and eco-friendly propulsion technology.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          {/* Left side stats */}
          <div className="lg:col-span-1 space-y-6 order-2 lg:order-1">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Navigation className="h-5 w-5 text-[#0ea5e9]" />
                <h3 className="text-lg font-semibold text-white">Navigation</h3>
              </div>
              <p className="text-white/80 text-sm">Advanced GPS systems with AI-assisted routing for optimal course planning.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Anchor className="h-5 w-5 text-[#0ea5e9]" />
                <h3 className="text-lg font-semibold text-white">Stability</h3>
              </div>
              <p className="text-white/80 text-sm">Dynamic ballast systems maintain perfect stability even in rough seas.</p>
            </motion.div>
          </div>
          
          {/* Center 3D ship animation */}
          <div className="lg:col-span-3 h-[400px] md:h-[500px] relative order-1 lg:order-2">
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <ShipAnimation />
            </motion.div>
          </div>
          
          {/* Right side stats */}
          <div className="lg:col-span-1 space-y-6 order-3">
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Ship className="h-5 w-5 text-[#0ea5e9]" />
                <h3 className="text-lg font-semibold text-white">Propulsion</h3>
              </div>
              <p className="text-white/80 text-sm">Hybrid engines reduce emissions by 35% while maintaining optimal speed.</p>
            </motion.div>
            
            <motion.div 
              className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
              variants={statsVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={3}
            >
              <div className="flex items-center space-x-3 mb-3">
                <ArrowRight className="h-5 w-5 text-[#0ea5e9]" />
                <h3 className="text-lg font-semibold text-white">Efficiency</h3>
              </div>
              <p className="text-white/80 text-sm">Advanced hull design reduces water resistance and increases fuel efficiency.</p>
            </motion.div>
          </div>
        </div>
        
       
      </div>
    </section>
  );
};

export default ShipShowcase;