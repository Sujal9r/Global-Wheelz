"use client";
import Navbar from '../../components/Layout/Navbar';
import Footer from '../../components/Layout/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="pt-30 pb-16 bg-gradient-to-br from-white via-red-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get in touch with our logistics experts for personalized shipping solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white border border-red-200 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-red-600 mb-6">Send us a Message</h2>
              <form className="space-y-6" onSubmit={(e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you soon.');
              }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                      placeholder="Surname"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Hello@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                    placeholder="Tell us about your shipping needs..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-red-600 mb-6">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Headquarters</h3>
                      <p className="text-gray-600">123 Logistics Street<br />Mumbai, India 400001</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Phone</h3>
                      <p className="text-gray-600">+91 87690 20445<br />+1 (212) 555-7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <span className="text-red-600 text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Email</h3>
                      <p className="text-gray-600">info@globalwheels.com<br />support@globalwheels.com</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-2xl">
                <h3 className="text-lg font-bold text-red-600 mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                  <p className="text-sm text-gray-600 mt-4">Emergency support available 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
