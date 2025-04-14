import { motion } from 'framer-motion';

const Timeline = () => {
  const timelineItems = [
    {
      year: "1995",
      title: "Company Founded",
      description: "Started with a single vessel and a vision to transform shipping logistics through technology and exceptional service.",
      color: "border-[#2563eb]"
    },
    {
      year: "2005",
      title: "Global Expansion",
      description: "Expanded operations to three continents and established our first international logistics hub in Singapore.",
      color: "border-[#0ea5e9]"
    },
    {
      year: "2015",
      title: "Digital Transformation",
      description: "Launched our proprietary tracking platform and mobile app, revolutionizing how clients monitor shipments.",
      color: "border-[#0f2549]"
    },
    {
      year: "2020",
      title: "Sustainability Initiative",
      description: "Committed to carbon-neutral shipping with the launch of our Green Fleet program and renewable energy investments.",
      color: "border-[#2563eb]/70"
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Introduced AI-powered logistics optimization and predictive analytics, setting new industry standards for efficiency.",
      color: "border-[#f59e0b]"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Our Journey</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"></div>
        </motion.div>
        
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {timelineItems.map((item, index) => (
            <motion.div 
              key={index}
              className={`relative pl-12 ${index !== timelineItems.length - 1 ? 'pb-12' : ''} timeline-item`}
              variants={itemVariants}
              style={{
                position: 'relative'
              }}
            >
              <div 
                className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center"
              >
                <span className="text-white font-bold">{item.year}</span>
              </div>
              {index !== timelineItems.length - 1 && (
                <div 
                  className="absolute left-[19px] top-[32px] bottom-[-30px] w-[2px] bg-gray-200"
                ></div>
              )}
              <div className={`bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border-l-4 ${item.color}`}>
                <h3 className="text-xl font-bold text-[#0f2549] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
