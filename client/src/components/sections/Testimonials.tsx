import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alexandra Chen",
    role: "Global Sourcing Director, TechGlobal Inc.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "Baal Krishna Shipping & Logistics transformed our supply chain with their innovative tracking technology and reliable service. We reduced transit times by 28% and improved customer satisfaction significantly."
  },
  {
    name: "Robert Martinez",
    role: "Supply Chain Manager, Retail Solutions Corp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "The customer service at Baal Krishna Shipping & Logistics is unmatched. When we faced critical delays due to unforeseen weather conditions, their team worked around the clock to find alternative routes and saved our product launch."
  },
  {
    name: "Sarah Johnson",
    role: "COO, GreenEarth Products",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=128&h=128&q=80",
    text: "As a sustainable products company, Baal Krishna Shipping & Logistics's carbon-neutral shipping options aligned perfectly with our values. Their commitment to environmental responsibility and operational excellence makes them our partner of choice."
  }
];

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Client Feedback</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="overflow-hidden">
            <motion.div 
              className="flex"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-white p-8 rounded-xl shadow-lg">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 rounded-full overflow-hidden mr-4">
                        <img 
                          src={testimonial.image}
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-[#0f2549]">{testimonial.name}</h4>
                        <p className="text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto">
                        <Quote className="h-12 w-12 text-[#0ea5e9]/20" />
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#f59e0b]" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button 
                key={index}
                className={`w-3 h-3 rounded-full ${currentSlide === index ? 'bg-[#0ea5e9]' : 'bg-gray-300'}`} 
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          
          {/* Navigation arrows */}
          <button 
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-[#0f2549]" />
          </button>
          <button 
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg flex items-center justify-center focus:outline-none"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5 text-[#0f2549]" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
