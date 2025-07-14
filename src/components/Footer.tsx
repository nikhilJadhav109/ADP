import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { FACEBOOK_LINK, INSTAGRAM_LINK } from "../constants/path";

const Footer: React.FC = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Interior Design", path: "/services/interior" },
    { name: "Modular Services", path: "/services/modular" },
    { name: "Plywood Supply", path: "/services/plywood-supply" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ];

  const services = [
    "Residential Interior",
    "Commercial Interior",
    "Luxury Interiors",
    "Turnkey Solutions",
    "Design Consultation",
    "Modular Furniture",
    "Plywood Design",
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/">
              <h3 className="text-2xl font-bold mb-4">
                Agrawal Ply Decor
              </h3>
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming spaces into extraordinary experiences through
              innovative design and exceptional craftsmanship for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a
                href={FACEBOOK_LINK}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                target="_blank"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
                target="_blank"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-teal-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li
                  key={index}
                  className="text-gray-300"
                >
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <span>
                <a
                href="tel:+91-9823069099"
                className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>
                  +91-9823069099{" "}
                </span>
              </a>
              <a
                href="tel:+91-8459758065"
                className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>
                  +91-8459758065{" "}
                </span>
              </a>
              </span>
              
              <a
                href="mailto:agrawalplydecor@gmail.com"
                className="flex items-center text-gray-300 hover:text-teal-400 transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-3 flex-shrink-0" />
                <span>agrawalplydecor@gmail.com</span>
              </a>
              <div className="flex items-start text-gray-300">
                <MapPin className="w-4 h-4 mr-3 flex-shrink-0 mt-1" />
                <span>
                  Sr 46/1/2
                  <br />
                  Near Orchids The International School,
                  <br />
                  Sangam Hospital Road,
                  <br />
                  Pisoli, Pune, Maharashtra-411060
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Agrawal Ply Decor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/privacy-policy"
                className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms-of-service"
                className="text-gray-400 hover:text-teal-400 text-sm transition-colors duration-200"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
