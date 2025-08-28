
'use client';

import AnimatedCounter from '../AnimatedCounter';

export default function StatsSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering measurable results across industries and regions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
            <div className="counter-animation">
              <AnimatedCounter end={100} duration={2000} suffix="+" className="text-4xl lg:text-5xl font-bold text-teal-600 counter-animation transition-all duration-300 hover:scale-110" />
            </div>
            <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              IT Projects
            </p>
            <p className="text-gray-600">Successfully delivered solutions</p>
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
          </div>

          <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
            <div className="counter-animation">
              <AnimatedCounter end={25} duration={2000} suffix="+" className="text-4xl lg:text-5xl font-bold text-teal-600 counter-animation transition-all duration-300 hover:scale-110" />
            </div>
            <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              Organizations Served
            </p>
            <p className="text-gray-600">Diverse expertise across markets</p>
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
          </div>

          <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
            <div className="counter-animation">
              <AnimatedCounter end={3} duration={2000} suffix="+" className="text-4xl lg:text-5xl font-bold text-teal-600 counter-animation transition-all duration-300 hover:scale-110" />
            </div>
            <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              Years Experience
            </p>
            <p className="text-gray-600">Proven track record of excellence</p>
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
          </div>

          <div className="space-y-4 group hover:scale-105 transition-transform duration-300">
            <div className="counter-animation">
              <AnimatedCounter end={90} duration={2000} suffix="%" className="text-4xl lg:text-5xl font-bold text-teal-600 counter-animation transition-all duration-300 hover:scale-110" />
            </div>
            <p className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-teal-600 transition-colors duration-300">
              User Satisfaction
            </p>
            <p className="text-gray-600">Exceeding expectations consistently</p>
            <div className="w-16 h-1 bg-teal-500 mx-auto rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" aria-hidden="true"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
