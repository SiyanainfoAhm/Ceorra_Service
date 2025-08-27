'use client';

import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import Link from 'next/link';

export default function TransportInfrastructure() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Intelligent%20transportation%20management%20center%20with%20traffic%20monitoring%20systems%2C%20smart%20transit%20technology%2C%20urban%20mobility%20dashboard%2C%20teal%20interface%20elements%2C%20real-time%20traffic%20data%20visualization%2C%20public%20transit%20coordination%20systems&width=1920&height=800&seq=transport-detail-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Transport & Infrastructure
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Intelligent transportation systems that improve traffic flow, enhance public safety, and provide real-time information to citizens and operators.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '500K+', label: 'Daily Commuters' },
              { number: '30%', label: 'Traffic Reduction' },
              { number: '95%', label: 'On-Time Performance' },
              { number: '12', label: 'Smart Routes' }
            ].map((stat, index) => (
              <div key={index} className="text-center bg-teal-50 rounded-xl p-6">
                <div className="text-3xl font-bold text-teal-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Challenges & Solutions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Key Challenges</h2>
              {[
                'Traffic congestion management',
                'Public transit coordination',
                'Infrastructure maintenance',
                'Real-time data integration'
              ].map((challenge, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className="ri-arrow-right-s-line text-red-500 mt-0.5"></i>
                  <span className="text-gray-700">{challenge}</span>
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
              {[
                '25% shorter commute times',
                '40% fewer traffic incidents',
                '55% improved ridership',
                '20% maintenance cost savings'
              ].map((outcome, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <i className="ri-check-line text-green-500 mt-0.5"></i>
                  <span className="text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {['Traffic Analytics', 'Smart Signals', 'Transit Apps', 'Route Optimization', 'Safety Systems'].map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="ri-bus-line text-teal-600 text-xl"></i>
                </div>
                <h3 className="font-semibold text-gray-900">{feature}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Optimize Your Transportation Systems?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how intelligent transportation can improve your city's mobility and safety.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors duration-300 font-semibold whitespace-nowrap"
            >
              Get Started
            </Link>
            <Link
              href="/industries"
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg hover:bg-teal-600 hover:text-white transition-colors duration-300 font-semibold whitespace-nowrap"
            >
              Back to Industries
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}