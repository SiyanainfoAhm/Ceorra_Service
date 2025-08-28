
'use client';

export default function LocationSection() {
  return (
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
                  <p className="text-gray-600">Ceorra Services Pvt Ltd<br />Shivalik Shilp, 1302, 13th floor<br />ISCON Circle, Sarkhej - Gandhinagar Hwy<br />Ahmedabad, Gujarat 380015</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                  <i className="ri-phone-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91 93134 78015</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 flex items-center justify-center bg-teal-100 rounded-lg">
                  <i className="ri-mail-line text-teal-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-600">hr@ceorra.in</p>
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
  );
}
