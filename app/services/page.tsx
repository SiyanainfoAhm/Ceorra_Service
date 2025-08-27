
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      id: 'consulting',
      title: 'Consulting',
      description: 'Strategic guidance for digital transformation initiatives and technology roadmaps. We assess current systems, identify opportunities, and develop actionable plans that align technology investments with organizational goals.',
      capabilities: 'Digital strategy development, technology assessments, change management planning, vendor selection guidance',
      icon: 'ri-lightbulb-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20business%20consulting%20meeting%20with%20government%20officials%2C%20digital%20transformation%20planning%2C%20strategy%20session%2C%20modern%20conference%20room%2C%20teal%20color%20accents%2C%20collaborative%20workspace%2C%20whiteboard%20planning&width=600&height=400&seq=consulting&orientation=landscape'
    },
    {
      id: 'development',
      title: 'Software Development',
      description: 'Custom applications built with modern frameworks and best practices. From citizen-facing portals to internal management systems, we create secure, scalable solutions tailored to your specific requirements and workflows.',
      capabilities: 'Web applications, mobile apps, API development, system integration, legacy modernization',
      icon: 'ri-code-line',
      image: 'https://readdy.ai/api/search-image?query=Software%20development%20team%20working%20on%20government%20applications%2C%20coding%20workspace%2C%20multiple%20monitors%2C%20modern%20development%20environment%2C%20technology%20innovation%2C%20teal%20UI%20elements%2C%20programming%20screens&width=600&height=400&seq=development&orientation=landscape'
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment processes that ensure reliable, efficient operations. We help organizations migrate to cloud platforms while implementing DevOps practices for faster, more secure deployments.',
      capabilities: 'Cloud migration, infrastructure automation, CI/CD pipelines, containerization, monitoring solutions',
      icon: 'ri-cloud-line',
      image: 'https://readdy.ai/api/search-image?query=Cloud%20infrastructure%20visualization%2C%20server%20monitoring%20dashboard%2C%20DevOps%20workflow%2C%20automated%20deployment%20systems%2C%20modern%20data%20center%2C%20teal%20color%20scheme%2C%20technology%20operations%20center&width=600&height=400&seq=cloud-devops&orientation=landscape'
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions that protect sensitive government data and systems. We implement defense-in-depth strategies, conduct regular assessments, and ensure compliance with federal security standards and regulations.',
      capabilities: 'Security assessments, compliance frameworks, incident response planning, security training, penetration testing',
      icon: 'ri-shield-line',
      image: 'https://readdy.ai/api/search-image?query=Cybersecurity%20operations%20center%20with%20monitoring%20screens%2C%20security%20dashboard%2C%20threat%20detection%20systems%2C%20government%20security%20facility%2C%20professional%20environment%2C%20teal%20accents%2C%20security%20analysts&width=600&height=400&seq=cybersecurity&orientation=landscape'
    },
    {
      id: 'data-analytics',
      title: 'Data & Analytics',
      description: 'Transform raw data into actionable insights through advanced analytics platforms and visualization tools. We help organizations make evidence-based decisions while maintaining data privacy and governance standards.',
      capabilities: 'Data warehouse design, business intelligence, predictive analytics, data visualization, reporting automation',
      icon: 'ri-bar-chart-line',
      image: 'https://readdy.ai/api/search-image?query=Data%20analytics%20workspace%20with%20multiple%20dashboards%2C%20business%20intelligence%20tools%2C%20data%20visualization%20screens%2C%20government%20statistics%2C%20professional%20analytics%20environment%2C%20teal%20color%20elements&width=600&height=400&seq=data-analytics&orientation=landscape'
    },
    {
      id: 'qa-accessibility',
      title: 'QA & Accessibility',
      description: 'Rigorous testing methodologies and accessibility compliance ensure your systems work flawlessly for all users. We implement automated testing frameworks and conduct comprehensive accessibility audits to meet WCAG standards.',
      capabilities: 'Automated testing, accessibility audits, performance testing, usability testing, compliance validation',
      icon: 'ri-checkbox-circle-line',
      image: 'https://readdy.ai/api/search-image?query=Software%20quality%20assurance%20testing%20environment%2C%20automated%20testing%20dashboard%2C%20QA%20team%20workspace%2C%20software%20testing%20tools%2C%20quality%20control%20process%2C%20teal%20color%20elements%2C%20accessibility%20testing&width=600&height=400&seq=qa&orientation=landscape'
    },
    {
      id: 'support-maintenance',
      title: 'Support & Maintenance',
      description: '24/7 system monitoring and proactive maintenance services keep your critical systems running smoothly. Our expert support team provides rapid response to issues and continuous optimization to improve performance.',
      capabilities: '24/7 monitoring, proactive maintenance, help desk support, system optimization, backup management',
      icon: 'ri-customer-service-line',
      image: 'https://readdy.ai/api/search-image?query=IT%20support%20center%20with%20multiple%20monitoring%20screens%2C%20technical%20support%20team%2C%2024%2F7%20operations%20center%2C%20system%20monitoring%20dashboard%2C%20professional%20support%20environment%2C%20teal%20accents%2C%20help%20desk&width=600&height=400&seq=support&orientation=landscape'
    },
    {
      id: 'training-adoption',
      title: 'Training & Adoption',
      description: 'Comprehensive training programs and change management support ensure successful technology adoption. We develop customized training materials and provide ongoing support to maximize user engagement and system utilization.',
      capabilities: 'User training programs, documentation creation, change management, adoption analytics, ongoing support',
      icon: 'ri-graduation-cap-line',
      image: 'https://readdy.ai/api/search-image?query=Professional%20training%20session%20with%20government%20employees%2C%20technology%20training%20classroom%2C%20modern%20learning%20environment%2C%20digital%20training%20materials%2C%20teal%20color%20accents%2C%20interactive%20learning&width=600&height=400&seq=training&orientation=landscape'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section 
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Professional%20IT%20services%20team%20working%20on%20government%20projects%2C%20technology%20consulting%2C%20digital%20transformation%20services%2C%20modern%20office%20environment%2C%20collaborative%20workspace%2C%20teal%20color%20palette%2C%20service%20delivery&width=1920&height=800&seq=services-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Comprehensive IT Services
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              End-to-end technology services that ensure successful project outcomes through proven methodologies, expert teams, and continuous innovation.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white rounded-xl group-hover:bg-teal-50 transition-colors duration-300">
                    <i className={`${service.icon} text-2xl text-teal-600`}></i>
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-gray-900">Our Capabilities:</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.capabilities}
                    </p>
                  </div>
                  
                  <Link
                    href="/contact"
                    className="inline-flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300"
                  >
                    Get Started <i className="ri-arrow-right-line ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Service Delivery Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures project success and client satisfaction
            </p>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your requirements and current state', icon: 'ri-search-line' },
              { step: '02', title: 'Planning', description: 'Developing detailed project roadmap and timeline', icon: 'ri-route-line' },
              { step: '03', title: 'Execution', description: 'Implementing solution with regular progress updates', icon: 'ri-settings-line' },
              { step: '04', title: 'Delivery', description: 'Testing, training, and seamless system deployment', icon: 'ri-rocket-line' }
            ].map((phase, index) => (
              <div key={phase.step} className="text-center space-y-4">
                <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {phase.step}
                </div>
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mx-auto mb-4">
                  <i className={`${phase.icon} text-xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                <p className="text-gray-600 text-sm">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-900">
              Let's Build Your Next Solution Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Partner with our experienced team to deliver exceptional technology solutions that drive real results for your organization.
            </p>
            <Link 
              href="/contact"
              className="inline-block bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap transform hover:-translate-y-1"
            >
              Start Your Project Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
