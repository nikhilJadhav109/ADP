import React from "react";
import { CONTACT_INFO } from "../constants/contact";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
        Privacy Policy
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p>
          At <strong>Agrawal Ply Decor</strong>, we respect your privacy.
          This Privacy Policy explains how we collect, use, and protect your information when you use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Personal Information like name, phone, email, and address.</li>
          <li>Usage data such as IP address, browser info, and page visits.</li>
          <li>Cookies and similar technologies for functionality and analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Information</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>To provide, maintain, and improve our services.</li>
          <li>Respond to inquiries or customer service requests.</li>
          <li>Send promotions, offers, and updates.</li>
          <li>Comply with legal requirements.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p>
          We use industry-standard security measures to safeguard your data. However, no method is 100% secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p>
          You have the right to access, correct, or request deletion of your personal information.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
        <p>For any questions about this Privacy Policy, contact us:</p>
        <ul className="pl-0 mt-2">
         <li>📧 Email: {CONTACT_INFO.EMAIL}</li>
          <li>📞 Phone: {CONTACT_INFO.PHONE_NUMBER_1} / {CONTACT_INFO.PHONE_NUMBER_2}</li>
          <li>📍 Address: {CONTACT_INFO.ADDRESS_LINE_1} {CONTACT_INFO.ADDRESS_LINE_2}</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
