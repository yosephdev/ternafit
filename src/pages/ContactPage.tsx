import React, { FormEvent, useState } from 'react';
import NetlifyForm from '../components/NetlifyForm';
import { useLanguage } from '../contexts/LanguageContext';

const ContactPage: React.FC = () => {
  const { t } = useLanguage();
  const organizationName = "Ternafit";
  const contactEmail = "info@ternafit.org";

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

    const form = event.currentTarget;
    const formData = new FormData(form);
    
    try {
      // Create form data for URL-encoded submission
      const formDataObj = {
        'form-name': 'contact',
        name: formData.get('name') || '',
        email: formData.get('email') || '',
        subject: formData.get('subject') || 'New Contact Form Submission',
        message: formData.get('message') || ''
      };

      console.log('Submitting form with data:', formDataObj);

      // Determine if we're in development or production
      const isLocalDevelopment = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
      
      let response: Response;
      
      if (isLocalDevelopment) {
        // In development, log the form data and simulate success
        console.log('Running in development mode - form data:', formDataObj);
        
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Return a mock success response
        response = new Response(JSON.stringify({ success: true }), {
          status: 200,
          headers: { 'Content-Type': 'application/json' }
        });
      } else {
        // In production, submit to Netlify Forms
        response = await fetch('/', {
          method: 'POST',
          headers: { 
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          },
          body: new URLSearchParams(formDataObj as Record<string, string>).toString()
        });
      }

      console.log('Response status:', response.status, response.statusText);
      
      // Get the response text first
      const responseText = await response.text();
      console.log('Response text:', responseText);

      // Check if response is OK (status 200-299)
      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(t('contact.form.submitSuccess'));
        setFormData({ name: '', email: '', subject: '', message: '' });
        form.reset();
      } else {
        // Try to parse error message from response
        let errorMessage = `Form submission failed with status: ${response.status} ${response.statusText}`;
        try {
          if (responseText) {
            try {
              const parsedError = JSON.parse(responseText);
              errorMessage = parsedError.error || errorMessage;
            } catch (e) {
              // If not JSON, use the response text as is
              errorMessage = responseText || errorMessage;
            }
          }
        } catch (e) {
          console.error('Error processing error response:', e);
        }
        console.error('Form submission error details:', {
          status: response.status,
          statusText: response.statusText,
          headers: Object.fromEntries(response.headers.entries()),
          body: responseText
        });
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setSubmitMessage(error instanceof Error ? error.message : t('contact.form.submitError'));
      
      // Log additional error details
      if (error instanceof Error) {
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-muted py-14">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl font-serif font-bold mb-4 text-gray-800">{t('contact.hero.title')}</h1>
              <p className="text-lg text-gray-600">{t('contact.hero.subtitle')}</p>
            </div>
            <div className="flex justify-center">
              <img 
                src="/images/figures/gebrehiwot-baykedagn.webp" 
                alt="Contact us to get involved" 
                className="rounded-lg shadow-lg max-w-sm w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main content container */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="text-center md:text-left">
                <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
                  {t('contact.title')}
                </h1>
                <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                  {t('contact.subtitle')}
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-gray-600">{t('contact.address.title')}</h3>
                  <p className="text-gray-500">{t('contact.address.line1')}</p>
                  <p className="text-gray-500">{t('contact.address.line2')}</p>
                  <p className="text-gray-500">{t('contact.address.line3')}</p>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-600">{t('contact.email.title')}</h3>
                  <a href={`mailto:${contactEmail}`} className="text-terracotta-600 hover:underline">
                    {contactEmail}
                  </a>
                </div>
                <div>
                  <h3 className="text-lg font-medium text-gray-600">{t('contact.officeHours.title')}</h3>
                  <p className="text-gray-500">{t('contact.officeHours.desc')}</p>
                </div>
                <p className="text-gray-500 text-sm pt-2">
                  {t('contact.form.intro')}
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg border border-gray-200">
              <NetlifyForm 
                name="contact"
                method="POST"
                data-netlify={true}
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <input type="hidden" name="form-name" value="contact" />
                <div className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                </div>
                <input type="hidden" name="form-action" value="contact" />
                <div className="hidden">
                  <label>Don't fill this out if you're human: <input name="bot-field" /></label>
                  <input type="text" name="_gotcha" style={{display: 'none'}} />
                </div>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">{t('contact.form.fullName')}</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.name}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder={t('contact.form.placeholder.fullName')}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">{t('contact.form.emailAddress')}</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.email}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder={t('contact.form.placeholder.email')}
                  />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">{t('contact.form.subject')}</label>
                  <input 
                    type="text" 
                    name="subject" 
                    id="subject" 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.subject}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder={t('contact.form.placeholder.subject')}
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">{t('contact.form.message')}</label>
                  <textarea 
                    name="message" 
                    id="message" 
                    rows={4} 
                    required 
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    value={formData.message}
                    onChange={handleInputChange}
                    disabled={isSubmitting}
                    placeholder={t('contact.form.placeholder.message')}
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
              </NetlifyForm>
              {submitStatus !== 'idle' && (
                <div className={`mt-4 p-3 rounded-md text-sm ${submitStatus === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  <p>{submitMessage}</p>
                </div>
              )}
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-4 text-center">{t('contact.location.title')}</h3>
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
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
