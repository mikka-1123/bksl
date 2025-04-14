import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OurLegendary = () => {
  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5
      }
    })
  };

  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f59e0b]/5 to-transparent"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Our Legendary Legacy</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#f59e0b] to-[#eab308] mx-auto rounded-full"></div>
        </motion.div>
        
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Founder Portrait" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold">Est. 1992</p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#0f2549] mb-4">James R. Wilson <span className="text-[#f59e0b]">Founder</span></h3>
            <p className="text-gray-600 mb-6">
              From a single vessel to a global enterprise, James built this company on principles of integrity, innovation, and exceptional service. His vision transformed how businesses approach global shipping.
            </p>
            
            <ul className="space-y-4 mt-8">
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Pioneered real-time cargo tracking systems in the early 2000s</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Expanded from regional to global operations within a decade</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Established industry-leading customer service protocols</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Recipient of Industry Pioneer Award (2010)</p>
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center md:mt-20">
          <motion.div 
            className="order-2 md:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-[#0f2549] mb-4">Michael J. Wilson <span className="text-[#f59e0b]">CEO</span></h3>
            <p className="text-gray-600 mb-6">
              Continuing his father's legacy while driving OceanWay into the digital age, Michael has implemented cutting-edge technologies and sustainable practices that set new industry standards.
            </p>
            
            <ul className="space-y-4 mt-8">
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={0}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Introduced AI-driven logistics optimization platform</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={1}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Launched industry-first carbon-neutral shipping program</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={2}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Expanded operations to 120+ countries</p>
              </motion.li>
              
              <motion.li 
                className="flex items-start"
                variants={listItemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                custom={3}
              >
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#f59e0b] to-[#eab308] flex items-center justify-center mt-1">
                  <Check className="h-3 w-3 text-white" />
                </div>
                <p className="ml-3 text-gray-600">Named Logistics CEO of the Year (2023)</p>
              </motion.li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="order-1 md:order-2 relative"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Current CEO Portrait" 
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#f59e0b] to-[#eab308] text-white px-4 py-2 rounded-lg shadow-lg">
              <p className="font-bold">Since 2015</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurLegendary;
