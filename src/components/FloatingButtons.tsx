import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MessageCircle, ArrowUp, Phone } from "lucide-react";
import { WHATSAPP_LOGO } from "../constants/path";

const FloatingButtons: React.FC = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEnquireNow = () => {
    navigate("/contact");
  };
  const pagesToHideButton = ["/contact"];

  const shouldHideButton = pagesToHideButton.includes(location.pathname);

  if (shouldHideButton) {
    return null; // Don't render anything
  }
  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+919823069099?text=Hi, I'm interested in your interior design services."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
      >
        <img
          className="w-6 h-6"
          src={WHATSAPP_LOGO}
          alt="WhatsApp Logo"
        />
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Chat on WhatsApp
        </span>
      </a>

      {/* Enquire Now Button */}
      <button
        onClick={handleEnquireNow}
        className="fixed bottom-0 left-0 w-full z-40 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-2 shadow-lg flex items-center justify-center md:hidden"
      >
        <Phone className="w-5 h-5 mr-2" />
        <span className="font-medium text-sm">Enquire Now</span>
      </button>

      <button
        onClick={handleEnquireNow}
        className="hidden md:block fixed right-6 top-1/2 transform -translate-y-1/2 z-40 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white p-3 rounded-l-full shadow-lg hover:shadow-xl transition-all duration-300 group "
      >
        <div className="flex items-center">
          <Phone className="w-5 h-5 mr-2" />
          {/* <span className="font-medium text-sm">Enquire Now</span> */}
        </div>
        <span className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
          Get a Free Quote
        </span>
      </button>
      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-50 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group"
        >
          <ArrowUp className="w-5 h-5" />
          <span className="absolute left-full ml-3 top-1/2 transform -translate-y-1/2 bg-gray-900 dark:bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
            Back to Top
          </span>
        </button>
      )}
    </>
  );
};

export default FloatingButtons;
