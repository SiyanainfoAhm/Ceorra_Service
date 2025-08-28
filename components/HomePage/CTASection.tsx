'use client';

import Link from 'next/link';

interface CTASectionProps {
  isVisible: boolean;
}

export default function CTASection({ isVisible }: CTASectionProps) {
  return (
    <section 
      className="py-20 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20government%20office%20meeting%20room%20with%20modern%20technology%2C%20digital%20screens%2C%20collaborative%20workspace%2C%20clean%20corporate%20environment%2C%20teal%20and%20turquoise%20color%20scheme%2C%20professional%20lighting%2C%20business%20meeting%20setup%2C%20accessible%20design%2C%20inclusive%20workplace&width=1920&height=600&seq=cta-bg-accessible&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
      aria-labelledby="cta-heading"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-custom"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-20 w-16 h-16 border border-white/20 rounded-full animate-bounce-custom" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <h2 id="cta-heading" className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Transform Your Digital Infrastructure?
          </h2>
          <p className="text-lg md:text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
            Partner with us to build secure, scalable, and citizen-focused technology solutions that drive real results
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Start Your Project
            </Link>
            <Link 
              href="/solutions"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-teal-600 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600"
            >
              Explore All Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}