import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const organizationName = "Ternafit";
  const contactEmail = "info@ternafit.org";
  const contactAddress = "Jungfrugatan 1F, 641 31, Katrineholm, Sweden";
  const officeHours = "Monday - Friday: 9:00 AM - 5:00 PM (CET)";

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setSubmitMessage('');

    try {
      const response = await fetch('/.netlify/functions/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmitStatus('success');
        setSubmitMessage(result.message || t('contact.form.success'));
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        let errorMessage = 'Failed to send message. Server error.';
        try {
          const errorResult = await response.json();
          errorMessage = errorResult.message || `Error: ${response.status} - ${response.statusText}`;
        } catch (e) {
          errorMessage = `Error: ${response.status} - ${response.statusText}`;
          console.error('Contact form submission error: Could not parse error response as JSON', e);
        }
        setSubmitStatus('error');
        setSubmitMessage(errorMessage);
        console.error('Contact form submission error:', errorMessage);
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setSubmitStatus('error');
      const message = error instanceof Error ? error.message : 'An unexpected error occurred.';
      setSubmitMessage(`Failed to send message. ${message}`);
    }
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold text-center text-gray-800">{t('contact.hero.title')}</h1>
          <p className="text-center mt-4 text-lg max-w-2xl mx-auto text-gray-600">{t('contact.hero.subtitle')}</p>
        </div>
      </section>

      {/* Main content container */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-white p-8 sm:p-10 rounded-xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact Information Section */}
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700">{organizationName}</h2>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Email</h3>
                <a href={`mailto:${contactEmail}`} className="text-terracota-600 hover:text-terracota-700 hover:underline transition duration-150 ease-in-out">{contactEmail}</a>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Address</h3>
                <p className="text-gray-500">{contactAddress}</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-gray-600">Office Hours</h3>
                <p className="text-gray-500">{officeHours}</p>
              </div>
              <p className="text-gray-500 text-sm">
                Use the form to send us a message directly, or use the contact details provided. We aim to respond within 24-48 business hours.
              </p>
            </div>

            {/* Contact Form Section */}
            <div className="bg-gray-50 p-6 sm:p-8 rounded-lg shadow-inner">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Your Full Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Subject</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Regarding..."
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder="Your message here..."
                  />
                </div>
                <div>
                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-terracotta hover:bg-terracotta/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-terracotta disabled:bg-gray-400 disabled:cursor-not-allowed transition duration-150 ease-in-out"
                  >
                    {isSubmitting ? t('common.loading') : t('common.submit')}
                  </button>
                </div>
              </form>
              {submitStatus !== 'idle' && (
                <div className={`mt-4 p-3 rounded-md text-sm ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <p>{submitMessage}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.544134777508!2d16.215963376970155!3d58.993906237824675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465eb7ee8655c21d%3A0x5b3a8a8192dd48fb!2sJungfrugatan%201F%2C%20641%2031%20Katrineholm!5e0!3m2!1sen!2sse!4v1746974613698!5m2!1sen!2sse" 
                width="100%" 
                height="450" 
                style={{ border:0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Ternafit"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
