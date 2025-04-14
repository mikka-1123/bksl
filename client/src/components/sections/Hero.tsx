import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-blue-50 to-transparent -z-10"></div>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f2549] leading-tight">
              Efficient and Reliable 
              <span className="bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] bg-clip-text text-transparent"> Shipping Solutions</span>
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              With over 30 years of experience, we've been transforming global logistics with technology-driven solutions that deliver results.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 bg-white text-[#0f2549] border border-[#0f2549] rounded-full font-medium hover:bg-[#0f2549]/5 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Talk to Us
              </motion.a>
            </div>
            <div className="mt-10 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=48&h=48&q=80" alt="User" className="w-8 h-8 rounded-full border-2 border-white" />
              </div>
              <span className="text-sm text-gray-600">Trusted by <span className="font-medium text-[#0f2549]">2,000+</span> businesses worldwide</span>
            </div>
          </motion.div>
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1553413077-190dd305871c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Shipping and Logistics Dashboard" 
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f2549]/40 to-transparent mix-blend-multiply"></div>
            </div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#0ea5e9]/20 rounded-full filter blur-3xl -z-10"></div>
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#2563eb]/20 rounded-full filter blur-3xl -z-10"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
