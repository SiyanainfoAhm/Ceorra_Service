
'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import AnimatedCounter from '../components/AnimatedCounter';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <main id="main-content">
        {/* Hero Section */}
        <section 
          className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50"
          style={{
            backgroundImage: `url('https://readdy.ai/api/search-image?query=Modern%20digital%20government%20cityscape%20with%20clean%20geometric%20buildings%2C%20digital%20infrastructure%20elements%2C%20fiber%20optic%20networks%2C%20cloud%20computing%20symbols%2C%20minimalist%20teal%20and%20white%20color%20palette%2C%20professional%20corporate%20background%2C%20wide%20angle%20view%2C%20soft%20lighting%2C%20technology%20integration%20in%20urban%20environment%2C%20accessible%20design%20elements%2C%20government%20technology%20transformation&width=1920&height=1080&seq=hero-bg-accessible&orientation=landscape')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-label="Hero section"
        >
          <div className="absolute inset-0 bg-white/85"></div>

          {/* Floating Animation Elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
            <div className="absolute top-20 left-10 w-4 h-4 bg-teal-200 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-6 h-6 bg-cyan-200 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-40 left-20 w-5 h-5 bg-teal-300 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
            <div className="absolute bottom-20 right-10 w-3 h-3 bg-cyan-300 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                <div className="space-y-6">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    {t('heroTitle')}
                  </h1>
                  <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                    {t('heroSubtitle')}
                  </p>
                </div>

                <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  <Link 
                    href="/solutions"
                    className="bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg text-center whitespace-nowrap transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    {t('exploreSolutions')}
                  </Link>
                  <Link 
                    href="/contact"
                    className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg text-center whitespace-nowrap transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    {t('scheduleCall')}
                  </Link>
                </div>
              </div>

              <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
                <div className="relative">
                  <img 
                    src="https://readdy.ai/api/search-image?query=Abstract%20digital%20government%20infrastructure%20illustration%20with%20connected%20nodes%2C%20data%20flow%20visualization%2C%20clean%20geometric%20shapes%2C%20teal%20and%20turquoise%20gradient%2C%20modern%20minimalist%20design%2C%20government%20building%20silhouettes%2C%20digital%20transformation%20concept%2C%20professional%20corporate%20style%2C%20accessibility%20icons%2C%20inclusive%20design%20elements&width=600&height=600&seq=hero-illustration-accessible&orientation=squarish"
                    alt="Digital Government Infrastructure - Modern connected systems improving citizen services"
                    className="w-full h-auto rounded-2xl shadow-2xl object-cover animate-float"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-teal-400 rounded-full animate-bounce-custom" aria-hidden="true"></div>
                  <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-cyan-300 rounded-full animate-pulse-custom" aria-hidden="true"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Animated Counters */}
        <section className="py-20 bg-gray-50" aria-labelledby="stats-heading">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="stats-heading" className="sr-only">Company Statistics and Achievements</h2>
            <div className={`grid grid-cols-1 md:grid-cols-4 gap-8 text-center transition-all duration-1000 ${isVisible ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="counter-animation">
                  <AnimatedCounter end={10} suffix="+ Years" />
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">{t('yearsExperience').replace('10+ ', '')}</p>
                <p className="text-gray-600">Trusted partner in public sector digital transformation</p>
                <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="counter-animation">
                  <AnimatedCounter end={99} suffix=".9% Uptime" />
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">System Reliability</p>
                <p className="text-gray-600">Mission-critical systems you can depend on</p>
                <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="counter-animation">
                  <AnimatedCounter end={24} suffix="/7 Support" />
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">Always Available</p>
                <p className="text-gray-600">Round-the-clock monitoring and technical support</p>
                <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              </div>
              <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
                <div className="counter-animation">
                  <span className="text-3xl md:text-4xl font-bold text-teal-600">WCAG 2.2 AA</span>
                </div>
                <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">Accessibility Compliance</p>
                <p className="text-gray-600">Fully accessible solutions for all users</p>
                <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
      </main>

      <Footer />
    </div>
  );
}
