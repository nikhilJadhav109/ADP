import React from "react";
import { CONTACT_INFO } from "../constants/contact";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-10 py-20">
      <h1 className="text-4xl font-bold mb-6 text-teal-600">Privacy Policy</h1>
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Introduction</h2>
        <p className="text-gray-600">
          At <strong>Agrawal Ply Decor</strong>, we are committed to protecting your privacy.
          This Privacy Policy explains how we collect, use, and safeguard your information when you use our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Information We Collect</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Personal Information: name, phone, email, address.</li>
          <li>Usage Data: IP address, browser type, time spent, pages visited.</li>
          <li>Cookies for functionality and analytics.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. How We Use Your Information</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>To provide and improve our services.</li>
          <li>Respond to inquiries.</li>
          <li>Send updates and promotions with your consent.</li>
          <li>Comply with legal obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Data Security</h2>
        <p className="text-gray-600">
          We use appropriate security measures to protect your personal information from unauthorized access or disclosure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Your Rights</h2>
        <p className="text-gray-600">
          You may request access, correction, or deletion of your personal data at any time.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Contact Us</h2>
        <p className="text-gray-600">
          For any questions about this Privacy Policy, contact us at:
        </p>
        <ul className="list-none pl-0 text-gray-600 mt-2">
          <li>📧 Email: {CONTACT_INFO.EMAIL}</li>
          <li>📞 Phone: {CONTACT_INFO.PHONE_NUMBER_1} / {CONTACT_INFO.PHONE_NUMBER_2}</li>
          <li>📍 Address: {CONTACT_INFO.ADDRESS_LINE_1} {CONTACT_INFO.ADDRESS_LINE_2}</li>
        </ul>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
