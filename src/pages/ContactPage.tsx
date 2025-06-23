import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, CheckCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Form submitted:', formData);
  //   setIsSubmitted(true);
  //   setTimeout(() => {
  //     setIsSubmitted(false);
  //     setFormData({
  //       name: '',
  //       email: '',
  //       phone: '',
  //       projectType: '',
  //       budget: '',
  //       timeline: '',
  //       message: ''
  //     });
  //   }, 3000);
  // };

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

  const offices = [
    {
      city: 'Mumbai',
      address: '123 Design Street, Bandra West, Mumbai - 400050',
      phone: '+91-9876543210',
      email: 'mumbai@agrawalplydecor.com'
    },
    {
      city: 'Delhi',
      address: '456 Interior Avenue, Connaught Place, New Delhi - 110001',
      phone: '+91-9876543211',
      email: 'delhi@agrawalplydecor.com'
    },
    {
      city: 'Bangalore',
      address: '789 Decor Lane, Koramangala, Bangalore - 560034',
      phone: '+91-9876543212',
      email: 'bangalore@agrawalplydecor.com'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-teal-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Let's discuss your project and bring your vision to life. Contact us today for a consultation.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Let's Start a Conversation</h2>
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

              {/* Quick Actions */}
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
              {!isSubmitted ? (
                <>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Us a Message</h3>
                  <form className="space-y-6" action="https://formsubmit.co/38711a72e270fdb5e66efa77c70d7089" method="POST">
                    <input type="hidden" name="_template" value="table"></input>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                          placeholder="+91-9876543210"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select project type</option>
                          <option value="residential">Residential Design</option>
                          <option value="commercial">Commercial Space</option>
                          <option value="luxury">Luxury Home</option>
                          <option value="consultation">Design Consultation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Budget Range
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select budget range</option>
                          <option value="under-5">Under ₹5 Lakhs</option>
                          <option value="5-10">₹5 - 10 Lakhs</option>
                          <option value="10-25">₹10 - 25 Lakhs</option>
                          <option value="25-50">₹25 - 50 Lakhs</option>
                          <option value="above-50">Above ₹50 Lakhs</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                          Timeline
                        </label>
                        <select
                          id="timeline"
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                          <option value="">Select timeline</option>
                          <option value="immediate">Immediate (1-2 months)</option>
                          <option value="short">Short term (3-6 months)</option>
                          <option value="medium">Medium term (6-12 months)</option>
                          <option value="long">Long term (1+ years)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all duration-200 resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        placeholder="Tell us about your project, specific requirements, style preferences, and any other details that would help us understand your vision..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </button>
                  </form>
                </>
              ) : (
                <div className="text-center py-12">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Message Sent Successfully!</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Thank you for your inquiry. We'll get back to you within 24 hours to discuss your project.
                  </p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="tel:+91-9876543210"
                      className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Offices</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Visit us at any of our locations or schedule a consultation at your convenience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{office.city} Office</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300 text-sm">{office.address}</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
                    <a href={`tel:${office.phone}`} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors duration-200">
                      {office.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-teal-600 dark:text-teal-400 mr-3 flex-shrink-0" />
                    <a href={`mailto:${office.email}`} className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 text-sm transition-colors duration-200">
                      {office.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;