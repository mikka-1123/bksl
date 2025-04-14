import { createContext, useContext, ReactNode } from 'react';
import { apiRequest } from '@/lib/queryClient';

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

interface FormContextType {
  submitContactForm: (data: ContactFormData) => Promise<void>;
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const submitContactForm = async (data: ContactFormData) => {
    await apiRequest('POST', '/api/contact', data);
  };

  return (
    <FormContext.Provider value={{ submitContactForm }}>
      {children}
    </FormContext.Provider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (context === undefined) {
    throw new Error('useFormContext must be used within a FormProvider');
  }
  return context;
};
