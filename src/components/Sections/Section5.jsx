"use client";

const Section5 = () => {
  return (
    <div className="w-full bg-white py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent mb-4">
            Our Locations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Serving across India with offices in Jaipur, Delhi, Mumbai & Chennai
          </p>
        </div>

        {/* Map Container */}
        <div className="relative">
          {/* Map Wrapper with Red Border */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-red-200 hover:border-red-300 transition-all duration-300">
            {/* Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d222.30829127953643!2d75.7575959411733!3d26.9373492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db3d0ba43e179%3A0x1a5aff851e6633e6!2sGordhan%20Sky!5e0!3m2!1sen!2sin!4v1757398111211!5m2!1sen!2sin"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-[300px] sm:h-[400px] lg:h-[500px]"
              title="Global wheels Location"
            />
            
            {/* Overlay with Company Info */}
            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-red-200 max-w-xs">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <h3 className="font-bold text-red-600">Global wheels</h3>
              </div>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Operation Office:</strong><br />
                501A Gordhan Sky, Khatipura Road<br />
                Jhotwara, Jaipur 302012
              </p>
              <p className="text-sm text-gray-600">
                <strong>Contact:</strong><br />
                +91 96723 44833<br />
                amit@globalwheels.co.in
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-red-400/20 to-transparent rounded-full blur-xl"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-red-500/20 to-transparent rounded-full blur-lg"></div>
          </div>

          {/* Office Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {/* Jaipur - Operation Office */}
            <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-lg">🏢</span>
                </div>
                <h3 className="font-semibold text-red-600">Jaipur - Operations</h3>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>501A Gordhan Sky</strong><br />
                Khatipura Road, Jhotwara<br />
                Jaipur 302012
              </p>
            </div>

            {/* Jaipur - Sales Office */}
            <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-lg">💼</span>
                </div>
                <h3 className="font-semibold text-red-600">Jaipur - Sales</h3>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>Nirman Nagar</strong><br />
                Near Punjabi Dhaba<br />
                Jaipur 302019
              </p>
            </div>

            {/* Delhi Office */}
            <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-lg">🏛️</span>
                </div>
                <h3 className="font-semibold text-red-600">Delhi</h3>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>Capital Office</strong><br />
                New Delhi<br />
                India
              </p>
            </div>

            {/* Mumbai Office */}
            <div className="bg-gradient-to-br from-white to-red-50 p-6 rounded-xl border border-red-200 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600 text-lg">🌊</span>
                </div>
                <h3 className="font-semibold text-red-600">Mumbai</h3>
              </div>
              <p className="text-gray-600 text-sm">
                <strong>Port City Office</strong><br />
                Mumbai<br />
                Maharashtra, India
              </p>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mt-8 bg-gradient-to-r from-red-50 to-white p-8 rounded-2xl border border-red-200">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-red-600 mb-6">Get In Touch</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xl">📧</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Email</p>
                    <p className="text-gray-600">amit@globalwheels.co.in</p>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                    <span className="text-red-600 text-xl">📱</span>
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">Mobile</p>
                    <p className="text-gray-600">+91 96723 44833</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
