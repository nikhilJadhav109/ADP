import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { LOGO } from "../constants/path";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    // { name: 'Testimonials', path: '/testimonials' },
    { name: "Brands", path: "/brands" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isHomePage
          ? "bg-white/55 dark:bg-gray-900/95 backdrop-blur-md shadow-lg"
          : " dark:bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          <div className="flex-shrink-0">
            {/* <Link to="/">
              <div className="w-14 aspect-square rounded-full overflow-hidden flex items-center justify-center bg-gray-800 shadow-md">
                <img
                  src={LOGO}
                  alt="Agrawal Ply Decor Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </Link> */}
            <Link to="/">
                <span className="text-gray-900 dark:text-teal-400 text-l font-semibold text-center leading-none p-2">
                  Agrawal Ply Decor
                </span>
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`font-medium transition-colors duration-300 relative ${
                  location.pathname === item.path
                    ? "text-teal-600 dark:text-teal-400"
                    : isScrolled || !isHomePage
                    ? "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                    : "text-white hover:text-teal-400 drop-shadow-md"
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400"></span>
                )}
              </Link>
            ))}
          </nav>

          {/*<div className="hidden lg:flex items-center space-x-6">
            <ThemeToggle />
          </div>*/}

          {/* Mobile Menu Button & Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors duration-300 ${
                isScrolled || !isHomePage
                  ? "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                  : "text-white hover:text-teal-400 drop-shadow-md"
              }`}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md">
          <div className="px-4 pt-2 pb-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`block w-full text-left transition-colors duration-200 py-2 font-medium ${
                  location.pathname === item.path
                    ? "text-teal-600 dark:text-teal-400"
                    : "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="tel:+91-9876543210"
                className="flex items-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-9876543210</span>
              </a>
              <a
                href="mailto:info@agrawalplydecor.com"
                className="flex items-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 py-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>info@agrawalplydecor.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
