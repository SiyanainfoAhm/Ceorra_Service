'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHeroSection from '../../components/AboutPage/HeroSection';
import ValuesSection from '../../components/AboutPage/ValuesSection';
import LocationSection from '../../components/AboutPage/LocationSection';
import CertificationsSection from '../../components/AboutPage/CertificationsSection';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHeroSection />
      <ValuesSection />
      <LocationSection />
      <CertificationsSection />
      <Footer />
    </div>
  );
}