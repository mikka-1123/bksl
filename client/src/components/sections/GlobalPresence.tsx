import { motion } from 'framer-motion';
import MapComponent from '../MapComponent';

// Countries where services are offered - preserved for reference but used in MapComponent instead
const serviceLocations = [
  { name: "United States", lat: 37.0902, lng: -95.7129 },
  { name: "Canada", lat: 56.1304, lng: -106.3468 },
  { name: "United Kingdom", lat: 55.3781, lng: -3.4360 },
  { name: "Germany", lat: 51.1657, lng: 10.4515 },
  { name: "France", lat: 46.2276, lng: 2.2137 },
  { name: "Australia", lat: -25.2744, lng: 133.7751 },
  { name: "Japan", lat: 36.2048, lng: 138.2529 },
  { name: "China", lat: 35.8617, lng: 104.1954 },
  { name: "India", lat: 20.5937, lng: 78.9629 },
  { name: "Brazil", lat: -14.2350, lng: -51.9253 },
  { name: "South Africa", lat: -30.5595, lng: 22.9375 },
  { name: "United Arab Emirates", lat: 23.4241, lng: 53.8478 }
];

const GlobalPresence = () => {
  return (
    <section className="py-12 md:py-16 bg-white text-[#0f2549] relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-6 md:mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl md:text-4xl font-bold">Our Global Presence</h2>
          <div className="mt-3 h-1 w-16 md:w-20 bg-[#0ea5e9] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-8 md:mb-10 px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-base md:text-lg text-gray-600">
            Delivering excellence across the globe with our comprehensive logistics network spanning multiple continents.
          </p>
        </motion.div>
        
        {/* World Map with clear container */}
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mx-auto max-w-5xl">
          <div className="p-0 relative">
            <MapComponent />
          </div>
          
          {/* Instructions text */}
          <div className="text-center py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              Click on a location marker to view regional statistics
            </p>
          </div>
        </div>
        
        {/* Additional information below the map */}
        <motion.div 
          className="mt-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-sm md:text-base text-gray-600">
            Our strategic presence in key global locations enables us to provide efficient, reliable logistics solutions worldwide. With operational centers across all major continents, we ensure seamless coordination and timely delivery of your goods.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GlobalPresence; 