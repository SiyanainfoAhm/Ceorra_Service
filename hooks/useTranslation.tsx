
'use client';

import { useState, useEffect } from 'react';

const translations = {
  en: {
    // Header
    home: 'Home',
    solutions: 'Solutions',
    services: 'Services',
    industries: 'Industries',
    insights: 'Insights',
    about: 'About',
    careers: 'Careers',
    contact: 'Contact',
    scheduleCall: 'Schedule a Call',
    
    // Hero
    heroTitle: 'Building Reliable Digital Solutions for the Public Sector',
    heroSubtitle: 'Transforming government operations with secure, accessible, and scalable technology that serves citizens better.',
    exploreSolutions: 'Explore Solutions',
    
    // Counters
    yearsExperience: '10+ Years',
    systemUptime: '99.9% Uptime', 
    support247: '24/7 Support',
    wcagCompliance: 'WCAG 2.2 AA',
    
    // Solutions
    citizenServices: 'Citizen Services Portals',
    smartCity: 'Smart City Platforms',
    digitalInfrastructure: 'Digital Public Infrastructure',
    dataGovernance: 'Data & Governance',
    tourismCulture: 'Tourism & Culture',
    healthEducation: 'Health & Education',
    
    // Why Ceorra
    whyCeorra: 'Why Choose Ceorra',
    secureDesign: 'Secure by Design',
    accessibleAll: 'Accessible for All',
    scalablePlatforms: 'Scalable Platforms',
    trustedExpertise: 'Trusted Expertise',
    
    // Footer
    footerTagline: 'Building reliable digital solutions for the public sector with secure, accessible, and scalable technology.',
    privacyPolicy: 'Privacy Policy',
    termsService: 'Terms of Service',
    accessibility: 'Accessibility'
  }
};

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const savedLanguage = localStorage.getItem('language') || 'en';
    setCurrentLanguage(savedLanguage);
  }, []);

  const changeLanguage = (lang: string) => {
    if (isHydrated) {
      setCurrentLanguage(lang);
      localStorage.setItem('language', lang);
    }
  };

  const t = (key: string): string => {
    const langTranslations = translations[currentLanguage as keyof typeof translations] || translations.en;
    return langTranslations[key as keyof typeof langTranslations] || key;
  };

  return { t, currentLanguage, changeLanguage, isHydrated };
}