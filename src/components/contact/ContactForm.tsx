import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle, MailIcon, Phone } from "lucide-react";
import { CONTACT_INFO } from "../../constants/contact";
import { GOOGLE_FORM_SUBMIT_URL, WHATSAPP_LOGO } from "../../constants/path";
import { buildWhatsAppMessage, getWhatsAppUrl } from "../../helper/whatsapp";

// Define the ContactFormProps interface
interface ContactFormProps {}

const successMessageVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const formFieldVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};
const buttonVariants = {
  rest: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
  submit: {
    scale: 1.02,
    transition: { repeat: Infinity, duration: 0.5, ease: "easeInOut" },
  },
};

const ContactForm: React.FC<ContactFormProps> = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    size: "",
    budget: "",
    timeline: "",
    message: "", // Used for Project Location
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmittingWhatsApp, setIsSubmittingWhatsApp] = useState(false);
  const [isSubmittingGoogleForm, setIsSubmittingGoogleForm] = useState(false);
  const [googleFormStatus, setGoogleFormStatus] = useState("");
  const [toastMessage, setToastMessage] = useState("");
  const [toastType, setToastType] = useState<"success" | "error" | null>(null);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const whatsAppNumber = CONTACT_INFO.PHONE_NUMBER_1.replace(/\D/g, "");
  const TIMEOUT_DURATION = 60000; // Reduced timeout for better UX, originally 60000

  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => {
        setToastMessage("");
        setToastType(null);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error for the field being changed
    if (errors[e.target.name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [e.target.name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required.";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required.";
    }
    if (!formData.projectType) {
      newErrors.projectType = "Project Type is required.";
    }
    // Conditional validation for 'size' based on 'projectType'
    if (formData.projectType === "Residential Interior" && !formData.size) {
      newErrors.size = "Size is required for Residential Interior projects.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetFormAndState = () => {
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
    setIsSubmitted(false);
    setIsSubmittingWhatsApp(false);
    setIsSubmittingGoogleForm(false);
    setToastMessage("");
    setToastType(null);
    setErrors({}); // Clear any validation errors
  };

  const handleWhatsAppSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!validateForm()) {
      setToastMessage("Please fill in all required fields.");
      setToastType("error");
      return;
    }

    setIsSubmittingWhatsApp(true);

    const whatsappMessage = buildWhatsAppMessage(formData);
    const whatsappUrl = getWhatsAppUrl(whatsappMessage, whatsAppNumber);

    try {
      window.open(whatsappUrl, "_blank");
      // Add a small delay to allow the browser to initiate WhatsApp
      await new Promise((res) => setTimeout(res, 500));
      setIsSubmitted(true);
      setToastMessage("WhatsApp opened successfully!");
      setToastType("success");

      setTimeout(() => {
        resetFormAndState();
      }, TIMEOUT_DURATION);
    } catch (error) {
      console.error("Failed to open WhatsApp:", error);
      setToastMessage(
        "Failed to open WhatsApp. Please ensure you have WhatsApp installed."
      );
      setToastType("error");
      setIsSubmittingWhatsApp(false); // Reset submitting state on error
    }
  };

  const handleGoogleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission
    if (!validateForm()) {
      setToastMessage("Please fill in all required fields.");
      setToastType("error");
      return;
    }

    setIsSubmittingGoogleForm(true);
    setGoogleFormStatus("Submitting to Google Form...");

    const googleFormData = new FormData();

    const GOOGLE_FORM_FIELD_IDS = {
      name: "entry.1745983762",
      phone: "entry.1016672989",
      projectType: "entry.2000737575",
      size: "entry.167949453",
      budget: "entry.1942645453",
      timeline: "entry.320400057",
      projectLocation: "entry.2084026927",
      email: "entry.1444984601",
    };

    googleFormData.append(GOOGLE_FORM_FIELD_IDS.name, formData.name);
    googleFormData.append(GOOGLE_FORM_FIELD_IDS.phone, formData.phone);
    googleFormData.append(
      GOOGLE_FORM_FIELD_IDS.projectType,
      formData.projectType
    );
    googleFormData.append(GOOGLE_FORM_FIELD_IDS.size, formData.size);
    googleFormData.append(GOOGLE_FORM_FIELD_IDS.budget, formData.budget);
    googleFormData.append(GOOGLE_FORM_FIELD_IDS.timeline, formData.timeline);
    googleFormData.append(
      GOOGLE_FORM_FIELD_IDS.projectLocation,
      formData.message
    );
    googleFormData.append(GOOGLE_FORM_FIELD_IDS.email, formData.email);

    try {
      // Using 'no-cors' mode means we won't be able to read the response status,
      // but the request will still be sent.
      await fetch(GOOGLE_FORM_SUBMIT_URL, {
        method: "POST",
        body: googleFormData,
        mode: "no-cors",
      });

      setGoogleFormStatus("Successfully submitted");
      setToastMessage("Form sent successfully!");
      setToastType("success");
      setIsSubmitted(true);

      setTimeout(() => {
        resetFormAndState();
      }, TIMEOUT_DURATION);
    } catch (error) {
      console.error("Error submitting to Google Form:", error);
      setGoogleFormStatus("Failed to submit to Google Form. Please try again.");
      setToastMessage("Failed to send form. Please try again.");
      setToastType("error");
      setIsSubmittingGoogleForm(false); // Reset submitting state on error
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
          Thank You!
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
          Your request has been received and is being processed.
          <br />
          Our team will review it and get back to you shortly.
          <br />
          {googleFormStatus && (
            <span className="text-sm italic">{googleFormStatus}</span>
          )}
        </p>
        <div className="flex gap-3 justify-center">
          <motion.a
            href={`tel:${CONTACT_INFO.PHONE_NUMBER_1}`}
            className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-lg flex items-center"
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
    <>
      <AnimatePresence>
        {toastMessage && toastType && (
          <motion.div
            key="toast"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className={`fixed top-4 right-4 z-50 px-4 py-3 rounded-lg shadow-lg text-white ${
              toastType === "success" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            {toastMessage}
          </motion.div>
        )}
      </AnimatePresence>
      <motion.div
        className="bg-gray-50 dark:bg-gray-800 rounded-3xl px-8 py-4 shadow-xl border border-gray-100 dark:border-gray-700"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={cardVariants}
        transition={{ delay: 0.1, duration: 0.7 }}
      >
        <>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-4">
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
                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm ${
                  errors.name
                    ? "border-red-500"
                    : "border-gray-300 dark:border-gray-600"
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm ${
                    errors.phone
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                  placeholder="+91-9876543210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
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
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm ${
                    errors.projectType
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-600"
                  }`}
                >
                  <option value="">Select project type</option>
                  <option value="Residential Interior">
                    Residential Interior
                  </option>
                  <option value="Commercial Space">Commercial Space</option>
                  <option value="Luxury Home">Luxury Home</option>
                  <option value="Design Consultation">
                    Design Consultation
                  </option>
                  <option value="Other">Other</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.projectType}
                  </p>
                )}
              </motion.div>
            </div>
            {/* New "Size" Field - Conditionally Rendered */}
            {formData.projectType === "Residential Interior" && (
              <div>
                <label
                  htmlFor="size"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                >
                  Size{" "}
                  {formData.projectType === "Residential Interior" && (
                    <span className="text-red-500">*</span>
                  )}
                </label>
                <select
                  id="size"
                  name="size"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                >
                  <option value="">Select size</option>
                  <option value="1BHK">1 BHK</option>
                  <option value="2BHK">2 BHK</option>
                  <option value="3BHK">3 BHK</option>
                  <option value="4BHK">4 BHK</option>
                  <option value="5BHK">5 BHK</option>
                  <option value=">5BHK">&gt; 5 BHK</option>
                  <option value="Bungalow">Bungalow</option>
                  <option value="Row House">Row House</option>
                  <option value="Farm House">Farm House</option>
                  <option value="Duplex / Penthouse">Duplex / Penthouse</option>
                  <option value="Other">Other</option>
                </select>
                {errors.size && (
                  <p className="text-red-500 text-xs mt-1">{errors.size}</p>
                )}
              </div>
            )}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                variants={formFieldVariants}
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
                  <option value="Under INR 5 Lakhs">Under ₹5 Lakhs</option>
                  <option value="5 Lakhs to 10 Lakhs">₹5 - 10 Lakhs</option>
                  <option value="10 Lakhs to 25 Lakhs">₹10 - 25 Lakhs</option>
                  <option value="25 Lakhs to 50 Lakhs">₹25 - 50 Lakhs</option>
                  <option value="Above 50 Lakhs">Above ₹50 Lakhs</option>
                </select>
              </motion.div>
              <motion.div
                variants={formFieldVariants}
                transition={{
                  delay:
                    formData.projectType === "Residential Interior" ? 0.6 : 0.5, // Adjust delay based on conditional rendering
                }}
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
                  <option value="Immediate (1-2 months)">
                    Immediate (1-2 months)
                  </option>
                  <option value="Short Term (3-6 months)">
                    Short term (3-6 months)
                  </option>
                  <option value="Medium Term (6-12 months)">
                    Medium term (6-12 months)
                  </option>
                  <option value="Long Term (12+ months)">
                    Long term (1+ years)
                  </option>
                </select>
              </motion.div>
            </div>
            <motion.div
              variants={formFieldVariants}
              transition={{
                delay:
                  formData.projectType === "Residential Interior" ? 0.7 : 0.6, // Adjust delay based on conditional rendering
              }}
            >
              <label
                htmlFor="message" // This is your "Project Location" field
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
            <div className="flex gap-4 justify-between mt-6">
              {/* WhatsApp Submit Button */}
              <motion.button
                type="button" // IMPORTANT: Change to "button" so it doesn't trigger default form submission
                onClick={handleWhatsAppSubmit}
                className="w-1/2 bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isSubmittingWhatsApp ? "submit" : "rest"}
                disabled={isSubmittingWhatsApp || isSubmittingGoogleForm}
              >
                {isSubmittingWhatsApp ? (
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
                    Send
                  </>
                )}
              </motion.button>
              {/* Google Form Submit Button */}
              <motion.button
                type="button" // IMPORTANT: Change to "button"
                onClick={handleGoogleFormSubmit}
                className="w-1/2 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-2 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                animate={isSubmittingGoogleForm ? "submit" : "rest"}
                disabled={isSubmittingWhatsApp || isSubmittingGoogleForm}
              >
                {isSubmittingGoogleForm ? (
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
                    Sending...
                  </>
                ) : (
                  <>
                    <MailIcon className="w-5 h-5 mr-2" /> Send
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </>
      </motion.div>
    </>
  );
};

export default ContactForm;
