
'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function About() {
  const values = [
    {
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our engagements, ensuring transparency and accountability in every project.',
      icon: 'ri-shield-check-line'
    },
    {
      title: 'Innovation',
      description: 'We leverage cutting-edge technologies and methodologies to deliver transformative IT solutions that drive organizational excellence.',
      icon: 'ri-lightbulb-line'
    },
    {
      title: 'Impact',
      description: 'Every solution we deliver is designed to create meaningful, measurable improvements in organizational efficiency and citizen services.',
      icon: 'ri-target-line'
    },
    {
      title: 'Inclusion',
      description: 'We foster diverse perspectives and inclusive design principles to build technology solutions that serve everyone effectively.',
      icon: 'ri-community-line'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', icon: 'ri-shield-check-fill' },
    { name: 'SOC 2 Type II', icon: 'ri-award-line' },
    { name: 'CMMI Level 3', icon: 'ri-medal-line' },
    { name: 'Agile Certified', icon: 'ri-verified-badge-line' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section 
        className="relative py-20 lg:py-32 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(13, 148, 136, 0.1), rgba(6, 182, 212, 0.1)), url('https://unsplash.it/1920/800?random=office')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-white/85"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
              About <span className="text-teal-600">Ceorra Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our mission is to empower public organizations with reliable, future-ready IT systems that improve citizen lives through innovative technology solutions and expert implementation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Values</h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                We are guided by core principles that shape every interaction, decision, and solution we deliver to our public sector partners.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-8 text-center space-y-6 hover:shadow-lg transition-all duration-500 hover:-translate-y-2 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300">
                  <i className={`${value.icon} text-2xl text-teal-600`}></i>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Location</h2>
                <p className="text-xl text-gray-600 leading-relaxed mb-8">
                  Strategically located to serve government agencies and public sector organizations nationwide with comprehensive IT solutions and support.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-map-pin-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-600">Ceorra Services Pvt Ltd<br />Plot No. 1086, Sector 37<br />Faridabad, Haryana 121003</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-phone-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <p className="text-gray-600">+91 (129) 456-7890</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                    <i className="ri-mail-line text-teal-600 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">hello@ceorra.in</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img 
                  src="https://unsplash.it/600/400?random=map" 
                  alt="Office Location" 
                  className="w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Certifications & Standards</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maintaining industry-leading certifications to ensure the highest quality and security in all our IT deliverables.
            </p>
            <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mt-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className="bg-white rounded-lg p-8 text-center space-y-4 hover:bg-teal-50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-teal-100 rounded-full mx-auto group-hover:bg-teal-200 group-hover:scale-110 transition-all duration-300">
                  <i className={`${cert.icon} text-2xl text-teal-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
                  {cert.name}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}