import React from "react";
import { CONTACT_INFO } from "../constants/contact";

const TermsOfService: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20 text-gray-800 dark:text-gray-200">
      <h1 className="text-4xl font-bold mb-6 text-teal-600 dark:text-teal-400">
        Terms of Service
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p>By using Agrawal Ply Decor's services, you agree to these terms.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Services</h2>
        <p>We offer interior design and decor services for homes, offices, and luxury spaces.</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. User Responsibilities</h2>
        <ul className="list-disc pl-6 space-y-1">
          <li>Provide accurate information.</li>
          <li>Do not misuse or damage our website or services.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Intellectual Property</h2>
        <p>
          All content, including designs, logos, text, and graphics, is owned by Agrawal Ply Decor.
          Unauthorized use is prohibited.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Limitation of Liability</h2>
        <p>
          We are not liable for any damages arising from your use of our website or services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Governing Law</h2>
        <p>These terms are governed by the laws of India.</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">7. Contact Us</h2>
        <p>For questions regarding these Terms, contact us:</p>
        <ul className="pl-0 mt-2">
        <li>📧 Email: {CONTACT_INFO.EMAIL}</li>
                 <li>📞 Phone: {CONTACT_INFO.PHONE_NUMBER_1} / {CONTACT_INFO.PHONE_NUMBER_2}</li>
                 <li>📍 Address: {CONTACT_INFO.ADDRESS_LINE_1} {CONTACT_INFO.ADDRESS_LINE_2}</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
