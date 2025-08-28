
'use client';

import Link from 'next/link';
import { useTranslation } from '../../hooks/useTranslation';

interface HeroSectionProps {
  isVisible: boolean;
}

export default function HeroSection({ isVisible }: HeroSectionProps) {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building Reliable Digital Solutions for the Public Sector
                </h1>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                  Transforming government operations with secure, accessible, and scalable technology that serves citizens better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
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
  );
}
