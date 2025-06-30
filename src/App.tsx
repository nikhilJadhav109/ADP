import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoadingScreen from "./components/LoadingScreen";
import Header from "./components/Header";
import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";

// Page Components
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import PortfolioPage from "./pages/PortfolioPage";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";
import BrandsPage from "./pages/BrandsPage";
import ContactPage from "./pages/ContactPage";
import Intro from "./components/Intro";
import ScrollToTop from "./ScrollToTop";
import { HelmetProvider } from "react-helmet-async";
import InteriorServicesPage from "./pages/InteriorServicesPage";
import PlywoodSupplyPage from "./pages/PlywoodSupplyPage";
import ModularServicesPage from "./pages/ModularServicesPage";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for a premium experience
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <ThemeProvider>
        <HelmetProvider>
          <LoadingScreen />
        </HelmetProvider>
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <HelmetProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Header />
            <main>
              <ScrollToTop />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/introduction" element={<Intro />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/testimonials" element={<TestimonialsPage />} />
                <Route path="/brands" element={<BrandsPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/services/interior" element={<InteriorServicesPage />} />
                <Route path="/services/plywood-supply" element={<PlywoodSupplyPage />} />
                <Route path="/services/modular" element={<ModularServicesPage />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/terms-of-service" element={<TermsOfService />} />
              </Routes>
            </main>
            <FloatingButtons />
            <Footer />
          </div>
        </Router>
      </HelmetProvider>
    </ThemeProvider>
  );
}

export default App;
