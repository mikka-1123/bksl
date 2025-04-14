import { motion } from 'framer-motion';
import { Clock, Shield, Code, Users } from 'lucide-react';

const WhyChooseUs = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="why-choose-us" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Why Choose Us</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#0ea5e9]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={0}
          >
            <div className="w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-5">
              <Clock className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f2549] mb-2">Time Efficiency</h3>
            <p className="text-gray-600">Our optimized routes and seamless processes ensure your shipments arrive on time, every time.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#2563eb]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={1}
          >
            <div className="w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-5">
              <Shield className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f2549] mb-2">Reliability & Security</h3>
            <p className="text-gray-600">Advanced tracking systems and security protocols ensure your cargo's safety throughout transit.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#0f2549]"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={2}
          >
            <div className="w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-5">
              <Code className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f2549] mb-2">Tech Integration</h3>
            <p className="text-gray-600">Seamlessly integrate with your existing systems through our API-driven platform and digital solutions.</p>
          </motion.div>
          
          <motion.div 
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-t-4 border-[#0ea5e9]/70"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            custom={3}
          >
            <div className="w-14 h-14 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] rounded-lg flex items-center justify-center mb-5">
              <Users className="h-7 w-7 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-[#0f2549] mb-2">24/7 Support</h3>
            <p className="text-gray-600">Our dedicated customer success team is available around the clock to assist with any shipping needs.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
