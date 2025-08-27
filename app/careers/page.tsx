
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from 'react';

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState('');
  const [applicationData, setApplicationData] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resume: null as File | null
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const culture = [
    {
      title: 'Learning',
      description: 'Continuous skill development through training programs, conferences, and hands-on experience with cutting-edge technologies.',
      icon: 'ri-graduation-cap-line'
    },
    {
      title: 'Growth',
      description: 'Clear career progression paths with mentorship programs and opportunities to lead high-impact public sector projects.',
      icon: 'ri-line-chart-line'
    },
    {
      title: 'Diversity',
      description: 'Inclusive workplace culture that values different perspectives and backgrounds to build better technology solutions.',
      icon: 'ri-team-line'
    },
    {
      title: 'Impact',
      description: 'Work on meaningful projects that directly improve citizen services and modernize public infrastructure.',
      icon: 'ri-heart-line'
    }
  ];

  const jobs = [
    {
      id: 'software-engineer',
      title: 'Software Engineer',
      department: 'Engineering',
      location: 'Faridabad / Remote',
      type: 'Full-time',
      description: 'Design and develop scalable applications for government agencies using modern frameworks and best practices.',
      responsibilities: [
        'Build responsive web applications using React, Angular, or Vue.js',
        'Develop RESTful APIs and microservices using Node.js or Java',
        'Collaborate with cross-functional teams on project requirements',
        'Ensure code quality through testing and code reviews'
      ]
    },
    {
      id: 'ui-ux-designer',
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Faridabad / Remote',
      type: 'Full-time',
      description: 'Create intuitive, accessible user experiences for government digital services and citizen-facing applications.',
      responsibilities: [
        'Design user interfaces for web and mobile applications',
        'Conduct user research and usability testing sessions',
        'Create wireframes, prototypes, and design systems',
        'Ensure accessibility compliance (WCAG 2.2 AA standards)'
      ]
    },
    {
      id: 'project-manager',
      title: 'Project Manager',
      department: 'Operations',
      location: 'Faridabad',
      type: 'Full-time',
      description: 'Lead IT implementation projects from conception to deployment, ensuring timely delivery and stakeholder satisfaction.',
      responsibilities: [
        'Manage project timelines, budgets, and resource allocation',
        'Coordinate between technical teams and government clients',
        'Monitor project progress and identify potential risks',
        'Facilitate agile ceremonies and maintain project documentation'
      ]
    }
  ];

  const benefits = [
    'Competitive salary with performance bonuses',
    'Comprehensive health and life insurance',
    'Professional development budget for training',
    'Flexible work arrangements and remote options',
    'Paid time off and festival holidays',
    'Modern workspace with latest technology'
  ];

  const handleApply = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setShowApplicationForm(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setApplicationData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setApplicationData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setShowApplicationForm(false);
    setApplicationData({
      name: '',
      email: '',
      phone: '',
      experience: '',
      resume: null
    });
    
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(6, 182, 212, 0.1)), url('https://unsplash.it/1920/800?random=team')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              Join Our <span className="text-teal-600">Team</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Join a team building digital public infrastructure. Be part of innovative IT projects that transform how governments serve their citizens through technology.
            </p>
            <div className="flex justify-center">
              <div className="w-24 h-1 bg-teal-500 rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We foster an environment where technology professionals can thrive while contributing to meaningful public sector transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {culture.map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-xl p-8 text-center space-y-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300">
                  <i className={`${item.icon} text-2xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover opportunities to advance your career while building technology solutions that serve the public good.
            </p>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="space-y-6">
            {jobs.map((job, index) => (
              <div
                key={job.id}
                className="bg-gray-50 rounded-lg border border-gray-200 hover:border-teal-300 transition-all duration-300"
              >
                <div 
                  className="p-6 cursor-pointer hover:bg-gray-100 transition-colors duration-300"
                  onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-gray-900 hover:text-teal-600 transition-colors duration-300">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <i className="ri-building-line mr-1"></i>
                          {job.department}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-map-pin-line mr-1"></i>
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <i className="ri-time-line mr-1"></i>
                          {job.type}
                        </span>
                      </div>
                      <p className="text-gray-600">{job.description}</p>
                    </div>
                    <i className={`ri-${expandedJob === job.id ? 'arrow-up' : 'arrow-down'}-s-line text-xl text-teal-600 transition-transform duration-300`}></i>
                  </div>
                </div>

                {expandedJob === job.id && (
                  <div className="border-t border-gray-200 p-6 bg-white">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities</h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <i className="ri-arrow-right-line text-teal-600 mt-0.5"></i>
                                <span className="text-gray-600 text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="font-semibold text-gray-900 mb-4">Ready to Apply?</h4>
                        <p className="text-gray-600 mb-6 text-sm">
                          Join our team and contribute to meaningful public sector IT projects that make a difference.
                        </p>
                        <button
                          onClick={() => handleApply(job.title)}
                          className="w-full bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-semibold hover:scale-105 hover:shadow-lg whitespace-nowrap"
                        >
                          Apply Now
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in supporting our team members with comprehensive benefits and a positive work environment.
            </p>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 flex items-center space-x-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-10 h-10 flex items-center justify-center bg-teal-100 rounded-lg group-hover:bg-teal-200 transition-colors duration-300">
                  <i className="ri-check-line text-teal-600"></i>
                </div>
                <span className="text-gray-700 group-hover:text-teal-600 transition-colors duration-300 text-sm">
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />

      {/* Application Form Modal */}
      {showApplicationForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-gray-900">Apply for {selectedJob}</h3>
              <button
                onClick={() => setShowApplicationForm(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <i className="ri-close-line text-xl"></i>
              </button>
            </div>

            <form id="job-application" onSubmit={handleSubmitApplication} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={applicationData.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={applicationData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={applicationData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Years of Experience *
                </label>
                <input
                  type="text"
                  name="experience"
                  value={applicationData.experience}
                  onChange={handleInputChange}
                  placeholder="e.g., 3 years"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume/CV *
                </label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-sm"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Accepted formats: PDF, DOC, DOCX (Max 5MB)
                </p>
              </div>

              <div className="flex space-x-4 pt-4">
                <button
                  type="button"
                  onClick={() => setShowApplicationForm(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-300 font-semibold text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold text-sm"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Success Message */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-8 w-full max-w-md text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <i className="ri-check-line text-2xl text-green-600"></i>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Application Submitted!</h3>
            <p className="text-gray-600 mb-6">
              Thank you for your application. Our HR team will connect with you shortly.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
