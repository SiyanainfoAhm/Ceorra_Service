'use client';

export default function AboutHeroSection() {
  return (
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
  );
}