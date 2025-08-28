
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';

export default function Industries() {
  const industries = [
    {
      id: 'government',
      title: 'Government Agencies',
      description: 'Modern IT infrastructure that streamlines bureaucratic processes and enhances citizen service delivery through secure, scalable digital platforms.',
      icon: 'ri-government-line',
      image: 'https://readdy.ai/api/search-image?query=Government%20digital%20transformation%20center%20with%20modern%20technology%20systems%2C%20citizens%20using%20digital%20government%20services%2C%20professional%20public%20sector%20environment%20with%20digital%20interfaces%2C%20teal%20color%20accents%2C%20clean%20modern%20architecture%2C%20data%20visualization%20screens&width=400&height=300&seq=gov-enhanced&orientation=landscape',
      stats: [
        { number: '2.4M+', label: 'Citizens Served Daily' },
        { number: '85%', label: 'Service Time Reduction' },
        { number: '24/7', label: 'Digital Availability' },
        { number: '15+', label: 'Language Support' }
      ],
      challenges: [
        'Legacy system modernization barriers',
        'Cross-department data silos',
        'Citizen accessibility requirements',
        'Regulatory compliance complexity'
      ],
      outcomes: [
        '40% faster service delivery',
        '60% higher citizen satisfaction',
        '30% operational cost reduction',
        '99.5% system uptime'
      ],
      keyFeatures: ['Digital Identity', 'Process Automation', 'Citizen Portals', 'Data Analytics', 'Mobile Services'],
      compliance: ['FISMA', 'FedRAMP', 'Section 508', 'GDPR']
    },
    {
      id: 'utilities',
      title: 'Public Utilities',
      description: 'Smart grid technology and IoT solutions that optimize energy distribution, monitor infrastructure health, and improve operational efficiency.',
      icon: 'ri-flashlight-line',
      image: 'https://readdy.ai/api/search-image?query=Smart%20city%20utility%20control%20center%20with%20IoT%20sensors%20monitoring%2C%20energy%20grid%20management%20dashboard%2C%20renewable%20energy%20infrastructure%2C%20teal%20interface%20displays%2C%20sustainable%20technology%20systems%2C%20real-time%20monitoring%20screens&width=400&height=300&seq=util-enhanced&orientation=landscape',
      stats: [
        { number: '50K+', label: 'IoT Sensors Deployed' },
        { number: '25%', label: 'Energy Savings' },
        { number: '99.8%', label: 'Grid Reliability' },
        { number: '1M+', label: 'Smart Meters Connected' }
      ],
      challenges: [
        'Aging infrastructure monitoring',
        'Energy demand optimization',
        'Grid security vulnerabilities',
        'Maintenance cost management'
      ],
      outcomes: [
        '35% reduction in outages',
        '20% lower maintenance costs',
        '45% faster fault detection',
        '30% improved efficiency'
      ],
      keyFeatures: ['Smart Grid', 'IoT Monitoring', 'Predictive Maintenance', 'Energy Analytics', 'Mobile Workforce'],
      compliance: ['NERC CIP', 'ISO 27001', 'NIST Framework', 'IEC Standards']
    },
    {
      id: 'transport',
      title: 'Transport & Infrastructure',
      description: 'Intelligent transportation systems that improve traffic flow, enhance public safety, and provide real-time information to citizens and operators.',
      icon: 'ri-bus-line',
      image: 'https://readdy.ai/api/search-image?query=Intelligent%20transportation%20management%20center%20with%20traffic%20monitoring%20systems%2C%20smart%20transit%20technology%2C%20urban%20mobility%20dashboard%2C%20teal%20interface%20elements%2C%20real-time%20traffic%20data%20visualization%2C%20public%20transit%20coordination%20systems&width=400&height=300&seq=transport-enhanced&orientation=landscape',
      stats: [
        { number: '500K+', label: 'Daily Commuters' },
        { number: '30%', label: 'Traffic Reduction' },
        { number: '95%', label: 'On-Time Performance' },
        { number: '12', label: 'Smart Routes' }
      ],
      challenges: [
        'Traffic congestion management',
        'Public transit coordination',
        'Infrastructure maintenance',
        'Real-time data integration'
      ],
      outcomes: [
        '25% shorter commute times',
        '40% fewer traffic incidents',
        '55% improved ridership',
        '20% maintenance cost savings'
      ],
      keyFeatures: ['Traffic Analytics', 'Smart Signals', 'Transit Apps', 'Route Optimization', 'Safety Systems'],
      compliance: ['DOT Standards', 'ADA Compliance', 'ISO 14001', 'Safety Protocols']
    },
    {
      id: 'tourism',
      title: 'Tourism & Culture',
      description: 'Digital engagement platforms that showcase cultural heritage, manage visitor experiences, and boost local economic development.',
      icon: 'ri-map-2-line',
      image: 'https://readdy.ai/api/search-image?query=Digital%20cultural%20heritage%20center%20with%20interactive%20tourism%20technology%2C%20virtual%20reality%20cultural%20experiences%2C%20visitor%20management%20systems%2C%20teal%20interface%20design%2C%20modern%20museum%20technology%2C%20cultural%20preservation%20digital%20platforms&width=400&height=300&seq=tourism-enhanced&orientation=landscape',
      stats: [
        { number: '500K+', label: 'Virtual Tour Views' },
        { number: '45%', label: 'Visitor Increase' },
        { number: '25+', label: 'Heritage Sites' },
        { number: '8', label: 'Digital Languages' }
      ],
      challenges: [
        'Cultural heritage preservation',
        'Visitor experience enhancement',
        'Multi-language accessibility',
        'Economic impact measurement'
      ],
      outcomes: [
        '60% longer visitor stays',
        '35% revenue increase',
        '80% satisfaction rating',
        '50% repeat visitors'
      ],
      keyFeatures: ['Virtual Tours', 'AR Experiences', 'Mobile Guides', 'Booking Systems', 'Cultural Analytics'],
      compliance: ['UNESCO Standards', 'Accessibility Guidelines', 'Privacy Regulations', 'Cultural Protocols']
    },
    {
      id: 'health',
      title: 'Public Health',
      description: 'Healthcare management systems that improve patient outcomes, streamline medical workflows, and enable data-driven health policy decisions.',
      icon: 'ri-hospital-line',
      image: 'https://readdy.ai/api/search-image?query=Modern%20public%20health%20technology%20center%20with%20medical%20data%20analytics%2C%20healthcare%20management%20dashboard%2C%20telemedicine%20systems%2C%20teal%20medical%20interface%2C%20digital%20health%20infrastructure%2C%20patient%20care%20coordination%20systems&width=400&height=300&seq=health-enhanced&orientation=landscape',
      stats: [
        { number: '150K+', label: 'Remote Consultations' },
        { number: '92%', label: 'Patient Satisfaction' },
        { number: '40%', label: 'Wait Time Reduction' },
        { number: '24/7', label: 'Emergency Access' }
      ],
      challenges: [
        'Patient data security',
        'System interoperability',
        'Remote care delivery',
        'Health outcome tracking'
      ],
      outcomes: [
        '50% faster diagnosis',
        '65% improved outcomes',
        '30% cost reduction',
        '95% data accuracy'
      ],
      keyFeatures: ['EHR Systems', 'Telemedicine', 'Health Analytics', 'Mobile Health', 'Population Health'],
      compliance: ['HIPAA', 'HL7 FHIR', 'FDA Guidelines', 'Privacy Standards']
    },
    {
      id: 'education',
      title: 'Education',
      description: 'Learning management platforms that enhance educational delivery, support remote learning, and provide analytics for institutional improvement.',
      icon: 'ri-school-line',
      image: 'https://readdy.ai/api/search-image?query=Digital%20education%20technology%20center%20with%20online%20learning%20platforms%2C%20educational%20analytics%20dashboard%2C%20modern%20classroom%20technology%2C%20teal%20interface%20elements%2C%20e-learning%20infrastructure%2C%20student%20engagement%20systems&width=400&height=300&seq=education-enhanced&orientation=landscape',
      stats: [
        { number: '100K+', label: 'Students Connected' },
        { number: '88%', label: 'Engagement Rate' },
        { number: '35%', label: 'Performance Improvement' },
        { number: '200+', label: 'Digital Courses' }
      ],
      challenges: [
        'Digital divide bridging',
        'Learning outcome measurement',
        'Teacher technology adoption',
        'Student engagement tracking'
      ],
      outcomes: [
        '70% higher completion rates',
        '45% improved test scores',
        '60% better attendance',
        '25% cost per student reduction'
      ],
      keyFeatures: ['LMS Platforms', 'Virtual Classrooms', 'Progress Analytics', 'Mobile Learning', 'Assessment Tools'],
      compliance: ['FERPA', 'COPPA', 'Accessibility Standards', 'Data Privacy Laws']
    },
    {
      id: 'finance',
      title: 'Public Finance',
      description: 'Financial management systems that ensure transparency, automate budget processes, and provide real-time insights into public spending. Advanced analytics enable better fiscal planning and accountability.',
      icon: 'ri-bank-line',
      image: 'https://readdy.ai/api/search-image?query=Government%20financial%20operations%20center%20with%20budget%20analytics%20dashboard%2C%20fiscal%20transparency%20platform%2C%20public%20accounting%20technology%2C%20teal%20interface%20design%2C%20financial%20compliance%20monitoring%20systems%2C%20treasury%20management%20displays&width=400&height=300&seq=finance-enhanced&orientation=landscape',
      stats: [
        { number: '$50B+', label: 'Budget Managed' },
        { number: '90%', label: 'Audit Readiness' },
        { number: '50%', label: 'Faster Processing' },
        { number: '100%', label: 'Transparency Score' }
      ],
      challenges: [
        'Budget transparency requirements',
        'Multi-department integration',
        'Regulatory compliance',
        'Real-time reporting needs'
      ],
      outcomes: [
        '60% faster budget cycles',
        '95% compliance rate',
        '40% processing efficiency',
        '85% stakeholder satisfaction'
      ],
      keyFeatures: ['Budget Planning', 'Expense Tracking', 'Audit Tools', 'Public Dashboards', 'Compliance Reporting'],
      compliance: ['GASB Standards', 'Federal Regulations', 'Audit Requirements', 'Transparency Laws']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Government%20technology%20transformation%20center%20with%20multiple%20industry%20sectors%20represented%2C%20modern%20digital%20infrastructure%2C%20public%20sector%20innovation%2C%20teal%20color%20scheme%2C%20professional%20environment%2C%20data%20visualization%20displays&width=1920&height=800&seq=industries-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-1/4 w-32 h-32 border border-white/20 rounded-full"></div>
          <div className="absolute bottom-20 right-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Industries We Transform
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Specialized IT expertise across key public sector industries, delivering measurable technology solutions that drive operational excellence and citizen satisfaction with proven results.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={industry.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer relative"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Floating Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-xs font-semibold text-teal-600">{industry.stats[0].number}</div>
                    <div className="text-xs text-gray-600">{industry.stats[0].label}</div>
                  </div>
                  
                  <div className="absolute top-6 left-6 w-12 h-12 flex items-center justify-center bg-white rounded-xl group-hover:bg-teal-50 transition-colors duration-300">
                    <i className={`${industry.icon} text-2xl text-teal-600`}></i>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                      {industry.title}
                    </h3>
                    {/* Status Indicator */}
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-shield-check-line text-green-500 text-sm"></i>
                      <span className="text-xs text-gray-500">Active</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {industry.description}
                  </p>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {industry.stats.slice(1, 3).map((stat, statIndex) => (
                      <div key={statIndex} className="text-center bg-teal-50 rounded-lg p-2">
                        <div className="text-sm font-bold text-teal-600">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {industry.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <i className="ri-shield-check-line text-green-500 text-sm"></i>
                      <span className="text-xs text-gray-500">Compliant</span>
                    </div>
                    
                    {/* Compliance Badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-1">
                        <i className="ri-shield-check-line text-green-500 text-sm"></i>
                        <span className="text-xs text-gray-500">Active</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Overlay with Additional Info */}
                <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex flex-col justify-center space-y-4">
                  <h4 className="font-bold text-gray-900 mb-2">Key Challenges</h4>
                  <div className="space-y-2">
                    {industry.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                      <div key={challengeIndex} className="flex items-start space-x-2">
                        <i className="ri-arrow-right-s-line text-red-500 mt-0.5 text-sm"></i>
                        <span className="text-sm text-gray-700">{challenge}</span>
                      </div>
                    ))}
                  </div>
                  
                  <h4 className="font-bold text-gray-900 mb-2 mt-4">Key Outcomes</h4>
                  <div className="space-y-2">
                    {industry.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                      <div key={outcomeIndex} className="flex items-start space-x-2">
                        <i className="ri-check-line text-green-500 mt-0.5 text-sm"></i>
                        <span className="text-sm text-gray-700">{outcome}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link 
                      href={`/industries/${industry.id}`}
                      className="inline-flex items-center space-x-2 bg-teal-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-teal-700 transition-colors duration-300"
                    >
                      <span>View Details</span>
                      <i className="ri-external-link-line"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Stats Section */}
      <section className="py-20 bg-gradient-to-br from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Cross-Industry Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering measurable IT solutions across diverse public sector organizations with proven results and sustained performance improvements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {[
              { number: '100+', label: 'IT Projects Delivered', icon: 'ri-folder-check-line', color: 'teal' },
              { number: '25+', label: 'Organizations Served', icon: 'ri-building-line', color: 'cyan' },
              { number: '5M+', label: 'End Users Supported', icon: 'ri-user-heart-line', color: 'teal' },
              { number: '94.5%', label: 'System Uptime', icon: 'ri-shield-check-line', color: 'green' }
            ].map((stat, index) => (
              <div key={stat.label} className="bg-white rounded-xl p-6 shadow-lg text-center space-y-4 hover:scale-105 transition-transform duration-300">
                <div className={`w-16 h-16 flex items-center justify-center bg-${stat.color}-100 rounded-full mx-auto`}>
                  <i className={`${stat.icon} text-2xl text-${stat.color}-600`}></i>
                </div>
                <div className={`text-4xl font-bold text-${stat.color}-600`}>{stat.number}</div>
                <div className="text-gray-900 font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Industry Performance Metrics */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">Performance Across All Industries</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-teal-500 to-cyan-500 rounded-full mx-auto">
                  <i className="ri-speed-line text-3xl text-white"></i>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">3+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-green-500 to-teal-500 rounded-full mx-auto">
                  <i className="ri-heart-pulse-line text-3xl text-white"></i>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">90%</div>
                  <div className="text-gray-600">User Satisfaction Rate</div>
                </div>
              </div>
              <div className="text-center space-y-4">
                <div className="w-20 h-20 flex items-center justify-center bg-gradient-to-br from-blue-500 to-teal-500 rounded-full mx-auto">
                  <i className="ri-shield-check-line text-3xl text-white"></i>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900">94.5%</div>
                  <div className="text-gray-600">System Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-600/5 to-cyan-600/5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Transform Your Industry Operations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our industry-specific expertise can modernize your technology systems and deliver measurable improvements to your operational outcomes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 transition-all duration-300 hover:scale-105 hover:shadow-lg whitespace-nowrap transform hover:-translate-y-1"
              >
                <span>Schedule a Consultation</span>
                <i className="ri-calendar-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
