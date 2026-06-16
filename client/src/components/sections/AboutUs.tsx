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
    <section className="py-16 md:py-20 bg-[#0f2549] text-white relative overflow-hidden" id="about-us">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1566576874353-ed54a6f19537?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-10"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div  className="text-center mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5 }}>
          <h2 className="text-2xl md:text-4xl font-bold">About Us</h2>
          <div className="mt-3 h-1 w-16 md:w-20 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div className="max-w-3xl mx-auto text-center mb-8 md:mb-12 px-4" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-base md:text-lg text-gray-200">
            <b>Baal Krishna Logistics</b> is a trusted logistics and transportation company dedicated to providing efficient, reliable, and cost-effective supply chain solutions. We specialize in freight transportation, warehousing, distribution, cargo handling, and customized logistics services that help businesses move goods safely and on time.
          </p>
        </motion.div>
        
        <div className="mt-12 md:mt-16 relative">
          {/* <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2 bg-[#0ea5e9]/30"></div> */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-[#0ea5e9]/40 md:-translate-x-1/2"></div>
          
          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8" variants={timelineVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
            <motion.div className="relative pl-12 md:pl-0 md:pr-10 md:text-right" variants={itemVariants}>
              <div className="absolute left-0 md:left-auto md:right-[-56px] top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Growth Through Commitment</h3>
              <p className="text-gray-300">Starting as a transportation service provider, the company gradually expanded its operations by investing in infrastructure, fleet management, warehousing facilities, and advanced logistics technologies.</p>
            </motion.div>
            
            <motion.div className="relative pl-12 md:pt-0" variants={itemVariants}>
              <div className="absolute left-0 md:left-[-56px] top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Long-Term Partnerships</h3>
              <p className="text-gray-300">Our goal is not only to transport goods but also to build long-term partnerships based on trust, transparency, and service excellence.</p>
            </motion.div>
            
            <motion.div className="relative pl-12 md:pl-0 md:pr-10 md:text-right" variants={itemVariants}>
              <div className="absolute left-0 md:left-auto md:right-[-56px] top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Trusted Logistics Partner</h3>
              <p className="text-gray-300">Through consistent dedication, timely deliveries, and customer satisfaction, Baal Krishna Logistics has earned a reputation as a reliable logistics partner.</p>
            </motion.div>
            
            <motion.div className="relative pl-12 md:pt-0" variants={itemVariants}>
              <div className="absolute left-0 md:left-[-56px] top-0 w-8 h-8 rounded-full bg-[#0ea5e9] flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-white"></div>
              </div>
              <h3 className="text-xl font-bold mb-2">Future-Focused Excellence</h3>
              <p className="text-gray-300">Today, the company continues to grow by embracing innovation, sustainability, and modern logistics practices while maintaining its commitment to reliability and excellence.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
