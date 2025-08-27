
'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) {
    return (
      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg font-['Pacifico']">
                  C
                </div>
                <span className="text-xl font-bold">Ceorra Services</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Building reliable digital solutions for the public sector with secure, accessible, and scalable technology.
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-gray-900 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white font-bold text-lg transition-all duration-300 group-hover:bg-teal-400 group-hover:scale-110 font-['Pacifico']">
                C
              </div>
              <span className="text-xl font-bold group-hover:text-teal-400 transition-colors duration-300">Ceorra Services</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              {t('footerTagline')}
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="LinkedIn">
                <i className="ri-linkedin-fill"></i>
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="Twitter">
                <i className="ri-twitter-fill"></i>
              </Link>
              <Link href="#" className="w-8 h-8 flex items-center justify-center bg-gray-800 hover:bg-teal-600 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 focus:ring-offset-gray-900" aria-label="GitHub">
                <i className="ri-github-fill"></i>
              </Link>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">{t('solutions')}</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li><Link href="/solutions#citizen-experience" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('citizenServices')}</Link></li>
              <li><Link href="/solutions#smart-city" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('smartCity')}</Link></li>
              <li><Link href="/solutions#digital-infrastructure" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('digitalInfrastructure')}</Link></li>
              <li><Link href="/solutions#data-governance" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('dataGovernance')}</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">{t('services')}</h3>
            <ul className="space-y-2 text-sm" role="list">
              <li><Link href="/services#consulting" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">Digital Consulting</Link></li>
              <li><Link href="/services#development" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">Custom Development</Link></li>
              <li><Link href="/services#cloud-devops" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">Cloud & DevOps</Link></li>
              <li><Link href="/services#cybersecurity" className="text-gray-400 hover:text-teal-400 transition-colors duration-300 focus:outline-none focus:text-teal-400">Cybersecurity</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-teal-400">{t('contact')}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <i className="ri-map-pin-line text-teal-500 mt-1" aria-hidden="true"></i>
                <address className="text-gray-400 not-italic">123 Government Plaza<br />Washington, DC 20001</address>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-500" aria-hidden="true"></i>
                <a href="tel:+15551234567" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">+1 (555) 123-4567</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-teal-500" aria-hidden="true"></i>
                <a href="mailto:hello@ceorraservices.com" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">hello@ceorraservices.com</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 Ceorra Services. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('privacyPolicy')}</Link>
            <Link href="/terms" className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-300 focus:outline-none focus:text-teal-400">{t('termsService')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}