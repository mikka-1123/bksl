import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters long' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters long' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters long' })
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      await apiRequest('POST', '/api/contact', data);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
        variant: "default",
      });
      reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f2549]">Contact Us</h2>
          <div className="mt-4 h-1 w-20 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] mx-auto rounded-full"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or ready to discuss your shipping needs? Our team of experts is ready to help you navigate the complexities of global logistics.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div 
            className="bg-white p-8 rounded-xl shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-bold text-[#0f2549] mb-6">Send Us a Message</h3>
            
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    id="name"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#2563eb]'} focus:ring-2 focus:border-[#2563eb] transition-colors`}
                    placeholder="Your name" 
                    {...register('name')}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input 
                    type="email" 
                    id="email"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#2563eb]'} focus:ring-2 focus:border-[#2563eb] transition-colors`}
                    placeholder="your.email@example.com"
                    {...register('email')}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    className={`w-full px-4 py-3 rounded-lg border ${errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#2563eb]'} focus:ring-2 focus:border-[#2563eb] transition-colors`}
                    placeholder="How can we help you?"
                    {...register('subject')}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message"
                    rows={4}
                    className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-[#2563eb]'} focus:ring-2 focus:border-[#2563eb] transition-colors`}
                    placeholder="Please provide details about your inquiry..."
                    {...register('message')}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button 
                  type="submit" 
                  className="w-full px-6 py-3 bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          </motion.div>
          
          <div>
            <motion.div 
              className="bg-white p-8 rounded-xl shadow-lg mb-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold text-[#0f2549] mb-6">Contact Information</h3>
              
              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <Phone className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f2549]">Phone</h4>
                    <p className="text-gray-600">+1 (800) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <Mail className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f2549]">Email</h4>
                    <p className="text-gray-600">contact@bklogiship.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#2563eb] flex items-center justify-center mt-1">
                    <MapPin className="h-5 w-5 text-white" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-[#0f2549]">Headquarters</h4>
                    <p className="text-gray-600">
                      123 Logistics Way<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="bg-white p-4 rounded-xl shadow-lg h-64 md:h-80"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {/* Google Map would be embedded here */}
              <div className="w-full h-full bg-gray-200 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618606758667-2523a330da83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Map Location" 
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
