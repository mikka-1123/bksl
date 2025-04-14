import { motion } from 'framer-motion';
import { Globe, Shield, Zap } from 'lucide-react';

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

  return (
    <section id="who-we-are" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Who We Are</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-600">
            OceanWay Logistics is a pioneer in global shipping and logistics, providing comprehensive solutions tailored to your business needs. With a focus on innovation and customer satisfaction, we transform complex supply chains into competitive advantages.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-6">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Global Coverage</h3>
            <p className="text-gray-600">Operating in over 120 countries with strategic partners worldwide to ensure seamless delivery anywhere.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Robust Fleet</h3>
            <p className="text-gray-600">200+ vessels, 10,000+ containers, and an extensive ground fleet ensures we meet any shipping requirement.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <div className="w-16 h-16 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-6">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0f2549] mb-3">Speed & Efficiency</h3>
            <p className="text-gray-600">Cutting-edge tracking and logistics technology ensures 98.7% on-time delivery with real-time visibility.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
