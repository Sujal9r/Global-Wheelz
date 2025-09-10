"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-16 px-4 border-t border-red-200">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <img src="/Logo.png" alt="Global wheels Logo" className="h-12 md:h-15 lg:h-18 w-auto object-contain" />
          </div>
          <p className="text-gray-600 max-w-4xl leading-relaxed">
            At <span className="font-semibold text-gray-800">Global wheels</span>, we deliver seamless, efficient, and secure international logistics 
            solutions. From freight forwarding to last-mile delivery, we ensure your cargo 
            reaches every corner of the globe on time, every time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li><Link href="/" className="text-gray-600 hover:text-red-600 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-600 hover:text-red-600 transition-colors">About Us</Link></li>
              <li><Link href="/services" className="text-gray-600 hover:text-red-600 transition-colors">Our Services</Link></li>
              <li><Link href="/tracking" className="text-gray-600 hover:text-red-600 transition-colors">Track Shipment</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-red-600 transition-colors">Contact Us</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-red-600 transition-colors">Careers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Logistics Services
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services/freight-forwarding" className="text-gray-600 hover:text-red-600 transition-colors">Freight Forwarding</Link></li>
              <li><Link href="/services/warehousing" className="text-gray-600 hover:text-red-600 transition-colors">Warehousing Solutions</Link></li>
              <li><Link href="/services/supply-chain" className="text-gray-600 hover:text-red-600 transition-colors">Supply Chain Management</Link></li>
              <li><Link href="/services/custom-clearance" className="text-gray-600 hover:text-red-600 transition-colors">Custom Clearance</Link></li>
              <li><Link href="/services/last-mile" className="text-gray-600 hover:text-red-600 transition-colors">Last-Mile Delivery</Link></li>
              <li><Link href="/services/international-shipping" className="text-gray-600 hover:text-red-600 transition-colors">International Shipping</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Industries We Serve
            </h3>
            <ul className="space-y-3">
              <li><Link href="/industries/e-commerce" className="text-gray-600 hover:text-red-600 transition-colors">E-commerce</Link></li>
              <li><Link href="/industries/retail" className="text-gray-600 hover:text-red-600 transition-colors">Retail</Link></li>
              <li><Link href="/industries/manufacturing" className="text-gray-600 hover:text-red-600 transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/automotive" className="text-gray-600 hover:text-red-600 transition-colors">Automotive</Link></li>
              <li><Link href="/industries/healthcare" className="text-gray-600 hover:text-red-600 transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/technology" className="text-gray-600 hover:text-red-600 transition-colors">Technology</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Global Offices
            </h3>
            <div className="space-y-3 text-gray-600">
              <p>India (HQ): +91 87690 20445</p>
              <p>Dubai: +971 55 123 4567</p>
              <p>Germany: +49 30 123456</p>
              <p>USA: +1 (212) 555-7890</p>
              <p>Singapore: +65 1234 5678</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
              >
                <img src="/Twiter.png" alt="Twitter" />
              </Link>
              <Link
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
              >
                <img src="/Facebook.png" alt="Facebook" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/global-Wheels"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
              >
                <img src="/Linkedin.png" alt="LinkedIn" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors"
              >
                <img src="/Instagram.png" alt="Instagram" />
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold mb-6 bg-gradient-to-r from-black via-red-600 to-white bg-clip-text text-transparent">
              Subscribe to Our Newsletter
            </h3>
            <p className="text-gray-600 mb-4">
              Stay updated with the latest trends in international logistics, shipping solutions, and industry insights.
            </p>
            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 py-3 rounded-lg text-gray-800 placeholder-gray-500 bg-white border border-red-300 focus:outline-none focus:border-red-500"
              />
              <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-red-600 hover:bg-red-700 p-3 rounded-md transition-colors">
                <img src="/Arrow.png" alt="Submit" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-600 text-sm border-t border-red-200 p-4 bg-red-50">
          © {new Date().getFullYear()} Global wheels. All Rights Reserved. | Driving Global Logistics Excellence
        </div>
      </div>
    </footer>
  );
};

export default Footer;
