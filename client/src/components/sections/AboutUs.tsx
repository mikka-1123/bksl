import { motion } from 'framer-motion';

const AboutUs = () => {
  const timelineVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="py-20 bg-[#0f2549] text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1566576874353-ed54a6f19537?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold">About Us</h2>
          <div className="mt-4 h-1 w-20 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-lg text-gray-200">
            From our humble beginnings to becoming a global leader, we've consistently pushed the boundaries of what's possible in logistics. Our journey is defined by innovation, resilience, and an unwavering commitment to excellence.
          </p>
        </motion.div>
        
        <div className="mt-16 relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#0ea5e9]/30"></div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={timelineVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div 
              className="relative pl-10 pb-10 md:text-right md:pl-0 md:pr-10"
              variants={itemVariants}
            >
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center transform md:translate-x-4 -translate-x-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Founded with a Vision</h3>
              <p className="text-gray-300">Started as a small regional shipping company with a clear vision to revolutionize the industry through technology and customer-centric approaches.</p>
            </motion.div>
            
            <motion.div 
              className="md:pt-32 relative pl-10 pb-10"
              variants={itemVariants}
            >
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center transform -translate-x-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Global Expansion</h3>
              <p className="text-gray-300">Expanded operations to 6 continents, building strategic partnerships with leading companies and establishing key logistics hubs worldwide.</p>
            </motion.div>
            
            <motion.div 
              className="relative pl-10 pb-10 md:text-right md:pl-0 md:pr-10"
              variants={itemVariants}
            >
              <div className="absolute left-0 md:left-auto md:right-0 top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center transform md:translate-x-4 -translate-x-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Technological Revolution</h3>
              <p className="text-gray-300">Pioneered digital tracking and logistics management systems that set new industry standards for transparency and efficiency.</p>
            </motion.div>
            
            <motion.div 
              className="md:pt-32 relative pl-10"
              variants={itemVariants}
            >
              <div className="absolute left-0 top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center transform -translate-x-4">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Today's Excellence</h3>
              <p className="text-gray-300">Now a global leader processing over 1 million shipments annually with 99.7% customer satisfaction and an ever-growing network of partners.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
