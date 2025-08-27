
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Insights() {
  const insights = [
    {
      id: 'digital-transformation-roadmap',
      title: 'The Complete Guide to Government Digital Transformation',
      excerpt: 'A comprehensive roadmap for modernizing government operations through strategic technology adoption, change management, and citizen-centric design principles.',
      category: 'Digital Transformation',
      readTime: '8 min read',
      date: 'March 15, 2024',
      author: 'Sarah Johnson',
      tags: ['Strategy', 'Modernization', 'Best Practices'],
      image: 'https://readdy.ai/api/search-image?query=Digital%20transformation%20in%20government%2C%20modern%20government%20office%20with%20technology%2C%20digital%20strategy%20planning%2C%20government%20officials%20working%20with%20tablets%20and%20digital%20screens%2C%20teal%20color%20accents&width=600&height=400&seq=insight-1&orientation=landscape'
    },
    {
      id: 'cybersecurity-public-sector',
      title: 'Cybersecurity Best Practices for Public Sector Organizations',
      excerpt: 'Essential security strategies and frameworks that government agencies need to protect citizen data, maintain compliance, and defend against evolving cyber threats.',
      category: 'Cybersecurity',
      readTime: '6 min read',
      date: 'March 10, 2024',
      author: 'Michael Chen',
      tags: ['Security', 'Compliance', 'Risk Management'],
      image: 'https://readdy.ai/api/search-image?query=Government%20cybersecurity%20operations%20center%2C%20security%20monitoring%20screens%2C%20cyber%20defense%20systems%2C%20professional%20security%20environment%2C%20digital%20security%20dashboard%2C%20teal%20interface%20elements&width=600&height=400&seq=insight-2&orientation=landscape'
    },
    {
      id: 'citizen-experience-design',
      title: 'Designing Citizen-Centric Digital Services',
      excerpt: 'How user experience design principles and accessibility standards can transform government service delivery to better serve diverse citizen needs and expectations.',
      category: 'User Experience',
      readTime: '7 min read',
      date: 'March 5, 2024',
      author: 'Lisa Rodriguez',
      tags: ['UX Design', 'Accessibility', 'Citizen Services'],
      image: 'https://readdy.ai/api/search-image?query=Citizen%20using%20government%20digital%20services%20on%20mobile%20device%2C%20user-friendly%20government%20app%20interface%2C%20digital%20citizen%20services%2C%20accessible%20technology%20design%2C%20teal%20color%20scheme%2C%20modern%20UX%20design&width=600&height=400&seq=insight-3&orientation=landscape'
    },
    {
      id: 'cloud-migration-government',
      title: 'Cloud Migration Strategies for Government Agencies',
      excerpt: 'Best practices for migrating government systems to cloud infrastructure while maintaining security, compliance, and operational continuity throughout the transition.',
      category: 'Cloud Technology',
      readTime: '9 min read',
      date: 'February 28, 2024',
      author: 'David Park',
      tags: ['Cloud Migration', 'Infrastructure', 'Security'],
      image: 'https://readdy.ai/api/search-image?query=Government%20cloud%20infrastructure%20migration%2C%20data%20center%20modernization%2C%20cloud%20computing%20servers%2C%20digital%20infrastructure%20transformation%2C%20teal%20technology%20elements%2C%20professional%20IT%20environment&width=600&height=400&seq=insight-4&orientation=landscape'
    },
    {
      id: 'data-governance-framework',
      title: 'Building Effective Data Governance in Government',
      excerpt: 'Framework for establishing comprehensive data governance programs that ensure data quality, privacy protection, and compliance with regulatory requirements.',
      category: 'Data Management',
      readTime: '10 min read',
      date: 'February 20, 2024',
      author: 'Jennifer Kim',
      tags: ['Data Governance', 'Privacy', 'Compliance'],
      image: 'https://readdy.ai/api/search-image?query=Government%20data%20governance%20dashboard%2C%20data%20analytics%20visualization%2C%20secure%20data%20management%20systems%2C%20compliance%20monitoring%20interface%2C%20teal%20color%20accents%2C%20professional%20data%20center&width=600&height=400&seq=insight-5&orientation=landscape'
    },
    {
      id: 'smart-city-implementation',
      title: 'Smart City Implementation: Lessons from Successful Projects',
      excerpt: 'Real-world case studies and lessons learned from successful smart city initiatives, including technology selection, citizen engagement, and sustainability considerations.',
      category: 'Smart Cities',
      readTime: '12 min read',
      date: 'February 15, 2024',
      author: 'Robert Thompson',
      tags: ['Smart Cities', 'IoT', 'Urban Planning'],
      image: 'https://readdy.ai/api/search-image?query=Smart%20city%20infrastructure%20with%20IoT%20sensors%2C%20connected%20urban%20technology%2C%20intelligent%20traffic%20systems%2C%20modern%20city%20planning%20with%20digital%20integration%2C%20teal%20technology%20elements%2C%20sustainable%20urban%20development&width=600&height=400&seq=insight-6&orientation=landscape'
    }
  ];

  const categories = ['All', 'Digital Transformation', 'Cybersecurity', 'User Experience', 'Cloud Technology', 'Data Management', 'Smart Cities'];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Government%20thought%20leadership%2C%20technology%20insights%2C%20digital%20innovation%20in%20public%20sector%2C%20modern%20conference%20room%20with%20presentation%20screens%2C%20professional%20knowledge%20sharing%2C%20teal%20color%20palette&width=1920&height=800&seq=insights-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-1/3 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-1/3 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Insights & Thought Leadership
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Expert insights, best practices, and industry trends to help government organizations navigate digital transformation and technology innovation.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-300 hover:scale-105 ${
                  index === 0 
                    ? 'bg-teal-600 text-white border-teal-600' 
                    : 'bg-white text-gray-700 border-gray-300 hover:border-teal-300 hover:text-teal-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Insights Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((insight, index) => (
              <Link
                key={insight.id}
                href={`/insights/${insight.id}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={insight.image}
                    alt={insight.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 text-teal-700 rounded-full text-sm font-medium">
                      {insight.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{insight.date}</span>
                    <span>{insight.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300 line-clamp-2">
                    {insight.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed line-clamp-3">
                    {insight.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-1 transition-transform duration-300">
                      Read More <i className="ri-arrow-right-line ml-1"></i>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 pt-2">
                    {insight.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">Stay Informed</h2>
            <p className="text-xl text-gray-600">
              Subscribe to receive the latest insights, trends, and best practices in government technology.
            </p>
            
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 hover:scale-105 whitespace-nowrap font-semibold"
              >
                Subscribe
              </button>
            </form>
            
            <p className="text-sm text-gray-500">
              No spam. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
