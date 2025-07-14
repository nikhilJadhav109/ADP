import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail, Download } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { DARK_LOGO, LIGHT_LOGO } from "../constants/path";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "Services",
      submenu: [
        { name: "Interior Design", path: "/services/interior" },
        { name: "Modular Furniture", path: "/services/modular" }, // <-- ADD THIS LINE
        { name: "Plywood Supply", path: "/services/plywood-supply" },
      ],
    },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    {
      name: "Download Catalogue",
      path: "/document/catalogue.pdf",
      download: true,
      icon: <Download className="w-5 h-5" />,
    },
  ];

    const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(prefersDark.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    prefersDark.addEventListener('change', handleChange);

    return () => prefersDark.removeEventListener('change', handleChange);
  }, []);
  const isHomePage = location.pathname === "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/55 dark:bg-gray-800/95 backdrop-blur-md shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
             <Link to="/" className="flex items-center gap-2">
      <img
        src={isDarkMode || isScrolled? LIGHT_LOGO : DARK_LOGO}
        alt="Agrawal Ply Decor Logo"
        className="w-16 h-16 object-contain transition-all duration-300"
      />
      <span
        className={`text-lg font-semibold leading-none transition-colors duration-300 ${
          isScrolled || !isHomePage
            ? "text-gray-900 dark:text-white"
            : "text-black dark:text-white"
        }`}
      >
        Agrawal Ply Decor
      </span>
    </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) =>
              item.download ? (
                <a
                  key={item.name}
                  href={item.path}
                  download="catalogue.pdf"
                  className={`font-medium transition-colors duration-300 relative flex items-center ${
                    isScrolled || !isHomePage
                      ? "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                      : "text-black hover:text-teal-400 drop-shadow-md dark:text-white"
                  }`}
                  title="Download Catalogue"
                  aria-label="Download Company Catalogue"
                >
                  {item.icon}
                </a>
              ) : item.submenu ? (
                <div
                  key={item.name}
                  className="relative flex items-center justify-center"
                  onMouseEnter={() => setIsServicesHovered(true)}
                  onMouseLeave={() => setIsServicesHovered(false)}
                >
                  <Link
                    to={item.path}
                    className={`font-medium transition-colors duration-300 relative ${
                      location.pathname.startsWith(item.path)
                        ? "text-teal-600 dark:text-teal-400"
                        : isScrolled || !isHomePage
                        ? "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                        : "text-black hover:text-teal-400 drop-shadow-md dark:text-white"
                    }`}
                  >
                    {item.name}
                    {(location.pathname === item.path ||
                      location.pathname.startsWith(item.path + "/")) && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400"></span>
                    )}
                  </Link>
                  {isServicesHovered && (
                    <div
                      // Removed mt-2, will adjust positioning through parent if needed, or rely on flex/block behavior
                      className={`absolute top-full left-0 py-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 `}
                    >
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className={`block px-4 py-2 text-sm ${
                            isScrolled || !isHomePage
                              ? "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                              : "text-black dark:dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                          }`}
                          onClick={() => setIsServicesHovered(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`font-medium transition-colors duration-300 relative ${
                    location.pathname === item.path
                      ? "text-teal-600 dark:text-teal-400"
                      : isScrolled || !isHomePage
                      ? "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                      : "text-black hover:text-teal-400 drop-shadow-md dark:text-white"
                  }`}
                >
                  {item.name}
                  {location.pathname === item.path && (
                    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-teal-600 dark:bg-teal-400"></span>
                  )}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <ThemeToggle />
          </div>

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
            {navItems.map((item) =>
              item.download ? (
                <a
                  key={item.name}
                  href={item.path}
                  download="Agrawal_Ply_Decor_Catalogue.pdf"
                  onClick={() => setIsMenuOpen(false)}
                  className={`block w-full text-left transition-colors duration-200 py-2 font-medium flex items-center ${"text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"}`}
                >
                  {item.icon}
                  <span className="ml-2">{item.name}</span>
                </a>
              ) : item.submenu ? (
                <div key={item.name}>
                  <button
                    onClick={() => setIsServicesHovered(!isServicesHovered)}
                    className={`block w-full text-left transition-colors duration-200 py-2 font-medium ${
                      location.pathname.startsWith(item.path)
                        ? "text-teal-600 dark:text-teal-400"
                        : "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                    }`}
                  >
                    {item.name}
                  </button>
                  {isServicesHovered && (
                    <div className="ml-4 border-l border-gray-200 dark:border-gray-700">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setIsServicesHovered(false);
                          }}
                          className={`block w-full text-left transition-colors duration-200 py-2 pl-4 text-sm ${
                            location.pathname === subItem.path
                              ? "text-teal-600 dark:text-teal-400"
                              : "text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400"
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
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
              )
            )}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <a
                href="tel:+91-9823069099"
                className="flex items-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 py-2"
              >
                <Phone className="w-4 h-4 mr-2" />
                <span>+91-9823069099</span>
              </a>
              <a
                href="mailto:agrawalplydecor@gmail.com"
                className="flex items-center text-gray-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 py-2"
              >
                <Mail className="w-4 h-4 mr-2" />
                <span>agrawalplydecor@gmail.com</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
