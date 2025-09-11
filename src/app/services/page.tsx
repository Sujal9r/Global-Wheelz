"use client";
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

export default function Services() {
  const services = [
    {
      title: "Air Freight",
      description: "Fast and reliable air cargo solutions for urgent shipments worldwide with real-time tracking.",
      icon: "✈️"
    },
    {
      title: "Sea Freight",
      description: "Cost-effective ocean freight solutions for large volume shipments with comprehensive logistics support.",
      icon: "🚢"
    },
    {
      title: "Custom Clearance",
      description: "Expert customs clearance services ensuring smooth border crossings and compliance with international regulations.",
      icon: "📋"
    },
    {
      title: "International Transportation",
      description: "Comprehensive transportation solutions connecting businesses across continents with seamless logistics.",
      icon: "🌍"
    },
    {
      title: "Door to Door Services",
      description: "Complete end-to-end delivery solutions from pickup to final destination with full visibility.",
      icon: "🚚"
    },
    {
      title: "Express Delivery",
      description: "Priority shipping services for time-sensitive deliveries with guaranteed delivery times.",
      icon: "⚡"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive logistics solutions tailored to meet your international shipping needs.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-red-200 rounded-2xl p-8 hover:shadow-xl hover:border-red-300 transition-all duration-300 group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-red-600 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Ready to Ship Globally?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Get a personalized quote for your shipping needs and experience the Global wheels difference.
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
