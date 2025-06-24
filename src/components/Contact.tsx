import React from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import ContactForm from './ContactForm';

const Contact: React.FC = () => {

  const formFields = [
    {
      group: [
        {
          type: 'text',
          name: 'name',
          label: 'Full Name',
          placeholder: 'Your full name',
          required: true
        },
        {
          type: 'email',
          name: 'email',
          label: 'Email Address',
          placeholder: 'your@email.com',
          required: true
        }
      ]
    },
    {
      group: [
        {
          type: 'tel',
          name: 'phone',
          label: 'Phone Number',
          placeholder: '+91-9876543210'
        },
        {
          type: 'select',
          name: 'projectType',
          label: 'Project Type',
          options: [
            { value: '', label: 'Select project type' },
            { value: 'residential', label: 'Residential Design' },
            { value: 'commercial', label: 'Commercial Space' },
            { value: 'luxury', label: 'Luxury Home' },
            { value: 'consultation', label: 'Design Consultation' },
            { value: 'other', label: 'Other' }
          ]
        }
      ]
    },
    {
      group: [
        {
          type: 'select',
          name: 'budget',
          label: 'Budget Range',
          options: [
            { value: '', label: 'Select budget range' },
            { value: 'under-5', label: 'Under ₹5 Lakhs' },
            { value: '5-10', label: '₹5 - 10 Lakhs' },
            { value: '10-25', label: '₹10 - 25 Lakhs' },
            { value: '25-50', label: '₹25 - 50 Lakhs' },
            { value: 'above-50', label: 'Above ₹50 Lakhs' }
          ]
        },
        {
          type: 'select',
          name: 'timeline',
          label: 'Timeline',
          options: [
            { value: '', label: 'Select timeline' },
            { value: 'immediate', label: 'Immediate (1-2 months)' },
            { value: 'short', label: 'Short term (3-6 months)' },
            { value: 'medium', label: 'Medium term (6-12 months)' },
            { value: 'long', label: 'Long term (1+ years)' }
          ]
        }
      ]
    },
    {
      type: 'textarea',
      name: 'message',
      label: 'Project Details',
      placeholder: 'Tell us about your project, specific requirements, style preferences, and any other details that would help us understand your vision...',
      required: true,
      rows: 5
    }
  ];

  const handleFieldChange = (fieldName: string, value: string, allData: Record<string, string>) => {
    console.log(`Field ${fieldName} changed to:`, value);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91-9876543210', '+91-9876543211'],
      action: 'tel:+91-9876543210'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@agrawalplydecor.com', 'projects@agrawalplydecor.com'],
      action: 'mailto:info@agrawalplydecor.com'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['123 Design Street', 'Interior City, IC 12345'],
      action: 'https://maps.google.com'
    },
    {
      icon: Clock,
      title: 'Working Hours',
      details: ['Mon - Sat: 9:00 AM - 7:00 PM', 'Sun: 10:00 AM - 4:00 PM'],
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Get In <span className="text-teal-600 dark:text-teal-400">Touch</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring your vision to life. Contact us today for a consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Let's Start a Conversation</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                Whether you're planning a complete home renovation, designing a new office space, or just need some design advice, we're here to help. Our team of experts is ready to turn your ideas into reality.
              </p>
            </div>

            {/* Contact Details */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{info.title}</h4>
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 dark:text-gray-300 text-sm">
                          {info.action && detailIndex === 0 ? (
                            <a
                              href={info.action}
                              className="hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
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
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="bg-teal-50 dark:bg-teal-900/20 rounded-2xl p-6 border border-teal-100 dark:border-teal-800">
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Need Immediate Assistance?</h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">Our design consultants are available to discuss your project requirements.</p>
              <div className="flex gap-3">
                <a
                  href="tel:+91-9876543210"
                  className="bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </a>
                <a
                  href="https://wa.me/919876543210"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
            <ContactForm
              title="Interior Design Consultation"
              description="Let's bring your vision to life. Fill out the form below and we'll get back to you soon."
              action="https://formsubmit.co/38711a72e270fdb5e66efa77c70d7089"
              fields={formFields}
              submitButtonText="Send Message"
              // onSubmit={handleFormSubmit}
              onChange={handleFieldChange} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;