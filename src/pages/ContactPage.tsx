import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle, // Using MessageCircle for WhatsApp button
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Assuming these constants are defined elsewhere or provided here for completeness.
// You might need to adjust CONTACT_INFO.PHONE_NUMBER_1 to the actual WhatsApp number.
const CONTACT_INFO = {
  PHONE_NUMBER_1: "+919823069099", // Example: Replace with your actual WhatsApp enabled number
  PHONE_NUMBER_2: "+918459758065",
  EMAIL: "agrawalplydecor@gmail.com",
  ADDRESS_LINE_1: "Agrawal Ply Decor",
  ADDRESS_LINE_2:
    "Sr 46/1/2, Sangam Hospital Rd, near Orchid the international school, Pisoli, Pune, Maharashtra 411060",
};

// Corrected MAP_LINK to be a proper Google Maps embed URL or a direct link that Google Maps understands.
// If you want a specific embedded map, you usually get an iframe src from Google Maps Embed API.
// For a simple link to open Google Maps, it's typically:
const MAP_LINK = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3159.851204360001!2d73.90868613031786!3d18.450845940102138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eb255da48447%3A0x45a26649ef046df8!2sAgrawal%20Ply%20Decor!5e0!3m2!1sen!2sin!4v1750698235313!5m2!1sen!2sin";
const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    size: "", // Added new field for size
    budget: "",
    timeline: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submission feedback

  // WhatsApp number to send messages to
  const whatsAppNumber = CONTACT_INFO.PHONE_NUMBER_1.replace(/\D/g, ""); // Remove non-digits for URL

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Construct the WhatsApp message
    let whatsappMessage = `
Hello, I'm interested in discussing a project. Here are my details:

Name: ${formData.name || "N/A"}
Email: ${formData.email || "N/A"}
Phone: ${formData.phone || "N/A"}
Project Type: ${formData.projectType || "N/A"}`;

    // Conditionally add size to the message
    if (formData.projectType === "residential" && formData.size) {
      whatsappMessage += `
Size: ${formData.size}`;
    }

    whatsappMessage += `
Budget: ${formData.budget || "N/A"}
Timeline: ${formData.timeline || "N/A"}

Message:
${formData.message || "No specific message provided."}

Looking forward to your response!
    `.trim();

    // Encode the message for a URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

    try {
      // Open WhatsApp in a new tab
      window.open(whatsappUrl, "_blank");

      // Simulate a short delay for user feedback before "submission" is complete
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Redirecting to WhatsApp:", formData);
      setIsSubmitted(true); // Indicate that the WhatsApp redirect was initiated

      // Optionally, clear form data after successful initiation, but user might want to re-try if WhatsApp wasn't opened
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        size: "", // Clear size field as well
        budget: "",
        timeline: "",
        message: "",
      });
    } catch (error) {
      console.error("Failed to open WhatsApp:", error);
      // Optionally, display an error message to the user if the redirect failed
    } finally {
      setIsSubmitting(false);
      // The success message will remain visible until the user navigates away or refreshes
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: [CONTACT_INFO.PHONE_NUMBER_1, CONTACT_INFO.PHONE_NUMBER_2],
      action: `tel:${CONTACT_INFO.PHONE_NUMBER_1}`,
    },
    {
      icon: Mail,
      title: "Email",
      details: [CONTACT_INFO.EMAIL],
      action: `mailto:${CONTACT_INFO.EMAIL}`,
    },
    {
      icon: MapPin,
      title: "Address",
      details: [CONTACT_INFO.ADDRESS_LINE_1, CONTACT_INFO.ADDRESS_LINE_2],
      action: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
        CONTACT_INFO.ADDRESS_LINE_1 + ", " + CONTACT_INFO.ADDRESS_LINE_2
      )}`, // Direct link to open map
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 9:00 AM - 7:00 PM", "Sun: 10:00 AM - 4:00 PM"],
      action: null,
    },
  ];

  // Framer Motion variants
  const heroVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const sectionHeaderVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const formFieldVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const buttonVariants = {
    rest: { scale: 1, boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)" },
    hover: { scale: 1.03, boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.15)" },
    tap: { scale: 0.97 },
    submit: {
      scale: [1, 1.05, 1],
      rotate: [0, 5, -5, 0],
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const successMessageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="pt-20 bg-gray-50 dark:bg-gray-950 min-h-screen transition-colors duration-500 font-sans">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
          >
            Get In <span className="text-teal-400">Touch</span>
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto font-light"
            initial="hidden"
            animate="visible"
            variants={heroVariants}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            Ready to transform your space? Let's discuss your project and bring
            your vision to life. Connect with us for a personalized
            consultation.
          </motion.p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={sectionHeaderVariants}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  Let's Start a Conversation
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  Whether you're planning a complete home renovation, designing
                  a new office space, or just seeking expert design advice, our
                  dedicated team is here to assist you. We're passionate about
                  turning your ideas into breathtaking realities.
                </p>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                className="grid sm:grid-cols-2 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-2 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
                    variants={cardVariants}
                  >
                    <div className="flex items-start ">
                      <div className="w-10 h-10 bg-teal-100 dark:bg-teal-900/40 rounded-xl flex items-center justify-center mr-4 flex-shrink-0 shadow-inner">
                        <info.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                          {info.title}
                        </h4>
                        {info.details.map((detail, detailIndex) => (
                          <p
                            key={detailIndex}
                            className="text-gray-600 dark:text-gray-300 text-sm"
                          >
                            {info.action && detailIndex === 0 ? (
                              <a
                                href={info.action}
                                target={
                                  info.title === "Address" ? "_blank" : "_self"
                                } // Open map in new tab
                                rel="noopener noreferrer"
                                className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200 underline-offset-2 hover:underline"
                              >
                                {detail}
                              </a>
                            ) : (
                              detail
                            )}
                          </p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Quick Actions */}
              <motion.div
                className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border border-teal-100 dark:border-teal-800 shadow-md"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={cardVariants}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h4 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                  Need Immediate Assistance?
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our design consultants are available to discuss your project
                  requirements and answer any urgent questions you may have.
                </p>
                <div className="flex flex-wrap gap-3">
                  <motion.a
                    href={`tel:${CONTACT_INFO.PHONE_NUMBER_1}`}
                    className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us Now
                  </motion.a>
                  <motion.a
                    href={`https://wa.me/${whatsAppNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-lg font-medium transition-all duration-200 flex items-center justify-center shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    WhatsApp Us
                  </motion.a>
                </div>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
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
                  <form className="space-y-6" onSubmit={handleSubmit}>
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
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
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
                          Project Type
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
                          <option value="residential">
                            Residential Design
                          </option>
                          <option value="commercial">Commercial Space</option>
                          <option value="luxury">Luxury Home</option>
                          <option value="consultation">
                            Design Consultation
                          </option>
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
                          delay:
                            formData.projectType === "residential" ? 0.4 : 0.4,
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
                          delay:
                            formData.projectType === "residential" ? 0.5 : 0.5,
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
                          <option value="immediate">
                            Immediate (1-2 months)
                          </option>
                          <option value="short">Short term (3-6 months)</option>
                          <option value="medium">
                            Medium term (6-12 months)
                          </option>
                          <option value="long">Long term (1+ years)</option>
                        </select>
                      </motion.div>
                    </div>

                    <motion.div
                      variants={formFieldVariants}
                      transition={{
                        delay:
                          formData.projectType === "residential" ? 0.6 : 0.6,
                      }} // Adjust delay if size field is present
                    >
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
                      >
                        Project Details
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 shadow-sm"
                        placeholder="Tell us about your project, specific requirements, style preferences, and any other details that would help us understand your vision..."
                      ></textarea>
                    </motion.div>

                    <motion.button
                      type="submit"
                      className="w-full bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center shadow-lg hover:shadow-xl"
                      variants={buttonVariants}
                      whileHover="hover"
                      whileTap="tap"
                      animate={isSubmitting ? "submit" : "rest"} // Animate on submit
                      disabled={isSubmitting} // Disable button during submission
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
                          <MessageCircle className="w-5 h-5 mr-2" />
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
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4 animate-bounce-in" />{" "}
                  {/* Added bounce-in for extra flair */}
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    Redirecting to WhatsApp!
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 px-4">
                    Your message details are prepared. Please confirm the send
                    in the WhatsApp window that just opened (or will open
                    shortly).
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
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 sm:py-24 bg-gray-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={sectionHeaderVariants}
          >
            Find Our <span className="text-teal-600">Location</span>
          </motion.h2>
          <motion.div
            className="relative overflow-hidden rounded-3xl shadow-2xl aspect-w-16 aspect-h-9"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
            }}
            viewport={{ once: true, amount: 0.1 }}
            style={{ minHeight: "400px" }} // Ensure a minimum height for the map
          >
            <iframe
              src={MAP_LINK}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our Location in Pune"
              className="absolute inset-0 w-full h-full"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;