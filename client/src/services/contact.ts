import { apiRequest } from '@/lib/queryClient';

export const submitContactForm = async (data: {
  name: string;
  email: string;
  subject: string;
  message: string;
}) => {
  const response = await apiRequest(
    'POST',
    '/api/Contact',
    data
  );
  return response.json();
};