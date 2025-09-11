"use client";
import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';

export default function DoorToDoorServices() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-30 pb-16 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent mb-6">
              Door to Door Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complete end-to-end delivery solutions from pickup to final destination with full visibility and tracking.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Complete Logistics Solution</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our door-to-door service ensures your cargo is handled with care from the moment we pick it up until it reaches its final destination. We manage every step of the journey, providing you with peace of mind and complete visibility.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Professional pickup and packaging</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Real-time tracking throughout the journey</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Secure handling and storage</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Direct delivery to recipient</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <div className="text-6xl mb-4 text-center">🚚</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">Why Choose Our Door-to-Door Service?</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Hassle-free shipping experience
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Competitive pricing with no hidden fees
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Insurance coverage for your peace of mind
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  24/7 customer support
                </li>
              </ul>
            </div>
          </div>

          {/* Process Steps */}
          <div className="bg-white border border-red-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Our Door-to-Door Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">1. Book Service</h3>
                <p className="text-gray-600 text-sm">Contact us to schedule pickup</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📦</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">2. Pickup</h3>
                <p className="text-gray-600 text-sm">We collect your package</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚛</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">3. Transport</h3>
                <p className="text-gray-600 text-sm">Secure transportation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">4. Delivery</h3>
                <p className="text-gray-600 text-sm">Direct delivery to destination</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Ready for Door-to-Door Service?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your door-to-door shipping needs.
          </p>
          <button 
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
          >
            Get Quote Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
