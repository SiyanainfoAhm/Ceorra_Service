
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { useState } from 'react';

export default function Solutions() {
  const [activeFilter, setActiveFilter] = useState('All');

  const solutions = [
    {
      id: 'custom-development',
      title: 'Custom Application Development',
      description: 'Tailored software solutions designed specifically for your government operations, ensuring seamless integration with existing systems and compliance with all regulatory requirements.',
      category: 'Development',
      image: 'https://readdy.ai/api/search-image?query=Custom%20software%20development%20team%20working%20on%20government%20applications%2C%20modern%20development%20environment%2C%20coding%20screens%2C%20professional%20software%20engineers%2C%20government%20system%20integration%2C%20teal%20color%20accents&width=400&height=300&seq=dev-1&orientation=landscape',
      keyFeatures: ['Legacy Integration', 'Compliance-First', 'Scalable Architecture', 'Security-Focused'],
      stats: [
        { number: '300+', label: 'Applications Built' },
        { number: '99.9%', label: 'Uptime Achieved' },
        { number: '75%', label: 'Faster Development' },
        { number: '100%', label: 'Compliance Rate' }
      ],
      challenges: [
        'Legacy system compatibility issues',
        'Complex regulatory requirements',
        'Cross-platform integration needs',
        'Scalability planning requirements'
      ],
      outcomes: [
        '60% improvement in operational efficiency',
        '85% reduction in manual processes',
        '40% faster citizen service delivery',
        '95% user satisfaction rating'
      ]
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration & Modernization',
      description: 'Comprehensive cloud transformation services that migrate your infrastructure while maintaining security, compliance, and operational continuity throughout the transition.',
      category: 'Cloud',
      image: 'https://readdy.ai/api/search-image?query=Government%20cloud%20infrastructure%20migration%2C%20data%20center%20modernization%2C%20cloud%20servers%2C%20digital%20transformation%2C%20professional%20IT%20environment%2C%20secure%20cloud%20computing%2C%20teal%20technology%20elements&width=400&height=300&seq=cloud-1&orientation=landscape',
      keyFeatures: ['Zero-Downtime Migration', 'Cost Optimization', 'Security Enhancement', 'Performance Monitoring'],
      stats: [
        { number: '150+', label: 'Systems Migrated' },
        { number: '45%', label: 'Cost Reduction' },
        { number: '99.95%', label: 'Migration Success' },
        { number: '30%', label: 'Performance Boost' }
      ],
      challenges: [
        'Complex data migration requirements',
        'Maintaining operational continuity',
        'Ensuring security compliance',
        'Staff training and adoption'
      ],
      outcomes: [
        '50% reduction in infrastructure costs',
        '80% improvement in system performance',
        '90% faster deployment capabilities',
        '100% compliance maintenance'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security frameworks protecting government data and systems against evolving threats while ensuring full compliance with federal and state regulations.',
      category: 'Security',
      image: 'https://readdy.ai/api/search-image?query=Government%20cybersecurity%20operations%20center%2C%20security%20monitoring%20screens%2C%20cyber%20defense%20systems%2C%20threat%20detection%20dashboard%2C%20professional%20security%20environment%2C%20teal%20interface%20elements&width=400&height=300&seq=security-1&orientation=landscape',
      keyFeatures: ['Threat Detection', '24/7 Monitoring', 'Incident Response', 'Compliance Auditing'],
      stats: [
        { number: '100+', label: 'Threats Blocked Daily' },
        { number: '95%', label: 'Threat Detection Rate' },
        { number: '15min', label: 'Response Time' },
        { number: '100%', label: 'Compliance Score' }
      ],
      challenges: [
        'Evolving cyber threat landscape',
        'Complex compliance requirements',
        'Resource allocation constraints',
        'Staff cybersecurity training'
      ],
      outcomes: [
        '90% reduction in security incidents',
        '75% faster threat response',
        '100% audit compliance',
        '85% improvement in security posture'
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & Machine Learning',
      description: 'Intelligent automation and predictive analytics solutions that enhance decision-making, improve service delivery, and optimize government operations.',
      category: 'AI & Innovation',
      image: 'https://readdy.ai/api/search-image?query=Government%20AI%20and%20machine%20learning%20center%2C%20data%20analytics%20visualization%2C%20artificial%20intelligence%20dashboard%2C%20predictive%20analytics%20screens%2C%20modern%20AI%20technology%2C%20teal%20interface%20design&width=400&height=300&seq=ai-1&orientation=landscape',
      keyFeatures: ['Predictive Analytics', 'Process Automation', 'Decision Support', 'Data Insights'],
      stats: [
        { number: '50+', label: 'AI Models Deployed' },
        { number: '80%', label: 'Process Automation' },
        { number: '65%', label: 'Decision Accuracy' },
        { number: '40%', label: 'Efficiency Gain' }
      ],
      challenges: [
        'Data quality and availability',
        'Algorithm transparency requirements',
        'Staff AI literacy development',
        'Ethical AI implementation'
      ],
      outcomes: [
        '70% reduction in processing time',
        '85% improvement in prediction accuracy',
        '60% cost savings in operations',
        '90% faster data-driven decisions'
      ]
    },
    {
      id: 'big-data',
      title: 'Big Data & Analytics',
      description: 'Comprehensive data management and analytics platforms that transform raw government data into actionable insights for better policy decisions.',
      category: 'Data Analytics',
      image: 'https://readdy.ai/api/search-image?query=Government%20big%20data%20analytics%20center%2C%20data%20visualization%20dashboard%2C%20business%20intelligence%20platform%2C%20analytics%20workstation%2C%20data%20science%20environment%2C%20teal%20color%20accents&width=400&height=300&seq=data-1&orientation=landscape',
      keyFeatures: ['Data Warehousing', 'Real-time Analytics', 'Interactive Dashboards', 'Predictive Modeling'],
      stats: [
        { number: '10TB+', label: 'Data Processed Daily' },
        { number: '200+', label: 'Analytics Reports' },
        { number: '90%', label: 'Data Accuracy' },
        { number: '5sec', label: 'Query Response' }
      ],
      challenges: [
        'Data silos across departments',
        'Complex data integration needs',
        'Real-time processing requirements',
        'Privacy and security concerns'
      ],
      outcomes: [
        '80% faster data access',
        '95% improvement in data quality',
        '70% better decision outcomes',
        '50% reduction in reporting time'
      ]
    },
    {
      id: 'devops',
      title: 'DevOps & Automation',
      description: 'Streamlined development and deployment processes that accelerate software delivery while maintaining high quality and security standards.',
      category: 'Infrastructure',
      image: 'https://readdy.ai/api/search-image?query=DevOps%20automation%20pipeline%2C%20continuous%20integration%20environment%2C%20deployment%20monitoring%20screens%2C%20software%20development%20lifecycle%2C%20professional%20development%20team%2C%20teal%20interface%20elements&width=400&height=300&seq=devops-1&orientation=landscape',
      keyFeatures: ['CI/CD Pipelines', 'Infrastructure as Code', 'Automated Testing', 'Monitoring & Alerting'],
      stats: [
        { number: '500+', label: 'Deployments Monthly' },
        { number: '85%', label: 'Deployment Success' },
        { number: '60%', label: 'Faster Delivery' },
        { number: '40%', label: 'Fewer Errors' }
      ],
      challenges: [
        'Complex deployment environments',
        'Legacy system integration',
        'Quality assurance automation',
        'Team collaboration coordination'
      ],
      outcomes: [
        '75% faster time to market',
        '90% reduction in deployment errors',
        '65% improvement in team productivity',
        '80% faster bug resolution'
      ]
    },
    {
      id: 'digital-transformation',
      title: 'Digital Transformation',
      description: 'End-to-end modernization strategies that transform government operations through technology adoption, process optimization, and cultural change.',
      category: 'Strategy',
      image: 'https://readdy.ai/api/search-image?query=Government%20digital%20transformation%20strategy%20meeting%2C%20modernization%20planning%2C%20technology%20roadmap%20presentation%2C%20executive%20leadership%20team%2C%20professional%20consulting%20environment%2C%20teal%20color%20scheme&width=400&height=300&seq=transform-1&orientation=landscape',
      keyFeatures: ['Strategic Planning', 'Change Management', 'Technology Roadmaps', 'Performance Metrics'],
      stats: [
        { number: '25+', label: 'Agencies Transformed' },
        { number: '70%', label: 'Efficiency Improvement' },
        { number: '90%', label: 'Adoption Rate' },
        { number: '18mo', label: 'Average Timeline' }
      ],
      challenges: [
        'Organizational change resistance',
        'Legacy technology dependencies',
        'Budget allocation planning',
        'Stakeholder alignment issues'
      ],
      outcomes: [
        '80% improvement in citizen satisfaction',
        '65% reduction in operational costs',
        '90% increase in digital service usage',
        '75% faster service delivery'
      ]
    },
    {
      id: 'infrastructure',
      title: 'IT Infrastructure Management',
      description: 'Comprehensive infrastructure services ensuring optimal performance, security, and reliability of your government technology systems.',
      category: 'Infrastructure',
      image: 'https://readdy.ai/api/search-image?query=Government%20IT%20infrastructure%20management%20center%2C%20server%20monitoring%2C%20network%20operations%20center%2C%20system%20administration%2C%20professional%20data%20center%20environment%2C%20teal%20technology%20displays&width=400&height=300&seq=infra-1&orientation=landscape',
      keyFeatures: ['24/7 Monitoring', 'Proactive Maintenance', 'Disaster Recovery', 'Performance Optimization'],
      stats: [
        { number: '1000+', label: 'Servers Managed' },
        { number: '99.9%', label: 'Uptime Guarantee' },
        { number: '24/7', label: 'Support Coverage' },
        { number: '2min', label: 'Alert Response' }
      ],
      challenges: [
        'Aging infrastructure components',
        'Capacity planning requirements',
        'Security vulnerability management',
        'Disaster recovery preparedness'
      ],
      outcomes: [
        '95% reduction in system downtime',
        '80% improvement in system performance',
        '70% lower maintenance costs',
        '100% disaster recovery readiness'
      ]
    },
    {
      id: 'integration',
      title: 'System Integration Services',
      description: 'Seamless integration solutions that connect disparate government systems, enabling data sharing and workflow optimization across departments.',
      category: 'Integration',
      image: 'https://readdy.ai/api/search-image?query=Government%20system%20integration%20architecture%2C%20data%20flow%20visualization%2C%20API%20connectivity%20diagram%2C%20enterprise%20integration%20platform%2C%20professional%20systems%20architecture%2C%20teal%20interface%20design&width=400&height=300&seq=integration-1&orientation=landscape',
      keyFeatures: ['API Development', 'Data Synchronization', 'Workflow Automation', 'Legacy Connectivity'],
      stats: [
        { number: '200+', label: 'Systems Integrated' },
        { number: '95%', label: 'Data Accuracy' },
        { number: '50%', label: 'Process Efficiency' },
        { number: '100%', label: 'Compatibility Rate' }
      ],
      challenges: [
        'Incompatible legacy systems',
        'Data format standardization',
        'Security integration requirements',
        'Performance optimization needs'
      ],
      outcomes: [
        '85% reduction in data silos',
        '70% improvement in workflow efficiency',
        '90% faster data access',
        '60% reduction in manual data entry'
      ]
    }
  ];

  const categories = ['All', 'Development', 'Cloud', 'Security', 'AI & Innovation', 'Data Analytics', 'Infrastructure', 'Strategy', 'Integration'];

  const filteredSolutions = activeFilter === 'All'
    ? solutions
    : solutions.filter(solution => solution.category === activeFilter);

  const technologies = [
    { name: 'React', icon: 'ri-reactjs-line' },
    { name: 'Node.js', icon: 'ri-nodejs-line' },
    { name: 'Python', icon: 'ri-code-line' },
    { name: 'AWS', icon: 'ri-cloud-line' },
    { name: 'Docker', icon: 'ri-docker-line' },
    { name: 'Kubernetes', icon: 'ri-settings-3-line' },
    { name: 'PostgreSQL', icon: 'ri-database-2-line' },
    { name: 'Redis', icon: 'ri-database-line' },
    { name: 'GraphQL', icon: 'ri-link' },
    { name: 'TypeScript', icon: 'ri-code-s-slash-line' },
    { name: 'MongoDB', icon: 'ri-leaf-line' },
    { name: 'Elasticsearch', icon: 'ri-search-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section
        className="relative py-24 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.9), rgba(6, 182, 212, 0.9)), url('https://readdy.ai/api/search-image?query=Government%20technology%20solutions%20center%20with%20modern%20IT%20infrastructure%2C%20professional%20consulting%20environment%2C%20digital%20transformation%20displays%2C%20public%20sector%20innovation%2C%20teal%20color%20scheme&width=1920&height=800&seq=solutions-hero&orientation=landscape')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-white">
              Comprehensive IT Solutions
            </h1>
            <p className="text-xl text-teal-100 max-w-4xl mx-auto leading-relaxed">
              Transform your government operations with our proven technology solutions. From custom development to cloud migration, we deliver secure, scalable, and citizen-focused innovations.
            </p>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>

            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">500+</div>
                <div className="text-teal-100">Projects Delivered</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">99.9%</div>
                <div className="text-teal-100">System Uptime</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">75%</div>
                <div className="text-teal-100">Faster Delivery</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="text-3xl font-bold text-white">95%</div>
                <div className="text-teal-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full border-2 font-semibold ${
                  activeFilter === category
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

      {/* Solutions Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Solution Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed specifically for government operations and public sector requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-teal-300 hover:shadow-2xl cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-48 object-cover object-top"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-teal-600 text-white rounded-full text-sm font-medium">
                      {solution.category}
                    </span>
                  </div>

                  {/* Stats Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                    <div className="text-xs font-semibold text-teal-600">{solution.stats[0].number}</div>
                    <div className="text-xs text-gray-600">{solution.stats[0].label}</div>
                  </div>
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900">
                      {solution.title}
                    </h3>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-xs text-gray-500">Active</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">
                    {solution.description}
                  </p>

                  {/* Key Stats Grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {solution.stats.slice(1, 3).map((stat, statIndex) => (
                      <div key={statIndex} className="text-center bg-teal-50 rounded-lg p-2">
                        <div className="text-sm font-bold text-teal-600">{stat.number}</div>
                        <div className="text-xs text-gray-600">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Tags */}
                  <div className="flex flex-wrap gap-1">
                    {solution.keyFeatures.slice(0, 3).map((feature, featureIndex) => (
                      <span key={featureIndex} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300 text-sm">
                      Learn More <i className="ri-arrow-right-line ml-2"></i>
                    </div>

                    {/* Compliance Badge */}
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex items-center space-x-1">
                        <i className="ri-shield-check-line text-green-500 text-sm"></i>
                        <span className="text-xs text-gray-500">Compliant</span>
                      </div>
                    </div>
                  </div>

                  {/* Additional Details */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Challenges Addressed</h4>
                      <div className="space-y-1">
                        {solution.challenges.slice(0, 2).map((challenge, challengeIndex) => (
                          <div key={challengeIndex} className="flex items-start space-x-2">
                            <i className="ri-arrow-right-s-line text-red-500 mt-0.5 text-sm"></i>
                            <span className="text-xs text-gray-700">{challenge}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2 text-sm">Key Outcomes</h4>
                      <div className="space-y-1">
                        {solution.outcomes.slice(0, 2).map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-start space-x-2">
                            <i className="ri-check-line text-green-500 mt-0.5 text-sm"></i>
                            <span className="text-xs text-gray-700">{outcome}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and proven frameworks to deliver robust, scalable solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="group bg-white rounded-xl p-6 text-center space-y-4 hover:shadow-lg border border-gray-200"
              >
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg mx-auto">
                  <i className={`${tech.icon} text-2xl text-teal-600`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">{tech.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl font-bold text-gray-900">Our Proven Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach that ensures successful project delivery from initial consultation to ongoing support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { step: '01', title: 'Discovery & Analysis', description: 'Comprehensive assessment of your current systems and requirements' },
              { step: '02', title: 'Strategic Planning', description: 'Development of detailed project roadmap and technical architecture' },
              { step: '03', title: 'Development & Testing', description: 'Agile development with continuous testing and quality assurance' },
              { step: '04', title: 'Deployment & Integration', description: 'Seamless implementation with minimal operational disruption' },
              { step: '05', title: 'Support & Optimization', description: 'Ongoing maintenance and performance optimization services' }
            ].map((process, index) => (
              <div key={process.step} className="text-center space-y-4">
                <div className="relative">
                  <div className="w-16 h-16 bg-teal-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto">
                    {process.step}
                  </div>
                  {index < 4 && (
                    <div className="hidden md:block absolute top-8 left-16 w-full h-0.5 bg-teal-200"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{process.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-gray-900">
              Ready to Transform Your Government Operations?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Let's discuss how our proven solutions can modernize your systems and improve citizen services.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link
                href="/contact"
                className="inline-flex items-center space-x-2 bg-teal-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-700 whitespace-nowrap"
              >
                <span>Get Started Today</span>
                <i className="ri-arrow-right-line"></i>
              </Link>

              <Link
                href="/insights"
                className="inline-flex items-center space-x-2 border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-teal-600 hover:text-white whitespace-nowrap"
              >
                <span>View Case Studies</span>
                <i className="ri-file-text-line"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
