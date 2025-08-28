'use client';

export default function ValuesSection() {
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

  return (
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
  );
}