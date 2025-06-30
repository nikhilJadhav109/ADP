import React, { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle, Phone } from "lucide-react";
import { buildWhatsAppMessage, getWhatsAppUrl } from "../../helper/whatsapp";
import { CONTACT_INFO } from "../../constants/contact";
import {
  buttonVariants,
  successMessageVariants,
  cardVariants,
  formFieldVariants,
} from "./motionVariants";
import { WHATSAPP_LOGO } from "../../constants/path";

interface ContactFormProps {
  heading?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  heading = "Send Us a Message",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    size: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const whatsAppNumber = CONTACT_INFO.PHONE_NUMBER_1.replace(/\D/g, "");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const whatsappMessage = buildWhatsAppMessage(formData);
    const whatsappUrl = getWhatsAppUrl(whatsappMessage, whatsAppNumber);

    try {
      window.open(whatsappUrl, "_blank");
      await new Promise((res) => setTimeout(res, 1500));
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        size: "",
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to open WhatsApp:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-12 bg-white dark:bg-gray-800 rounded-3xl"
        initial="hidden"
        animate="visible"
        variants={successMessageVariants}
      >
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
          Redirecting to WhatsApp!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
          Your message details are prepared. Please confirm the send in the
          WhatsApp window that just opened.
        </p>
        <div className="flex gap-3 justify-center">
          <motion.a
            href={`tel:${CONTACT_INFO.PHONE_NUMBER_1}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone className="w-5 h-5 mr-2" /> Call Now
          </motion.a>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="bg-gray-50 dark:bg-gray-800 rounded-3xl  px-8 py-4  shadow-xl border border-gray-100 dark:border-gray-700"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      transition={{ delay: 0.1, duration: 0.7 }}
    >
      {!isSubmitted ? (
        <>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Form Fields */}
            <motion.div variants={formFieldVariants}>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                placeholder="Your full name"
              />
            </motion.div>
            <motion.div
              variants={formFieldVariants}
              transition={{ delay: 0.1 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                placeholder="your@email.com"
              />
            </motion.div>

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={formFieldVariants}
                transition={{ delay: 0.2 }}
              >
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Phone Number<span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                  placeholder="+91-9876543210"
                />
              </motion.div>
              <motion.div
                variants={formFieldVariants}
                transition={{ delay: 0.3 }}
              >
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Project Type<span className="text-red-500">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                >
                  <option value="">Select project type</option>
                  <option value="residential">Residential Design</option>{" "}
                  {/* Corrected value */}
                  <option value="commercial">Commercial Space</option>
                  <option value="luxury">Luxury Home</option>
                  <option value="consultation">Design Consultation</option>
                  <option value="other">Other</option>
                </select>
              </motion.div>
            </div>

            {/* New "Size" Field - Conditionally Rendered */}
            {formData.projectType === "residential" && (
              <motion.div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Size
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  required // Make it required if residential is selected
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                >
                  <option value="">Select size</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="4BHK">4 BHK</option>
                  <option value="5BHK">5 BHK</option>
                  <option value="bungalow">Bungalow</option>
                  <option value="row_house">Row House</option>
                  <option value="farm_house">Farm House</option>
                  <option value="duplex">Duplex</option>
                </select>
              </motion.div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={formFieldVariants}
                transition={{
                  delay: formData.projectType === "residential" ? 0.4 : 0.4,
                }} // Adjust delay if size field is present
              >
                <label
                  htmlFor="budget"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                >
                  <option value="">Select budget range</option>
                  <option value="under-5">Under ₹5 Lakhs</option>
                  <option value="5-10">₹5 - 10 Lakhs</option>
                  <option value="10-25">₹10 - 25 Lakhs</option>
                  <option value="25-50">₹25 - 50 Lakhs</option>
                  <option value="above-50">Above ₹50 Lakhs</option>
                </select>
              </motion.div>
              <motion.div
                variants={formFieldVariants}
                transition={{
                  delay: formData.projectType === "residential" ? 0.5 : 0.5,
                }} // Adjust delay if size field is present
              >
                <label
                  htmlFor="timeline"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                >
                  <option value="">Select timeline</option>
                  <option value="immediate">Immediate (1-2 months)</option>
                  <option value="short">Short term (3-6 months)</option>
                  <option value="medium">Medium term (6-12 months)</option>
                  <option value="long">Long term (1+ years)</option>
                </select>
              </motion.div>
            </div>

            <motion.div
              variants={formFieldVariants}
              transition={{
                delay: formData.projectType === "residential" ? 0.6 : 0.6,
              }} // Adjust delay if size field is present
            >
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Project Location
              </label>
              <input
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                placeholder="Enter your project location"
              />
            </motion.div>

            <motion.button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              animate={isSubmitting ? "submit" : "rest"}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Opening WhatsApp...
                </>
              ) : (
                <>
                  <img
                    className="w-5 h-5 mr-2"
                    src={WHATSAPP_LOGO}
                    alt="WhatsApp Logo"
                  />{" "}
                  Send via WhatsApp
                </>
              )}
            </motion.button>
          </form>
        </>
      ) : (
        <motion.div
          className="text-center py-12 bg-white dark:bg-gray-800 rounded-3xl"
          initial="hidden"
          animate="visible"
          variants={successMessageVariants}
        >
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-in" />
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Redirecting to WhatsApp!
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
            Your message details are prepared. Please confirm the send in the
            WhatsApp window that just opened (or will open shortly).
          </p>
          <div className="flex gap-3 justify-center">
            <motion.a
              href={`tel:${CONTACT_INFO.PHONE_NUMBER_1}`}
              className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center shadow-md hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Now
            </motion.a>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default ContactForm;
