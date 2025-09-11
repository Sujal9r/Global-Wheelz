"use client";
import Navbar from '../../../components/Layout/Navbar';
import Footer from '../../../components/Layout/Footer';

export default function CustomClearance() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-30 pb-16 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent mb-6">
              Custom Clearance Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert customs clearance services ensuring smooth border crossings and compliance with international regulations.
            </p>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-red-600 mb-6">Expert Customs Solutions</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Our customs clearance experts ensure your shipments comply with all international regulations and clear customs smoothly. We handle all documentation, duties, and procedures to minimize delays and maximize efficiency.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Import and export documentation</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Duty and tax calculations</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Customs bond management</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Regulatory compliance assistance</span>
                </div>
              </div>
            </div>
            <div className="bg-red-50 p-8 rounded-2xl">
              <div className="text-6xl mb-4 text-center">📋</div>
              <h3 className="text-2xl font-bold text-red-600 mb-4 text-center">Our Customs Expertise</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Licensed customs brokers
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Knowledge of global trade regulations
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Fast clearance processing
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Cost optimization strategies
                </li>
              </ul>
            </div>
          </div>

          {/* Services Offered */}
          <div className="bg-white border border-red-200 rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-red-600 mb-8 text-center">Customs Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📄</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm">Complete import/export documentation preparation</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Duty Management</h3>
                <p className="text-gray-600 text-sm">Accurate duty and tax calculations</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Fast Processing</h3>
                <p className="text-gray-600 text-sm">Expedited customs clearance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Need Customs Clearance?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get expert customs clearance services for your international shipments.
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
