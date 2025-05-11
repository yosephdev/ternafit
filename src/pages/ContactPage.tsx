import React, { useState } from 'react';

const ContactPage: React.FC = () => {
  const organizationName = "Ternafit";
  const contactEmail = "info@ternafit.org";
  const contactAddress = "Jungfrugatan 1F, 64131, Katrineholm, Sweden";
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

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setSubmitMessage(result.message || "Your message has been sent successfully!");
        setFormData({ name: '', email: '', subject: '', message: '' }); // Clear form
      } else {
        setSubmitStatus('error');
        setSubmitMessage(result.message || "An error occurred. Please try again.");
      }
    } catch (error) {
      console.error("Contact form submission error:", error);
      setSubmitStatus('error');
      setSubmitMessage("A network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-4xl font-bold mb-8 text-center">Contact Us</h1>
      <p className="text-lg text-center mb-10">
        We'd love to hear from you! Whether you have a question about our services, 
        need assistance, or just want to give feedback, please don't hesitate to reach out.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Contact Information Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Get in Touch</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-700">Email</h3>
              <a href={`mailto:${contactEmail}`} className="text-indigo-600 hover:text-indigo-800 transition duration-300">{contactEmail}</a>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Address</h3>
              <p className="text-gray-600">{organizationName}</p>
              <p className="text-gray-600">{contactAddress}</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-700">Office Hours</h3>
              <p className="text-gray-600">{officeHours}</p>
              <p className="text-gray-600">Saturday - Sunday: Closed</p>
            </div>
          </div>
          
          {/* Google Maps Embed */}
          <div className="mt-8">
            <h3 className="text-lg font-medium text-gray-700 mb-2">Our Location</h3>
            <div className="aspect-w-16 aspect-h-9 rounded-md overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4110.544134777508!2d16.215963376970155!3d58.993906237824675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465eb7ee8655c21d%3A0x5b3a8a8192dd48fb!2sJungfrugatan%201F%2C%20641%2031%20Katrineholm!5e0!3m2!1sen!2sse!4v1746974613698!5m2!1sen!2sse" 
                width="100%" 
                height="100%" 
                style={{ border:0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location of Ternafit"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-gray-50 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="name" 
                id="name" 
                required 
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your Full Name"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input 
                type="email" 
                name="email" 
                id="email" 
                required 
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="you@example.com"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                name="subject" 
                id="subject" 
                required
                value={formData.subject}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Reason for contacting"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                name="message" 
                id="message" 
                rows={5} 
                required 
                value={formData.message}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Your message here..."
                disabled={isSubmitting}
              ></textarea>
            </div>
            <div>
              <button 
                type="submit" 
                className="w-full inline-flex justify-center py-3 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
          {submitStatus !== 'idle' && (
            <p className={`mt-4 text-sm text-center ${submitStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>
              {submitMessage}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
