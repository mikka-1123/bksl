import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const OurVision = () => {
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
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#2563eb]/10 rounded-full filter blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0ea5e9]/10 rounded-full filter blur-3xl -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549] mb-6">Our Vision</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-full mb-8"></div>
              
              <p className="text-lg text-gray-600 mb-6">
                We envision a future where global shipping is seamless, sustainable, and accessible to businesses of all sizes. Our mission is to break down logistical barriers through innovation and exceptional service.
              </p>
              
              <div className="space-y-4 mt-8">
                <motion.div 
                  className="flex items-start"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-600">Pioneering sustainable shipping practices to reduce environmental impact</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={1}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-600">Leveraging AI and machine learning to optimize routes and delivery times</p>
                </motion.div>
                
                <motion.div 
                  className="flex items-start"
                  variants={listItemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={2}
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <Check className="h-3 w-3 text-white" />
                  </div>
                  <p className="ml-3 text-gray-600">Building strategic partnerships to create an unmatched global logistics network</p>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1579447767022-66e511bdaf25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Future of Shipping" 
                className="rounded-xl shadow-2xl w-full h-auto transform -rotate-2"
              />
              <motion.div 
                className="absolute -bottom-5 -right-5 w-36 h-36 rounded-lg bg-white p-4 shadow-xl transform rotate-3"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80" 
                  alt="Smart Logistics" 
                  className="w-full h-full object-cover rounded"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurVision;
