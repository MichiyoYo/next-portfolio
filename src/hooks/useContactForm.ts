'use client';

import { useState, useCallback } from 'react';
import { validateForm, contactFormSchema } from '@/lib/validators';

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  [key: string]: string;
}

export interface FormStatus {
  type: 'idle' | 'loading' | 'success' | 'error';
  message?: string;
  error?: string | unknown;
}

export interface ContactFormReturn {
  formData: ContactFormData;
  errors: { [key: string]: string };
  status: FormStatus;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  resetForm: () => void;
  clearErrors: () => void;
}

const initialFormData: ContactFormData = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

const initialStatus: FormStatus = { type: 'idle' };

export function useContactForm(
  onSubmit?: (data: ContactFormData) => Promise<void>
): ContactFormReturn {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  // Handle input changes
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      setFormData((prev) => ({ ...prev, [name]: value }));

      // Clear error for this field when user starts typing
      if (errors[name]) {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors[name];
          return newErrors;
        });
      }
    },
    [errors]
  );

  // Submit form
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Validate form
      const validation = validateForm(formData, contactFormSchema);

      if (!validation.isValid) {
        setErrors(validation.errors);
        return;
      }

      setStatus({ type: 'loading' });
      setErrors({});

      try {
        if (onSubmit) {
          await onSubmit(formData);
        } else {
          // Default form submission behavior
          await defaultFormSubmission(formData);
        }

        setStatus({
          type: 'success',
          message:
            "Thank you! Your message has been sent successfully. I'll get back to you within 24 hours.",
        });

        // Reset form on success
        setFormData(initialFormData);
      } catch (error) {
        setStatus({
          type: 'error',
          message:
            'Sorry, there was an error sending your message. Please try again or reach out via email directly.',
          error: error,
        });
      }
    },
    [formData, onSubmit]
  );

  // Reset form
  const resetForm = useCallback(() => {
    setFormData(initialFormData);
    setErrors({});
    setStatus(initialStatus);
  }, []);

  // Clear errors
  const clearErrors = useCallback(() => {
    setErrors({});
  }, []);

  return {
    formData,
    errors,
    status,
    handleChange,
    handleSubmit,
    resetForm,
    clearErrors,
  };
}

// Default form submission (can be replaced with actual API call)
async function defaultFormSubmission(data: ContactFormData): Promise<void> {
  // Simulate API call
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // In a real app, you would send the data to your backend:
  // const response = await fetch('/api/contact', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data),
  // });
  //
  // if (!response.ok) {
  //   throw new Error('Failed to send message');
  // }

  console.log('Form submitted with data:', data);
}
