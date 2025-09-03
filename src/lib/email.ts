import emailjs from '@emailjs/browser';

// EmailJS configuration
export const emailConfig = {
  serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Initialize EmailJS
export function initEmailJS() {
  if (emailConfig.publicKey) {
    emailjs.init(emailConfig.publicKey);
  }
}

// Send email function
export async function sendEmail(templateParams: Record<string, string | number>) {
  if (!emailConfig.serviceId || !emailConfig.templateId || !emailConfig.publicKey) {
    throw new Error('EmailJS configuration is incomplete. Please check your environment variables.');
  }

  try {
    const result = await emailjs.send(
      emailConfig.serviceId,
      emailConfig.templateId,
      templateParams,
      emailConfig.publicKey
    );
    
    return result;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw error;
  }
}