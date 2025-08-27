'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';

export default function Terms() {
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
              <h1 className="text-4xl font-bold text-gray-900">Terms of Service</h1>
              <p className="text-xl text-gray-600">
                Last updated: March 2024
              </p>
              <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptance of Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  By accessing and using the Ceorra Services website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Use of Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  You may use our services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Use the services in any way that violates applicable laws or regulations</li>
                  <li>Transmit or procure the sending of any advertising or promotional material</li>
                  <li>Impersonate or attempt to impersonate Ceorra Services or our employees</li>
                  <li>Engage in any other conduct that restricts or inhibits use of the services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
                <p className="text-gray-600 leading-relaxed">
                  The service and its original content, features, and functionality are and will remain the exclusive property of Ceorra Services and its licensors. The service is protected by copyright, trademark, and other laws. Our trademarks and trade dress may not be used without our prior written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Professional Services</h2>
                <p className="text-gray-600 leading-relaxed mb-4">
                  When you engage Ceorra Services for professional consulting or development services:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Services will be provided according to the terms specified in individual contracts</li>
                  <li>All professional work is subject to separate service agreements</li>
                  <li>Confidentiality and non-disclosure agreements may apply</li>
                  <li>Payment terms and project deliverables will be clearly defined</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
                <p className="text-gray-600 leading-relaxed">
                  In no event shall Ceorra Services, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
                <p className="text-gray-600 leading-relaxed">
                  These Terms shall be interpreted and governed by the laws of the United States and the State of Washington, without regard to conflict of law provisions. Any disputes arising under these terms will be subject to the exclusive jurisdiction of the courts located in Washington, DC.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
                <p className="text-gray-600 leading-relaxed">
                  We reserve the right to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days' notice prior to any new terms taking effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-600 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-4 bg-teal-50 rounded-lg">
                  <p className="text-gray-700">
                    <strong>Ceorra Services</strong><br />
                    123 Government Plaza<br />
                    Washington, DC 20001<br />
                    Email: legal@ceorraservices.com<br />
                    Phone: +1 (555) 123-4567
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}