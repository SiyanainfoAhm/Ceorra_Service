
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.message.length > 500) {
      alert('Message must be 500 characters or less.');
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log('Contact form submitted:', formData);
      alert('Thank you for your message! Our team will respond within 24 hours.');
      
      setFormData({
        name: '',
        email: '',
        organization: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const quickContacts = [
    {
      type: 'General Inquiries',
      email: 'hello@ceorra.in',
      phone: '+91 (129) 456-7890',
      icon: 'ri-question-line'
    },
    {
      type: 'Technical Support',
      email: 'support@ceorra.in',
      phone: '+91 (129) 456-7891',
      icon: 'ri-tools-line'
    },
    {
      type: 'Business Development',
      email: 'business@ceorra.in',
      phone: '+91 (129) 456-7892',
      icon: 'ri-briefcase-line'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Get in <span className="text-teal-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to modernize your IT infrastructure? Let's discuss how we can help your organization achieve digital transformation goals.
            </p>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a message</h2>
                <p className="text-gray-600 mb-8">We'll respond within 24 hours to discuss your requirements.</p>
              </div>
              
              <form id="contact-form" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Full Name *"
                    />
                  </div>
                  
                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                      placeholder="Email Address *"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Organization / Agency"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Subject *"
                  />
                </div>
                
                <div>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    maxLength={500}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project requirements..."
                  ></textarea>
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>{formData.message.length}/500 characters</span>
                    {formData.message.length > 500 && (
                      <span className="text-red-500">Message too long</span>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting || formData.message.length > 500}
                  className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
                >
                  {isSubmitting ? (
                    <>
                      <i className="ri-loader-line animate-spin"></i>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <i className="ri-send-plane-line"></i>
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach our team for IT consultation and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-map-pin-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
                    <p className="text-gray-600">
                      Ceorra Services Pvt Ltd<br />
                      Plot No. 1086, Sector 37<br />
                      Faridabad, Haryana 121003<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-phone-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 (129) 456-7890</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-mail-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@ceorra.in</p>
                  </div>
                </div>
              </div>
              
              {/* Quick Contacts */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">Department Contacts</h3>
                <div className="space-y-4">
                  {quickContacts.map((contact, index) => (
                    <div
                      key={contact.type}
                      className={`bg-white rounded-lg p-4 hover:bg-teal-50 transition-all duration-300 opacity-0 animate-fade-in-up`}
                      style={{ 
                        animationDelay: `${index * 100 + 600}ms`,
                        animationFillMode: 'forwards'
                      }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 flex items-center justify-center bg-teal-100 rounded-lg">
                          <i className={`${contact.icon} text-teal-600`}></i>
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm">{contact.type}</h4>
                          <p className="text-gray-600 text-sm">{contact.email}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Map/Image */}
            <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <img 
                src="https://unsplash.it/600/500?random=office" 
                alt="Office Location" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
