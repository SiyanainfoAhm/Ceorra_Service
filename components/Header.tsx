
'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useTranslation } from '../hooks/useTranslation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const { t, isHydrated } = useTranslation();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  if (!isHydrated) {
    return (
      <header className="bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center group" aria-label="Ceorra Services Home">
              <img 
                src="https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/aa511150326b2feb617cbeb6aef0a7d3.png" 
                alt="Ceorra Services Logo" 
                className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              <span className="text-gray-700">Loading...</span>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className={`bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50 transition-all duration-700 ${isVisible ? 'animate-slide-down' : 'opacity-0'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center group" aria-label="Ceorra Services Home">
            <img 
              src="https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/aa511150326b2feb617cbeb6aef0a7d3.png" 
              alt="Ceorra Services Logo" 
              className="h-10 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-6" aria-label="Main navigation">
            <Link href="/" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('home')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/solutions" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('solutions')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('services')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/industries" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('industries')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('about')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-all duration-300 font-medium relative group focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded px-2 py-1">
              {t('contact')}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link href="/schedule-call" className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium whitespace-nowrap transform hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
              {t('scheduleCall')}
            </Link>
          </nav>

          <button
            className="lg:hidden w-8 h-8 flex items-center justify-center transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 rounded"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-xl text-teal-600 transition-all duration-300`}></i>
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 animate-fade-in-up" role="navigation" aria-label="Mobile navigation">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('home')}
              </Link>
              <Link href="/solutions" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('solutions')}
              </Link>
              <Link href="/services" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('services')}
              </Link>
              <Link href="/industries" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('industries')}
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('about')}
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-teal-600 transition-colors duration-300 font-medium focus:outline-none focus:text-teal-600">
                {t('contact')}
              </Link>
              <Link href="/schedule-call" className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium whitespace-nowrap inline-block text-center transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2">
                {t('scheduleCall')}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
