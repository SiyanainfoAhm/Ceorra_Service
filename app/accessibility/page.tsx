'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function Accessibility() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
            <div className="text-center space-y-6 mb-16">
              <h1 className="text-4xl font-bold text-gray-900">Accessibility Statement</h1>
              <p className="text-xl text-gray-600">
                Our commitment to digital inclusion and accessibility
              </p>
              <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
                <p className="text-gray-600 leading-relaxed">
                  Ceorra Services is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying the relevant accessibility standards to ensure we provide equal access to information and functionality for all users.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Conformance Standards</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We strive to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards. These guidelines explain how to make web content more accessible for people with disabilities and user-friendly for everyone.
                </p>
                <div className="bg-teal-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-teal-800 mb-3">Our accessibility features include:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-teal-700">
                    <li>Keyboard navigation support</li>
                    <li>Screen reader compatibility</li>
                    <li>High contrast color schemes</li>
                    <li>Scalable text and images</li>
                    <li>Alternative text for images</li>
                    <li>Descriptive link text</li>
                  </ul>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Measures We Take</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Ceorra Services takes the following measures to ensure accessibility:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Include accessibility as part of our mission statement</li>
                  <li>Integrate accessibility into our procurement practices</li>
                  <li>Provide continual accessibility training for our staff</li>
                  <li>Assign clear accessibility goals and responsibilities</li>
                  <li>Employ formal accessibility quality assurance methods</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Known Issues</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We are working to address the following known accessibility issues:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Some third-party embedded content may not be fully accessible</li>
                  <li>Certain interactive elements are being optimized for better screen reader support</li>
                  <li>We are continuously improving color contrast in some areas</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Feedback and Support</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We welcome your feedback on the accessibility of our website. Please let us know if you encounter accessibility barriers:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Contact Information:</h3>
                  <div className="space-y-2 text-gray-700">
                    <p><strong>Email:</strong> accessibility@ceorraservices.com</p>
                    <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                    <p><strong>Mailing Address:</strong><br />
                       Ceorra Services<br />
                       Accessibility Team<br />
                       123 Government Plaza<br />
                       Washington, DC 20001
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed mt-4">
                  We try to respond to accessibility feedback within 2 business days.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Technical Specifications</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Accessibility of our website relies on the following technologies:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>HTML5 semantic markup</li>
                  <li>WAI-ARIA (Accessible Rich Internet Applications)</li>
                  <li>CSS for visual presentation</li>
                  <li>JavaScript for interactive functionality</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Assessment Methods</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  We assess the accessibility of our website using the following methods:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Self-evaluation using automated accessibility testing tools</li>
                  <li>Manual testing with keyboard navigation and screen readers</li>
                  <li>External accessibility audits by qualified accessibility consultants</li>
                  <li>Usability testing with people with disabilities</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}