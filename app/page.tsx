'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HomePage/HeroSection';
import StatsSection from '../components/HomePage/StatsSection';
import CTASection from '../components/HomePage/CTASection';
import { useEffect, useState } from 'react';

export default function Home() {
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

      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-teal-600 text-white px-4 py-2 rounded-lg z-50">
        Skip to main content
      </a>

      <main id="main-content">
        <HeroSection isVisible={isVisible} />
        <StatsSection isVisible={isVisible} />
        <CTASection isVisible={isVisible} />
      </main>

      <Footer />
    </div>
  );
}