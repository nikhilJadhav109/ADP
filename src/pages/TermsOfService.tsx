import React from "react";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6 text-teal-600">Terms of Service</h1>
      <p className="mb-4 text-gray-700">
        Effective Date: June 30, 2025
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-600">
          By using Agrawal Ply Decor's website or services, you agree to these Terms of Service.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
        <p className="text-gray-600">
          We provide interior design and decor solutions tailored to residential, commercial, and luxury spaces.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 text-gray-600 space-y-1">
          <li>Provide accurate information.</li>
          <li>Do not misuse or attempt to harm the website or services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
        <p className="text-gray-600">
          All content, including images, logos, and text, are the property of Agrawal Ply Decor.
          Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
        <p className="text-gray-600">
          We are not liable for any indirect or consequential damages arising from the use of our services or website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
        <p className="text-gray-600">
          These terms are governed by the laws of India.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Changes to Terms</h2>
        <p className="text-gray-600">
          We may update these Terms from time to time. Updates will be posted on this page.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">8. Contact Us</h2>
        <p className="text-gray-600">
          For any questions regarding these Terms, contact us at:
        </p>
        <ul className="list-none pl-0 text-gray-600 mt-2">
          <li>📧 Email: [your-email@example.com]</li>
          <li>📞 Phone: +91 [Your Phone Number]</li>
          <li>📍 Address: [Your Full Address]</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
