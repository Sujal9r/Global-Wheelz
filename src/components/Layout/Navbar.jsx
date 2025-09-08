"use client";
import React, { useState, useEffect } from "react";
import Button from "../Common/Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isCustomersOpen, setIsCustomersOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Set initial scroll state
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsProductsOpen(false);
    setIsCustomersOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mounted && scrolled
          ? "bg-blue/40 backdrop-blur-xl border-b border-blue-500/30 shadow-lg shadow-blue-500/40"
          : "bg-gradient-to-r from-black/80 via-gray-900/80 to-black/80 backdrop-blur-sm border-b border-blue-500/20"
      } h-20`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 via-transparent to-blue-900/10 opacity-50"></div>

      <div className="relative w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex justify-start items-center">
            <a href="/" onClick={closeMobileMenu} className="cursor-pointer">
              <img src="/Logo.png" alt="Logo" className="h-10 sm:h-12 lg:h-14" />
            </a>
          </div>
          <div className="hidden xl:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a
                href="/"
                className="text-blue-200 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 rounded-lg"
              >
                Home
              </a>
              <div
                className="relative"
                onMouseEnter={() => setIsProductsOpen(true)}
                onMouseLeave={() => setIsProductsOpen(false)}
              >
                <button className="text-blue-200 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-colors">
                  <span>Products</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isProductsOpen ? "rotate-180" : ""
                    } group-hover:text-blue-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                {isProductsOpen && (
                  <div className="absolute top-full left-0 w-[48rem] bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-blue-500/30 z-50 overflow-hidden">
                    <div className="py-6 px-6 grid grid-cols-2 gap-4">
                      {[
                        {
                          name: "Payroll Software",
                          desc: "Automate and pay employees on time and stay compliant",
                          icon: "💰",
                          href: "/products/payroll",
                        },
                        {
                          name: "Performance & Careers",
                          desc: "360 reviews, Goals and OKRs, Continuous feedback and more",
                          icon: "📊",
                          href: "/products/performance",
                        },
                        {
                          name: "Modern HR",
                          desc: "Do something more with a modern people platform",
                          icon: "👥",
                          href: "/products/hr",
                        },
                        {
                          name: "Time & Attendance",
                          desc: "Manage Leaves, track time and pay on time",
                          icon: "⏰",
                          href: "/products/attendance",
                        },
                        {
                          name: "Hiring & Onboarding",
                          desc: "Create a great candidate experience before and after joining",
                          icon: "📝",
                          href: "/products/onboarding",
                        },
                        {
                          name: "Timesheets & Projects",
                          desc: "Manage time, resource and project profitability efficiently",
                          icon: "📋",
                          href: "/products/projects",
                        },
                      ].map((product, index) => (
                        <a
                          key={product.name}
                          href={product.href}
                          className="flex items-start space-x-3 hover:bg-blue-500/10 rounded-xl p-3 transition-all duration-300 group border border-transparent hover:border-blue-500/30"
                        >
                          <span className="text-2xl mt-1 group-hover:scale-110 transition-transform duration-300">
                            {product.icon}
                          </span>
                          <div>
                            <h3 className="text-white text-sm font-semibold group-hover:text-blue-300 transition-colors">
                              {product.name}
                            </h3>
                            <p className="text-gray-400 text-xs mt-1 group-hover:text-gray-300 transition-colors">
                              {product.desc}
                            </p>
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div
                className="relative"
                onMouseEnter={() => setIsCustomersOpen(true)}
                onMouseLeave={() => setIsCustomersOpen(false)}
              >
                <button className="text-blue-200 hover:text-blue-400 px-3 py-2 text-sm font-medium flex items-center space-x-1 transition-all duration-300 hover:bg-blue-500/10 rounded-lg group">
                  <span>Customers</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                      isCustomersOpen ? "rotate-180" : ""
                    } group-hover:text-blue-400`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 9l6 6 6-6"
                    />
                  </svg>
                </button>
                {isCustomersOpen && (
                  <div className="absolute top-full left-0 w-64 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/30 z-50 overflow-hidden">
                    <div className="py-2">
                      {[
                        { name: "Case Studies", href: "/Customers/CaseStudies" },
                        { name: "Testimonials", href: "/Customers/Testimonials" },
                        { name: "Success Stories", href: "/Customers/SuccessStories" },
                        { name: "Support", href: "/Customers/Support" },
                        { name: "Wall of Love", href: "/Customers/WallOfLove" }
                      ].map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="block px-4 py-3 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-white transition-all duration-300 border-l-2 border-transparent hover:border-blue-500"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="hidden lg:flex xl:hidden items-center space-x-6">
            <a
              href="/"
              className="text-white hover:text-blue-400 px-2 py-2 text-sm font-medium transition-colors hover:bg-blue-500/10 rounded-lg"
            >
              Home
            </a>

            <div
              className="relative"
              onMouseEnter={() => setIsProductsOpen(true)}
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button className="text-white hover:text-blue-400 px-2 py-2 text-sm font-medium flex items-center space-x-1 transition-colors hover:bg-blue-500/10 rounded-lg">
                <span>Products</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-1 w-64 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/30 z-50">
                  <div className="py-1">
                    {[
                      {
                        name: "Payroll Software",
                        href: "/products/payroll",
                      },
                      {
                        name: "Performance & Careers",
                        href: "/products/performance",
                      },
                      { name: "Modern HR", href: "/products/hr" },
                      {
                        name: "Time & Attendance",
                        href: "/products/attendance",
                      },
                      {
                        name: "Hiring & Onboarding",
                        href: "/products/onboarding",
                      },
                      {
                        name: "Timesheets & Projects",
                        href: "/products/projects",
                      },
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-blue-500/10 hover:text-white transition-all duration-300"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setIsCustomersOpen(true)}
              onMouseLeave={() => setIsCustomersOpen(false)}
            >
              <button className="text-white hover:text-blue-400 px-2 py-2 text-sm font-medium flex items-center space-x-1 transition-colors hover:bg-blue-500/10 rounded-lg">
                <span>Customers</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {isCustomersOpen && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-gray-900/95 backdrop-blur-xl rounded-xl shadow-2xl border border-blue-500/30 z-50">
                  <div className="py-1">
                    {[
                      { name: "Case Studies", href: "/Customers/CaseStudies" },
                      { name: "Testimonials", href: "/Customers/Testimonials" },
                      { name: "Success Stories", href: "/Customers/SuccessStories" },
                      { name: "Support", href: "/Customers/Support" },
                      { name: "Wall of Love", href: "/Customers/WallOfLove" }
                    ].map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-4 lg:space-x-6">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search..."
                className="bg-black/50 border border-blue-500/30 text-white placeholder-gray-400 px-4 py-2 pr-10 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm w-36 xl:w-48 backdrop-blur-sm transition-all duration-300"
              />
              <img
                className="absolute right-2 xl:right-3 top-1/2 transform -translate-y-1/2 w-3 xl:w-4 h-3 xl:h-4 text-gray-400"
                src="/search.png"
                alt="Search"
              />
            </div>

            <button className="text-gray-400 hover:text-gray-600 p-1 xl:p-2 hidden md:block">
              <img
                src="/Vector.png"
                alt="Icon"
                className="w-3 xl:w-4 h-4 xl:h-5"
              />
            </button>
            <button className="text-gray-400 hover:text-gray-600 p-1 xl:p-2 hidden md:block">
              <img
                src="/globe.png"
                alt="Globe"
                className="w-4 xl:w-5 h-4 xl:h-5"
              />
            </button>

            {/* Auth Buttons - Always visible */}
            <button className="text-white hover:text-blue-400 px-2 sm:px-3 xl:px-3 py-1 xl:py-2 text-xs sm:text-sm xl:text-sm font-medium transition-colors whitespace-nowrap">
              Sign Up
            </button>

            <Button label="Login" variant="secondary" size="sm" />

            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-400 hover:text-white p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                aria-expanded="false"
                aria-label="Toggle navigation menu"
              >
                <svg
                  className={`w-6 h-6 transform transition-transform duration-200 ${
                    isMenuOpen ? "rotate-90" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-blue-500/30 absolute top-full left-0 right-0 z-50 shadow-2xl">
          <div className="px-4 pt-2 pb-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            <a
              href="/"
              onClick={closeMobileMenu}
              className="text-white hover:text-blue-400 hover:bg-blue-500/10 block px-3 py-3 text-base font-medium rounded-lg transition-all duration-300"
            >
              Home
            </a>

            <div>
              <button
                className="text-white hover:text-blue-400 hover:bg-blue-500/10 w-full text-left px-3 py-3 text-base font-medium flex items-center justify-between rounded-lg transition-all duration-300"
                onClick={() => setIsProductsOpen(!isProductsOpen)}
              >
                <span>Products</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-300 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {isProductsOpen && (
                <div className="space-y-1">
                  {[
                    { name: "Payroll Software", path: "/products/payroll" },
                    { name: "Performance & Careers", path: "/products/performance" },
                    { name: "Modern HR", path: "/products/hr" },
                    { name: "Time & Attendance", path: "/products/attendance" },
                    { name: "Hiring & Onboarding", path: "/products/onboarding" },
                    { name: "Timesheets & Projects", path: "/products/projects" },
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="text-gray-300 hover:text-white hover:bg-blue-500/10 block px-3 py-2 text-sm rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-blue-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                className="text-white hover:text-blue-400 hover:bg-gray-800 w-full text-left px-3 py-2 text-base font-medium flex items-center justify-between rounded-md transition-colors"
                onClick={() => setIsCustomersOpen(!isCustomersOpen)}
              >
                <span>Customers</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    isCustomersOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 9l6 6 6-6"
                  />
                </svg>
              </button>
              {isCustomersOpen && (
                <div className="ml-6 space-y-1">
                  {[
                    { name: "Case Studies", path: "/Customers/CaseStudies" },
                    { name: "Testimonials", path: "/Customers/Testimonials" },
                    { name: "Success Stories", path: "/Customers/SuccessStories" },
                    { name: "Support", path: "/Customers/Support" },
                    { name: "Wall of Love", path: "/Customers/WallOfLove" }
                  ].map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      onClick={closeMobileMenu}
                      className="text-gray-300 hover:text-white hover:bg-blue-500/10 block px-3 py-2 text-sm rounded-lg transition-all duration-300 border-l-2 border-transparent hover:border-blue-500"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="px-3 py-2">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-black text-white placeholder-gray-400 px-4 py-2 pr-10 rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-full text-sm"
                />
                <svg
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="px-3 py-2 border-t border-gray-700">
              <div className="flex items-center justify-center space-x-4 py-2">
                <button className="text-gray-400 hover:text-white p-2 rounded-md transition-colors">
                  <img
                    src="/Vector.png"
                    alt="Vector Icon"
                    className="w-4 h-4"
                  />
                </button>
                <button className="text-gray-400 hover:text-white p-2 rounded-md transition-colors">
                  <img src="/globe.png" alt="Globe Icon" className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
