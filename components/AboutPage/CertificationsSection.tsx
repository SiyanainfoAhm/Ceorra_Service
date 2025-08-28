'use client';

export default function CertificationsSection() {
  const certifications = [
    { name: 'ISO 27001', icon: 'ri-shield-check-fill' },
    { name: 'SOC 2 Type II', icon: 'ri-award-line' },
    { name: 'CMMI Level 3', icon: 'ri-medal-line' },
    { name: 'Agile Certified', icon: 'ri-verified-badge-line' }
  ];

  return (
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
  );
}