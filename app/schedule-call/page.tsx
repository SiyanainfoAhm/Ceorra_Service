'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function ScheduleCall() {
  const [scheduleData, setScheduleData] = useState({
    name: '',
    email: '',
    organization: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    topic: ''
  });
  const [isScheduling, setIsScheduling] = useState(false);

  const handleScheduleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setScheduleData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleScheduleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsScheduling(true);
    
    setTimeout(() => {
      console.log('Schedule call form submitted:', scheduleData);
      alert('Call scheduled successfully! We\'ll send you a calendar invitation within 2 hours.');
      
      setScheduleData({
        name: '',
        email: '',
        organization: '',
        phone: '',
        preferredDate: '',
        preferredTime: '',
        topic: ''
      });
      setIsScheduling(false);
    }, 1000);
  };

  const timeSlots = [
    { value: '09:00', label: '9:00 AM' },
    { value: '10:00', label: '10:00 AM' },
    { value: '11:00', label: '11:00 AM' },
    { value: '12:00', label: '12:00 PM' },
    { value: '14:00', label: '2:00 PM' },
    { value: '15:00', label: '3:00 PM' },
    { value: '16:00', label: '4:00 PM' },
    { value: '17:00', label: '5:00 PM' }
  ];

  const consultationTopics = [
    'Digital Transformation Strategy',
    'Cloud Migration Planning',
    'Cybersecurity Assessment',
    'Custom Application Development',
    'AI & Machine Learning Implementation',
    'Data Analytics & Business Intelligence',
    'DevOps & Automation',
    'IT Infrastructure Modernization',
    'System Integration Services',
    'General IT Consultation'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20business%20consultation%20meeting%2C%20government%20technology%20discussion%2C%20modern%20conference%20room%2C%20digital%20transformation%20planning%20session%2C%20teal%20color%20accents%2C%20executive%20meeting%20environment&width=1920&height=800&seq=schedule-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Schedule a Consultation
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Book a personalized consultation with our IT experts to discuss your digital transformation needs and explore how we can help modernize your government operations.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="ri-user-voice-line text-3xl text-white mb-2"></i>
                <div className="text-lg font-semibold text-white">Expert Consultation</div>
                <div className="text-teal-100 text-sm">Direct access to senior IT consultants</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="ri-calendar-check-line text-3xl text-white mb-2"></i>
                <div className="text-lg font-semibold text-white">Flexible Scheduling</div>
                <div className="text-teal-100 text-sm">Choose your preferred time and date</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <i className="ri-gift-line text-3xl text-white mb-2"></i>
                <div className="text-lg font-semibold text-white">Free Assessment</div>
                <div className="text-teal-100 text-sm">Complimentary initial consultation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Book Your Consultation</h2>
              <p className="text-gray-600">Fill out the form below and we'll send you a calendar invitation within 2 hours.</p>
            </div>
            
            <form id="schedule-consultation-form" onSubmit={handleScheduleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    value={scheduleData.name}
                    onChange={handleScheduleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    value={scheduleData.email}
                    onChange={handleScheduleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
                    Organization / Agency
                  </label>
                  <input
                    type="text"
                    name="organization"
                    id="organization"
                    value={scheduleData.organization}
                    onChange={handleScheduleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your organization name"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    required
                    value={scheduleData.phone}
                    onChange={handleScheduleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    name="preferredDate"
                    id="preferredDate"
                    required
                    value={scheduleData.preferredDate}
                    onChange={handleScheduleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                
                <div>
                  <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                    Preferred Time *
                  </label>
                  <select
                    name="preferredTime"
                    id="preferredTime"
                    required
                    value={scheduleData.preferredTime}
                    onChange={handleScheduleChange}
                    className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot) => (
                      <option key={slot.value} value={slot.value}>
                        {slot.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="consultationTopic" className="block text-sm font-medium text-gray-700 mb-2">
                  Consultation Topic
                </label>
                <select
                  name="consultationTopic"
                  id="consultationTopic"
                  value={scheduleData.topic}
                  onChange={handleScheduleChange}
                  className="w-full px-4 py-3 pr-8 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a consultation topic</option>
                  {consultationTopics.map((topic) => (
                    <option key={topic} value={topic}>
                      {topic}
                    </option>
                  ))}
                </select>
              </div>
              
              <div>
                <label htmlFor="additionalInfo" className="block text-sm font-medium text-gray-700 mb-2">
                  Additional Information
                </label>
                <textarea
                  name="additionalInfo"
                  id="additionalInfo"
                  rows={4}
                  value={scheduleData.topic}
                  onChange={handleScheduleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us about your specific needs, current challenges, or any questions you'd like to discuss during the consultation..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isScheduling}
                className="w-full bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2 whitespace-nowrap"
              >
                {isScheduling ? (
                  <>
                    <i className="ri-loader-line animate-spin"></i>
                    <span>Scheduling...</span>
                  </>
                ) : (
                  <>
                    <i className="ri-calendar-check-line"></i>
                    <span>Schedule Consultation</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What to Expect</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our consultation process is designed to understand your unique needs and provide actionable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-chat-3-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Discovery Call</h3>
              <p className="text-gray-600">
                We'll discuss your current IT landscape, challenges, and goals to understand your specific requirements.
              </p>
              <div className="text-sm text-teal-600 font-medium">30-45 minutes</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-search-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Assessment</h3>
              <p className="text-gray-600">
                Our experts will analyze your needs and provide initial recommendations for your digital transformation.
              </p>
              <div className="text-sm text-teal-600 font-medium">Real-time insights</div>
            </div>

            <div className="bg-white rounded-xl p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto">
                <i className="ri-roadmap-line text-2xl text-teal-600"></i>
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Next Steps</h3>
              <p className="text-gray-600">
                Receive a customized roadmap with actionable next steps and timeline for your IT modernization project.
              </p>
              <div className="text-sm text-teal-600 font-medium">Follow-up within 24hrs</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Common questions about our consultation process.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Is the consultation really free?",
                answer: "Yes, absolutely! The initial consultation is completely free with no obligations. It's our way of understanding your needs and showing how we can help."
              },
              {
                question: "How long does the consultation take?",
                answer: "Most consultations take 30-45 minutes. This gives us enough time to understand your challenges and provide meaningful insights."
              },
              {
                question: "What should I prepare for the consultation?",
                answer: "Come prepared to discuss your current IT challenges, goals, and any specific pain points. Having key stakeholders available is also helpful."
              },
              {
                question: "Can we schedule outside of regular business hours?",
                answer: "Yes, we offer flexible scheduling including early morning, evening, and weekend slots to accommodate your schedule."
              },
              {
                question: "What happens after the consultation?",
                answer: "Within 24 hours, you'll receive a summary of our discussion along with recommended next steps and a preliminary project timeline."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}