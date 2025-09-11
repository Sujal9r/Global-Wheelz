"use client";
import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const router = useRouter();
  const pathname = usePathname();

  // Track scroll progress and navbar background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;

      setScrollProgress(progress);
      setScrolled(scrollTop > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navigation items
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { 
      name: "Services", 
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        { name: "Door to Door Services", path: "/services/door-to-door", icon: "🚚" },
        { name: "International Transportation", path: "/services/international-transportation", icon: "🌍" },
        { name: "Sea Freight", path: "/services/sea-freight", icon: "🚢" },
        { name: "Custom Clearance", path: "/services/custom-clearance", icon: "📋" },
        { name: "Air Freight", path: "/services/air-freight", icon: "✈️" }
      ]
    },
    { name: "Contact", path: "/contact" }
  ];

  // Check if current path is active
  const isActive = (path) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  // Check if services dropdown should be open
  const isServicesActive = () => {
    return navItems.find(item => item.hasDropdown)?.dropdownItems.some(item => isActive(item.path)) || false;
  };

  // Handle navigation
  const handleNavigation = (path) => {
    router.push(path);
    closeMobileMenu();
  };

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMobileMenu = () => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  };

  // Toggle services dropdown
  const toggleServices = () => setIsServicesOpen(!isServicesOpen);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-20
          ${
            scrolled
              ? "bg-white/95 backdrop-blur-xl shadow-md border-b border-red-100"
              : "bg-white/90 backdrop-blur-sm"
          }`}
      >
      <div className="relative w-full px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <button
              onClick={() => handleNavigation("/")}
              className="focus:outline-none"
            >
              <img
                src="/Logo.png"
                alt="Logo"
                className="h-12 md:h-15 lg:h-18 w-auto object-contain hover:opacity-80 transition-opacity duration-300"
              />
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {item.hasDropdown ? (
                    <div
                      onMouseEnter={() => setIsServicesOpen(true)}
                      onMouseLeave={() => setIsServicesOpen(false)}
                    >
                      <button
                        className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group flex items-center space-x-1 ${
                          isServicesActive()
                            ? "text-red-600 border-b-2 border-red-600"
                            : "text-gray-700 hover:text-red-600"
                        }`}
                      >
                        <span className="relative z-10">{item.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${
                            isServicesOpen ? "rotate-180" : ""
                          }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                      
                      {/* Services Dropdown */}
                      {isServicesOpen && (
                        <div className="absolute top-full left-0 mt- w-96 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-red-200 z-20 overflow-hidden">
                          <div className="p-6">
                            <div className="grid grid-cols-2 gap-4">
                              {item.dropdownItems.map((dropdownItem, index) => (
                                <button
                                  key={dropdownItem.name}
                                  onClick={() => handleNavigation(dropdownItem.path)}
                                  className={`group flex flex-col items-center text-center space-y-3 p-4 rounded-xl transition-all duration-300 hover:scale-105 ${
                                    isActive(dropdownItem.path)
                                      ? "bg-red-50 border border-red-200"
                                      : "hover:bg-red-50"
                                  }`}
                                  style={{ animationDelay: `${index * 0.1}s` }}
                                >
                                  <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                    {dropdownItem.icon}
                                  </div>
                                  <div className="text-center">
                                    <h3 className={`font-semibold text-sm ${
                                      isActive(dropdownItem.path) ? "text-red-600" : "text-gray-800 group-hover:text-red-600"
                                    }`}>
                                      {dropdownItem.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">
                                      {dropdownItem.name === "Door to Door Services" && "Complete end-to-end delivery solutions"}
                                      {dropdownItem.name === "International Transportation" && "Global shipping and logistics"}
                                      {dropdownItem.name === "Sea Freight" && "Ocean freight and container shipping"}
                                      {dropdownItem.name === "Custom Clearance" && "Expert customs and compliance services"}
                                      {dropdownItem.name === "Air Freight" && "Fast and reliable air cargo solutions"}
                                    </p>
                                  </div>
                                </button>
                      ))}
                    </div>
                            <div className="mt-4 pt-4 border-t border-red-100">
                              <button
                                onClick={() => handleNavigation("/services")}
                                className="w-full text-center text-red-600 font-semibold text-sm hover:text-red-700 transition-colors duration-300"
                              >
                                View All Services →
                </button>
                            </div>
                    </div>
                  </div>
                )}
              </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 group ${
                        isActive(item.path)
                          ? "text-red-600 border-b-2 border-red-600"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {!isActive(item.path) && (
                        <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></div>
                      )}
              </button>
              )}
            </div>
              ))}
          </div>

            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <button
                onClick={() => handleNavigation("/contact")}
                className="relative overflow-hidden group bg-gradient-to-r from-red-500 to-red-600 
                                 text-white px-6 py-2.5 rounded-full font-medium text-sm 
                                 hover:from-red-600 hover:to-red-700 transform hover:scale-105 
                                 transition-all duration-300 shadow-lg hover:shadow-red-500/30"
              >
                <span className="relative z-10">Get Quote</span>
                <div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent 
                                transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                                transition-transform duration-700"
                ></div>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                aria-label="Toggle navigation menu"
                className="relative text-gray-700 hover:text-red-600 p-2 focus:outline-none group"
              >
                <div className="relative w-6 h-6">
                  <span
                    className={`absolute top-0 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "rotate-45 translate-y-2.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`absolute top-5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ${
                      isMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
          </div>
        </div>
      </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b 
                     border-red-100 shadow-xl transform transition-all duration-300 
                     ${
                       isMenuOpen
                         ? "opacity-100 translate-y-0"
                         : "opacity-0 -translate-y-4 pointer-events-none"
                     }`}
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item, index) => (
              <div key={item.name}>
                {item.hasDropdown ? (
            <div>
              <button
                      onClick={toggleServices}
                      className={`flex items-center justify-between w-full text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                        isServicesActive()
                          ? "text-red-600 bg-red-50 border-l-4 border-red-600 font-semibold"
                          : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                      }`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <span>{item.name}</span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          isServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
                    
                    {/* Mobile Services Dropdown */}
                    {isServicesOpen && (
                      <div className="ml-4 mt-2">
                        <div className="grid grid-cols-2 gap-3">
                          {item.dropdownItems.map((dropdownItem, subIndex) => (
                          <button
                            key={dropdownItem.name}
                            onClick={() => handleNavigation(dropdownItem.path)}
                            className={`flex flex-col items-center text-center space-y-2 py-3 px-2 rounded-lg transition-all duration-300 ${
                              isActive(dropdownItem.path)
                                ? "text-red-600 bg-red-50 border border-red-200 font-semibold"
                                : "text-gray-600 hover:text-red-600 hover:bg-red-50"
                            }`}
                            style={{ animationDelay: `${(index * 0.1) + (subIndex * 0.05)}s` }}
                          >
                            <span className="text-lg">{dropdownItem.icon}</span>
                            <span className="text-sm">{dropdownItem.name}</span>
                          </button>
                          ))}
                        </div>
                      </div>
                    )}
            </div>
                ) : (
              <button
                    onClick={() => handleNavigation(item.path)}
                    className={`block w-full text-left py-3 px-4 rounded-lg transition-all duration-300 transform hover:translate-x-2 ${
                      isActive(item.path)
                        ? "text-red-600 bg-red-50 border-l-4 border-red-600 font-semibold"
                        : "text-gray-700 hover:text-red-600 hover:bg-red-50"
                    }`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {item.name}
                  </button>
              )}
            </div>
            ))}
            <div className="pt-4">
              <button 
                onClick={() => handleNavigation("/contact")}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-full font-medium hover:from-red-600 hover:to-red-700 transform hover:scale-105 transition-all duration-300"
              >
                Get Quote
                </button>
              </div>
            </div>
          </div>
      </nav>

      {/* Scroll Progress Bar */}
      <div className="fixed top-20 left-0 right-0 h-2 bg-gray-200 z-10">
        <div
          className="h-full bg-red-500 transition-all duration-200"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        </div>
    </>
  );
};

export default Navbar;
