import { apiRequest } from '@/lib/queryClient';

export const submitContactForm = async (data: {
    name: string;
    email: string;
    subject: string;
    message: string;
    recaptchaToken: string;
  }) => {
    try {
      const response = await apiRequest('POST', '/api/Contact', data);
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to submit form');
      }
  
      return response.json();
    } catch (error) {
      console.error('Contact form submission error:', error);
      throw error;
    }
  };