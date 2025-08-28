
'use client';

import Link from 'next/link';
import { useTranslation } from '../hooks/useTranslation';

export default function Footer() {
  const { t, isHydrated } = useTranslation();

  if (!isHydrated) {
    return (
      <footer className="bg-gray-900 text-white" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 group cursor-pointer">
                <h3 className="text-xl font-bold text-white">Ceorra Services</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Empowering public organizations with reliable, future-ready IT systems that improve citizen lives through innovative technology solutions.
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
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 group cursor-pointer">
              <h3 className="text-xl font-bold text-white">Ceorra Services</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Empowering public organizations with reliable, future-ready IT systems that improve citizen lives through innovative technology solutions.
            </p>
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
                <address className="text-gray-400 not-italic">Shivalik Shilp, 1302, 13th floor<br />ISCON Circle, Sarkhej - Gandhinagar Hwy<br />Ahmedabad, Gujarat 380015</address>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-phone-line text-teal-500" aria-hidden="true"></i>
                <a href="tel:+919313478015" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">+91 93134 78015</a>
              </div>
              <div className="flex items-center space-x-3">
                <i className="ri-mail-line text-teal-500" aria-hidden="true"></i>
                <a href="mailto:hr@ceorra.in" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">hr@ceorra.in</a>
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
