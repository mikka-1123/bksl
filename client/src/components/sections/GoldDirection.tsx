import { motion } from 'framer-motion';

const GoldDirection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f59e0b]/90 to-[#eab308]/80 -z-10"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1505778276668-26b3ff7af103?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-20 -z-20"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="max-w-3xl mx-auto text-center text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Charting the Gold Direction</h2>
          <p className="text-xl mb-8">
            As we navigate into the future, our compass remains fixed on innovation, sustainability, and exceptional service. Join us on this journey to redefine what's possible in global logistics.
          </p>
          <motion.a 
            href="#contact" 
            className="inline-block px-8 py-4 bg-white text-[#0f2549] font-bold rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Partner With Us
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GoldDirection;
