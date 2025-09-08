"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center mb-6">
            <img src="/Logo.png" alt="Logo" className="h-10" />
          </div>
          <p className="text-gray-300 max-w-4xl leading-relaxed">
            We are committed to our relentless pursuit of developing efficient solutions for small to large companies and individuals to make technology work with you, for you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">About</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Career</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Insights</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li><Link href="/products/payroll" className="text-gray-300 hover:text-white transition-colors">Payroll Software</Link></li>
              <li><Link href="/products/performance" className="text-gray-300 hover:text-white transition-colors">Performance & Carrers</Link></li>
              <li><Link href="/products/hr" className="text-gray-300 hover:text-white transition-colors">Modern Hr</Link></li>
              <li><Link href="/products/attendance" className="text-gray-300 hover:text-white transition-colors">Time & Attendance</Link></li>
              <li><Link href="/products/onboarding" className="text-gray-300 hover:text-white transition-colors">Hiring & Onboarding</Link></li>
              <li><Link href="/products/projects" className="text-gray-300 hover:text-white transition-colors">TimeSheet & Project</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Customers</h3>
            <ul className="space-y-3">
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Testimonials</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Entertainment</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">NGO</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Social-Networking</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Education</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">More +</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Hire</h3>
            <ul className="space-y-3">
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Mobile App Developers</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Web App Developers</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">UI UX Designers</Link></li>
              <li><Link href="" className="text-gray-300 hover:text-white transition-colors">Penetration Testers</Link></li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p>Jaipur : +91 8769020445</p>
              <p>Bangalore : +91 8104291629</p>
              <p>Pune : +91 9680029092</p>
              <p>Indore : +91 9425645147</p>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img src="/Twiter.png" alt="Twitter" />
              </Link>

              <Link
                href="https://www.facebook.com/profile.php?id=61579311902829"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img src="/Facebook.png" alt="Facebook" />
              </Link>

              <Link
                href="https://www.linkedin.com/company/Global-Wheelz"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img src="/Linkedin.png" alt="LinkedIn" />
              </Link>

              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img src="/Instagram.png" alt="Instagram" />
              </Link>

              <Link
                href="https://behance.net"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-700 transition-colors"
              >
                <img src="/Be.png" alt="Behance" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6">Subscribe to our Newsletter!</h3>
            <div className="relative w-full max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full pl-4 py-3 rounded-lg text-white placeholder-gray-400 bg-gray-900 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
              <button className="absolute top-1/2 right-1 -translate-y-1/2 bg-orange-500 hover:bg-orange-600 p-3 rounded-md transition-colors">
                <img src="/Arrow.png" alt="Submit" className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm border-t border-gray-800 p-4 bg-[#1B1C1E]">
          © 2023 DeepOrion. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
