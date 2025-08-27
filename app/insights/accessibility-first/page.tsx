'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function AccessibilityFirstInsight() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm text-gray-600">
                <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">Accessibility</span>
                <span>March 15, 2024</span>
                <span>8 min read</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Accessibility First in Public Portals: Building Digital Services for Everyone
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                How government agencies can implement WCAG 2.2 AA standards from the ground up to create truly inclusive digital experiences for all citizens.
              </p>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <i className="ri-user-line text-teal-600"></i>
              </div>
              <div>
                <div className="font-semibold text-gray-900">Sarah Johnson</div>
                <div className="text-gray-600">UX Accessibility Specialist</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <img 
              src="https://readdy.ai/api/search-image?query=Accessibility%20in%20government%20digital%20services%2C%20inclusive%20web%20design%2C%20WCAG%20compliance%20interface%2C%20diverse%20users%20accessing%20government%20portal%2C%20assistive%20technology%20integration%2C%20teal%20interface%20elements&width=800&height=400&seq=accessibility-article&orientation=landscape"
              alt="Accessibility in Government Digital Services"
              className="w-full rounded-lg shadow-lg mb-8"
            />
            
            <div className="space-y-8 text-gray-700 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Foundation of Inclusive Government Services</h2>
                <p>
                  Digital accessibility in government services isn't just a legal requirement—it's a fundamental principle of equal access to public resources. When government agencies prioritize accessibility from the initial design phase, they create digital experiences that serve all citizens effectively, regardless of their abilities or the technologies they use to access information.
                </p>
                <p>
                  The Web Content Accessibility Guidelines (WCAG) 2.2 AA standard provides a comprehensive framework for building inclusive digital experiences. For government agencies, meeting these standards ensures that citizens with disabilities can independently access critical services, from applying for permits to accessing health information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Principles for Government Portal Accessibility</h2>
                <p>
                  Successful accessible design follows four core principles: perceivable, operable, understandable, and robust. In practice, this means ensuring that all information and user interface components are presented in ways that users can perceive, regardless of their sensory abilities.
                </p>
                <p>
                  Color contrast ratios must meet or exceed 4.5:1 for normal text and 3:1 for large text. Interactive elements require clear focus indicators and logical tab order. Forms need descriptive labels and error messages that clearly explain how to correct issues. These technical requirements translate directly into better user experiences for everyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Implementation Strategy for Government Agencies</h2>
                <p>
                  Building accessibility into government portals requires a systematic approach that involves stakeholders across the entire project lifecycle. Begin with accessibility requirements in the initial planning phase, not as an afterthought during development.
                </p>
                <p>
                  Conduct regular accessibility audits using both automated testing tools and manual evaluation with assistive technologies. Involve users with disabilities in user testing sessions to identify real-world usability challenges that technical audits might miss. This human-centered approach ensures that compliance translates to actual usability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Measuring Success and Continuous Improvement</h2>
                <p>
                  Accessibility isn't a one-time achievement but an ongoing commitment to inclusive design. Establish metrics that go beyond technical compliance to measure user success rates, task completion times, and satisfaction scores across different user groups and assistive technologies.
                </p>
                <p>
                  Regular training for development teams, content creators, and stakeholders ensures that accessibility knowledge stays current with evolving standards and best practices. Create internal accessibility guidelines specific to your agency's needs and services.
                </p>
              </div>

              <div className="bg-teal-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Key Takeaways</h3>
                <ul className="space-y-2">
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-teal-600 mt-1"></i>
                    <span>Implement accessibility requirements from project initiation, not as an afterthought</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-teal-600 mt-1"></i>
                    <span>Combine automated testing with user testing involving people with disabilities</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-teal-600 mt-1"></i>
                    <span>Focus on measurable user outcomes beyond technical compliance</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <i className="ri-check-line text-teal-600 mt-1"></i>
                    <span>Provide ongoing training and maintain current accessibility knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link href="/insights/cloud-security" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Cloud Security Hygiene for Agencies</h3>
              <p className="text-gray-600 text-sm">Essential security practices for government cloud deployments.</p>
            </Link>
            <Link href="/insights/digital-transformation" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Digital Transformation Roadmap</h3>
              <p className="text-gray-600 text-sm">Strategic planning for government modernization initiatives.</p>
            </Link>
            <Link href="/insights/citizen-experience" className="bg-white rounded-lg p-6 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Citizen-Centric Service Design</h3>
              <p className="text-gray-600 text-sm">Building government services around user needs and expectations.</p>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}