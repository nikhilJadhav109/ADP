import { motion } from "framer-motion";
import { CONTACT_INFO } from "../../constants/contact";
import { Phone, Mail, MapPin, Clock, MailCheck } from "lucide-react";
import { cardVariants, sectionHeaderVariants } from "./motionVariants";

const contactInfo = [
  {
    icon: MailCheck,
    title: "Email",
    details: [CONTACT_INFO.EMAIL],
    action: `mailto:${CONTACT_INFO.EMAIL}`,
  },
  {
    icon: Phone,
    title: "Phone",
    details: [CONTACT_INFO.PHONE_NUMBER_1, CONTACT_INFO.PHONE_NUMBER_2],
    action: `tel:${CONTACT_INFO.PHONE_NUMBER_1}`,
  },
  {
    icon: MapPin,
    title: "Address",
    details: [CONTACT_INFO.ADDRESS_LINE_1, CONTACT_INFO.ADDRESS_LINE_2],
    action: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      CONTACT_INFO.ADDRESS_LINE_1 + ", " + CONTACT_INFO.ADDRESS_LINE_2
    )}`,
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Mon - Sat", " 10:00 AM - 8:00 PM"],
    action: null,
  },
];

const ContactDetails = () => {
  return (
    <div className="w-full">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionHeaderVariants}
        className="mb-8"
      >
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
          Let's Connect
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-base">
          Ready to assist with home, office, or consultations.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.2,
            },
          },
        }}
      >
        {contactInfo.map((info, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2 bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-300"
            variants={cardVariants}
            whileHover={{ scale: 1.01 }}
          >
            {/* Icon */}
            <div className="w-8 h-8 aspect-square bg-teal-100 dark:bg-teal-900 rounded-lg flex items-center justify-center">
              <info.icon className="w-5 h-5 text-teal-600 dark:text-teal-400" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h4 className="font-semibold text-lg text-gray-900 dark:text-white mb-1">
                {info.title}
              </h4>
              <div className="space-y-1">
                {info.details.map((detail, idx) => (
                  <div
                    key={idx}
                    className="text-sm text-gray-600 dark:text-gray-300 leading-snug break-all overflow-hidden"
                    // className="className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-snug break-words break-all overflow-hidden""
                  >
                    {info.action &&
                    (info.title === "Phone" ||
                      info.title === "Email" ||
                      info.title === "Address") ? (
                      <a
                        href={info.action}
                        target={info.title === "Address" ? "_blank" : "_self"}
                        rel="noopener noreferrer"
                        className="hover:text-teal-600 dark:hover:text-teal-400 underline underline-offset-4 decoration-transparent hover:decoration-current break-words transition-colors"
                      >
                        {detail}
                      </a>
                    ) : (
                      detail
                    )}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ContactDetails;
